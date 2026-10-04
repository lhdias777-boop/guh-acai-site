const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PORT = Number(process.env.PORT || 3000);
const ADMIN_PASSWORD = "scdesign";
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const UPLOADS_DIR = path.join(ROOT, "uploads");
const STATE_FILE = path.join(DATA_DIR, "state.json");
const MENU_ACAI = {
  "tradicional": {name:"Tradicional", sizes:{500:23,700:29,1000:37}},
  "mineiro": {name:"Mineiro", sizes:{500:24,700:30,1000:39}},
  "sensacao": {name:"Sensação", sizes:{500:28,700:34,1000:43}},
  "xmorango": {name:"Xmorango", sizes:{500:28,700:35,1000:44}},
  "mix": {name:"Mix de frutas", sizes:{500:28,700:35,1000:44}},
  "tradmorango": {name:"Tradicional Morango", sizes:{500:26,700:32,1000:42}},
  "tnm": {name:"Trufado Ninho & morango", sizes:{500:30,700:42,1000:52}},
  "tmar": {name:"Trufado Maracujá", sizes:{500:30,700:42,1000:52}},
  "tn": {name:"Trufado Ninho", sizes:{500:30,700:41,1000:50}},
  "tm": {name:"Trufado Morango", sizes:{500:30,700:41,1000:50}},
  "bala-kids": {name:"Bala de Goma Kids", sizes:{500:25,700:32,1000:40}},
  "confete-kids": {name:"Confete Kids", sizes:{500:25,700:32,1000:40}},
  "vitamina": {name:"Vitamina de Açaí", sizes:{500:18,700:22}}
};
function normalizeMenuCatalog(products){
  const list = Array.isArray(products) ? products.map(p=>({...p})) : [];
  const byId = new Map(list.map(p=>[p.id,p]));
  const images = {
    tradicional:"tradicional.jpg", mineiro:"acai-mineiro.jpg", sensacao:"sensacao.jpg",
    xmorango:"xmorango.jpg", mix:"mix-frutas.jpg", tradmorango:"tradicional-morango.jpg",
    tnm:"trufado-ninho-morango.jpg", tmar:"trufado-maracuja.jpg", tn:"trufado-ninho-2.jpg",
    tm:"trufado-morango-2.jpg", "bala-kids":"amor-verao.jpg", "confete-kids":"amor-verao.jpg",
    vitamina:"tradicional.jpg"
  };
  for(const [id,spec] of Object.entries(MENU_ACAI)){
    const existing=byId.get(id);
    if(existing){
      existing.name=spec.name;
      existing.sizes={...spec.sizes,...(existing.sizes||{})};
    } else {
      list.push({id,cat:"acai",name:spec.name,desc:"",img:images[id],sizes:{...spec.sizes}});
    }
  }
  return list;
}


fs.mkdirSync(DATA_DIR, {recursive:true});
fs.mkdirSync(UPLOADS_DIR, {recursive:true});

const geladinhoImage = "data:image/jpeg;base64," +
  fs.readFileSync(path.join(ROOT,"geladinho-part1.txt"),"utf8") +
  fs.readFileSync(path.join(ROOT,"geladinho-part2.txt"),"utf8") +
  fs.readFileSync(path.join(ROOT,"geladinho-part3.txt"),"utf8") +
  fs.readFileSync(path.join(ROOT,"geladinho-part4.txt"),"utf8");

const MIME = {
  ".html":"text/html; charset=utf-8",
  ".js":"application/javascript; charset=utf-8",
  ".css":"text/css; charset=utf-8",
  ".json":"application/json; charset=utf-8",
  ".png":"image/png",
  ".jpg":"image/jpeg",
  ".jpeg":"image/jpeg",
  ".webp":"image/webp",
  ".gif":"image/gif",
  ".svg":"image/svg+xml",
  ".ico":"image/x-icon"
};

function readState(){
  try {
    const state = JSON.parse(fs.readFileSync(STATE_FILE,"utf8"));
    if(Array.isArray(state.products)){
      state.products.forEach(p=>{ if(p && p.cat==="chupchup") p.img=geladinhoImage; });
    }
    return state;
  }
  catch { return {}; }
}
function writeState(state){
  state.updatedAt = new Date().toISOString();
  const tmp = STATE_FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(state,null,2), "utf8");
  fs.renameSync(tmp, STATE_FILE);
  return state;
}
function saveDataUrl(value){
  if(typeof value !== "string") return value;
  if(value.startsWith("/uploads/")) return value;
  if(!value.startsWith("data:image/")) return value;
  const m = value.match(/^data:image\/([a-zA-Z0-9.+-]+);base64,(.+)$/s);
  if(!m) return value;
  const extMap = {jpeg:"jpg",jpg:"jpg",png:"png",webp:"webp",gif:"gif"};
  const ext = extMap[m[1].toLowerCase()] || "png";
  const filename = `image-${Date.now()}-${crypto.randomBytes(5).toString("hex")}.${ext}`;
  fs.writeFileSync(path.join(UPLOADS_DIR,filename), Buffer.from(m[2],"base64"));
  return `/uploads/${filename}`;
}
function processState(input){
  const state = {
    settings: {...(input.settings || {})},
    products: normalizeMenuCatalog(input.products),
    addons: Array.isArray(input.addons) ? input.addons : []
  };
  for(const key of ["logo","aboutImage","promoSlide1","promoSlide2","promoSlide3"]){
    if(state.settings[key]) state.settings[key] = saveDataUrl(state.settings[key]);
  }
  state.products.forEach(p=>{
    if(p && p.cat==="chupchup") p.img=geladinhoImage;
    else if(p && p.img) p.img = saveDataUrl(p.img);
  });
  return writeState(state);
}
function send(res,status,body,type="application/json"){
  res.writeHead(status,{"Content-Type":type,"Cache-Control":"no-store"});
  res.end(type.startsWith("application/json") ? JSON.stringify(body) : body);
}
function safePath(urlPath){
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const full = path.normalize(path.join(ROOT, decoded));
  if(!full.startsWith(ROOT)) return null;
  return full;
}
function serveStatic(req,res){
  let pathname = decodeURIComponent(req.url.split("?")[0]);
  if(pathname === "/") pathname="/index.html";
  const file = safePath(pathname);
  if(!file) return send(res,403,{error:"Forbidden"});
  fs.stat(file,(err,st)=>{
    if(err || !st.isFile()) return send(res,404,{error:"Not found"});
    const ext=path.extname(file).toLowerCase();
    res.writeHead(200,{"Content-Type":MIME[ext]||"application/octet-stream","Cache-Control":ext===".html"?"no-store":"public, max-age=31536000"});
    fs.createReadStream(file).pipe(res);
  });
}
function readBody(req){
  return new Promise((resolve,reject)=>{
    let data="", size=0;
    req.on("data",chunk=>{
      size+=chunk.length;
      if(size>60*1024*1024){reject(new Error("Payload too large"));req.destroy();return;}
      data+=chunk;
    });
    req.on("end",()=>resolve(data));
    req.on("error",reject);
  });
}

const server=http.createServer(async (req,res)=>{
  try{
    if(req.method==="GET" && req.url.split("?")[0]==="/api/state"){
      return send(res,200,readState());
    }
    if(req.method==="POST" && req.url.split("?")[0]==="/api/state"){
      if(req.headers["x-admin-password"] !== ADMIN_PASSWORD) return send(res,401,{error:"Unauthorized"});
      const raw=await readBody(req);
      const input=JSON.parse(raw||"{}");
      return send(res,200,processState(input));
    }
    serveStatic(req,res);
  }catch(e){
    console.error(e);
    send(res,500,{error:e.message||"Server error"});
  }
});
server.listen(PORT,()=>console.log(`Guh Açaí rodando em http://localhost:${PORT}`));
