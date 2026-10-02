const DEFAULT_SETTINGS = {
  logo: "logo-guh-acai.jpg",
  whatsapp: "5531988405083",
  instagram: "guuh_acai",
  topHandle: "guuh_acai",
  deliveryText: "Somente delivery",
  topCta: "Pedir no WhatsApp",
  heroEyebrow: "✨ Guh Açaí • Cardápio digital",
  heroBadge: "🛵 SOMENTE DELIVERY • Faça seu pedido pelo WhatsApp",
  heroTitle: "O seu açaí",
  heroTitleStrong: "do seu jeito.",
  heroDescription: "Escolha seu favorito, personalize com seus complementos e faça seu pedido em poucos passos.",
  promoSlide1: "",
  promoSlide2: "",
  promoSlide3: "",
  heroButton: "Ver cardápio",
  heroBowlText: "AÇAÍ",
  heroBadgeTitle: "Seu pedido",
  heroBadgeText: "feito do seu jeito 💜",
  menuCardapio: "Cardápio",
  menuMonte: "Monte seu açaí",
  menuSobre: "Sobre",
  menuFaq: "Dúvidas",
  menuFeedback: "Feedback",
  feedbackKicker: "FEEDBACK",
  feedbackTitle: "Conte pra gente o que achou 💜",
  feedbackDesc: "Sua opinião ajuda a Guh Açaí a melhorar cada vez mais.",
  feedbackFormTitle: "Deixe seu feedback",
  cartLabel: "Minha sacola",
  cardapioKicker: "CARDÁPIO",
  cardapioTitle: "Escolha seu favorito",
  cardapioDesc: "Os queridinhos da Guh Açaí em um só lugar.",
  searchPlaceholder: "Buscar açaí, morango, Ninho...",
  monteKicker: "MONTE DO SEU JEITO",
  monteTitle: "Crie o açaí que combina com você.",
  monteDesc: "Comece pelo tamanho e escolha os adicionais para deixar seu copo exatamente como você gosta.",
  monteButton: "Montar meu açaí",
  chupKicker: "CHUP CHUP GOURMET",
  chupTitle: "Geladinho, cremoso e irresistível 🍦",
  chupDesc: "Escolha seu sabor favorito e adicione ao pedido.",
  coposKicker: "COPOS MONTADOS",
  coposTitle: "Já vem caprichado",
  adicionaisKicker: "ACRÉSCIMOS",
  adicionaisTitle: "Deixe ainda melhor",
  adicionaisDesc: "Adicione seus favoritos ao pedido.",
  deliveryTitle: "Delivery",
  deliveryDesc: "Consulte a área de entrega no atendimento.",
  paymentTitle: "Pagamento",
  paymentDesc: "Pix, cartão e outras opções conforme disponibilidade.",
  quickTitle: "Pedido rápido",
  quickDesc: "Monte sua sacola e envie o pedido pelo WhatsApp.",
  aboutKicker: "SOBRE A GUH AÇAÍ",
  aboutTitle: "Mais sabor em cada colherada.",
  aboutText: "Uma experiência simples para você escolher, personalizar e pedir seu açaí sem complicação.",
  aboutStats1: "100%|personalizável",
  aboutStats2: "+ opções|para combinar",
  aboutStats3: "Online|e fácil de pedir",
  aboutImage: "cardapio-referencia.jpg",
  aboutCardTitle: "Cardápio atualizado",
  aboutCardText: "Confira sabores, tamanhos e adicionais antes de pedir.",
  faqKicker: "AJUDA",
  faqTitle: "Ficou com alguma dúvida?",
  faq1Q: "Como faço meu pedido?", faq1A: "Escolha um produto, selecione o tamanho, adicione ao carrinho e finalize. O site pode enviar o resumo do pedido para o WhatsApp da loja.",
  faq2Q: "Posso personalizar meu açaí?", faq2A: "Sim. Use a opção “Monte seu açaí” para escolher o tamanho e os adicionais disponíveis.",
  faq3Q: "Quais formas de pagamento estão disponíveis?", faq3A: "O checkout está preparado para Pix, cartão e pagamento na entrega. A integração de pagamento online deve ser conectada ao gateway escolhido pela loja.",
  faq4Q: "Como saber se entregam no meu endereço?", faq4A: "Informe o endereço no checkout ou fale com o atendimento para confirmar a área e a taxa de entrega.",
  footerTagline: "Seu açaí, do seu jeito. 💜",
  footerDelivery: "Somente delivery",
  footerRegion: "Consulte a região de entrega",
  footerCopyright: "© 2026 Guh Açaí • guuh_acai • Somente delivery • WhatsApp",
  primaryColor: "#7517d8",
  secondaryColor: "#ff2d8d",
  catAcai:"Açaí",catCopo:"Copo montado",catChup:"Chup Chup Gourmet",productAddButton:"+ Adicionar",modalSizeLabel:"Escolha o tamanho",modalAddonLabel:"Acréscimos",modalAddonHelp:"Escolha os adicionais para colocar junto com seu açaí.",modalAddButton:"Adicionar à sacola",builderPill:"Personalize",builderTitle:"Crie seu copo",builderSizeLabel:"Tamanho",builderAddonLabel:"Adicionais",builderAddButton:"Adicionar à sacola",cartKicker:"SEU PEDIDO",cartTitle:"Minha sacola",cartCheckoutButton:"Continuar pedido →",checkoutKicker:"FINALIZAR PEDIDO",checkoutTitle:"Quase lá! 💜",checkoutDesc:"Preencha seus dados para enviar o pedido.",nameLabel:"Nome",phoneLabel:"WhatsApp",addressLabel:"Endereço",complementLabel:"Complemento",paymentLabel:"Forma de pagamento",sendOrderButton:"Enviar pedido →"
};
let SITE_SETTINGS = {...DEFAULT_SETTINGS};
try { SITE_SETTINGS = {...DEFAULT_SETTINGS, ...(JSON.parse(localStorage.getItem("guhAcaiSettingsV1")||"{}"))}; } catch(e) {}
const WHATSAPP_NUMBER = SITE_SETTINGS.whatsapp || "5531988405083";
let products=[
{id:"tradicional",cat:"acai",name:"Tradicional",desc:"Creme de açaí, banana, granola, leite em pó e leite condensado.",img:"tradicional.jpg",sizes:{500:23,700:29,1000:37}},
{id:"mineiro",cat:"acai",name:"Mineiro",desc:"Creme de açaí, paçoca, leite em pó e leite condensado.",img:"acai-mineiro.jpg",sizes:{500:24,700:30,1000:39}},
{id:"sensacao",cat:"acai",name:"Sensação",desc:"Creme de açaí, creme de Nutella, canudinho, bombom, leite em pó, leite condensado e gotas de chocolate.",img:"sensacao.jpg",sizes:{500:28,700:34,1000:43}},
{id:"xmorango",cat:"acai",name:"Xmorango",desc:"Creme de açaí, morango, creme de Nutella, leite condensado e leite em pó.",img:"xmorango.jpg",sizes:{500:28,700:35,1000:44}},
{id:"mix",cat:"acai",name:"Mix de frutas",desc:"Creme de açaí, leite em pó, banana, kiwi, morango, manga e leite condensado.",img:"mix-frutas.jpg",sizes:{500:28,700:35,1000:44}},
{id:"tradmorango",cat:"acai",name:"Tradicional Morango",desc:"Creme de açaí, banana, morango, granola, leite em pó e leite condensado.",img:"tradicional-morango.jpg",sizes:{500:26,700:32,1000:42}},
{id:"tnm",cat:"acai",name:"Trufado Ninho & morango",desc:"Creme de açaí, creme de leite, Ninho, bis, gotas de chocolate, creme de Nutella, leite em pó e leite condensado.",img:"trufado-ninho-morango.jpg",sizes:{500:30,700:42,1000:52}},
{id:"tmar",cat:"acai",name:"Trufado Maracujá",desc:"Creme de açaí, bis, gotas de chocolate, creme de maracujá, creme de Nutella, leite em pó e leite condensado.",img:"trufado-maracuja.jpg",sizes:{500:30,700:42,1000:52}},
{id:"tn",cat:"acai",name:"Trufado Ninho",desc:"Creme de açaí, creme de leite, Ninho, bis, gotas de chocolate, creme de Nutella, leite em pó e leite condensado.",img:"trufado-ninho-2.jpg",sizes:{500:30,700:41,1000:50}},
{id:"tm",cat:"acai",name:"Trufado Morango",desc:"Creme de açaí, creme de morango, bis, gotas de chocolate, creme de Nutella, leite em pó e leite condensado.",img:"trufado-morango-2.jpg",sizes:{500:30,700:41,1000:50}},
{id:"bala-kids",cat:"acai",name:"Bala de Goma Kids",desc:"Creme de açaí, leite em pó, leite condensado, bala de goma e Nutella.",img:"amor-verao.jpg",sizes:{500:25,700:32,1000:40}},
{id:"confete-kids",cat:"acai",name:"Confete Kids",desc:"Creme de açaí, leite em pó, leite condensado, morango e confete.",img:"amor-verao.jpg",sizes:{500:25,700:32,1000:40}},
{id:"vitamina",cat:"acai",name:"Vitamina de Açaí",desc:"Vitamina cremosa de açaí.",img:"tradicional.jpg",sizes:{500:18,700:22}}
];
// Catálogo editável pelo Painel ADM. As alterações ficam salvas no navegador e
// substituem o catálogo padrão quando o site é recarregado.
try {
  const savedCatalog = localStorage.getItem("guhAcaiCatalogV1");
  if (savedCatalog) {
    const parsed = JSON.parse(savedCatalog);
    if (Array.isArray(parsed.products) && parsed.products.length) products = parsed.products;
  }
} catch (e) { console.warn("Não foi possível carregar o catálogo salvo.", e); }


let addons=[["Banana",3],["Manga",4],["Morango",5],["Granola",2],["Leite condensado",5],["Leite em pó",3.5],["Nutella",7]];
try { const sa=JSON.parse(localStorage.getItem("guhAcaiAddonsV1")||"null"); if(Array.isArray(sa)&&sa.length) addons=sa; } catch(e) {}
let cart=[],current=null,currentSize=null,builderSize=500,builderAddons=[],currentAddons=[],payment="Pix";
const ACaiImageFallbacks={tradicional:"https://img0.didiglobal.com/static/soda_public/do1_saACGHwAxPCZDePcsADW2759216890",mineiro:"https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/177349157469b55576727e5_75_75.jpeg",sensacao:"https://img0.didiglobal.com/static/soda_public/img_5427aacd0e18b31d585a8be473f91e7b.jpeg",xmorango:"https://static-images.ifood.com.br/image/upload/t_high/pratos/189c7b8b-e603-4743-9012-7ba862c7891d/202202252120_hs25_p.jpg",mix:"https://static.expressodelivery.com.br/imagens/banners/143878/Expresso-Delivery_cf4c1a8817aea4d14460f98b2b0199b4.jpg",tradmorango:"https://static-images.ifood.com.br/image/upload/t_high/pratos/189c7b8b-e603-4743-9012-7ba862c7891d/202202252120_hs25_p.jpg",tnm:"https://static-images.ifood.com.br/image/upload/t_high/pratos/189c7b8b-e603-4743-9012-7ba862c7891d/202202252120_hs25_p.jpg",tmar:"https://static.expressodelivery.com.br/imagens/banners/143878/Expresso-Delivery_cf4c1a8817aea4d14460f98b2b0199b4.jpg",tn:"https://img0.didiglobal.com/static/soda_public/img_5427aacd0e18b31d585a8be473f91e7b.jpeg",tm:"https://static-images.ifood.com.br/image/upload/t_high/pratos/189c7b8b-e603-4743-9012-7ba862c7891d/202202252120_hs25_p.jpg","bala-kids":"https://img0.didiglobal.com/static/soda_public/img_5427aacd0e18b31d585a8be473f91e7b.jpeg","confete-kids":"https://img0.didiglobal.com/static/soda_public/img_5427aacd0e18b31d585a8be473f91e7b.jpeg",vitamina:"https://img0.didiglobal.com/static/soda_public/do1_saACGHwAxPCZDePcsADW2759216890"};
function fallbackImage(product){return ACaiImageFallbacks[product?.id]||ACaiImageFallbacks.tradicional}
const money=n=>Number(n||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
function promoPrice(p,size){
  const normal=Number(p.sizes?.[size]||0);
  const promo=Number(p.promos?.[size]||0);
  return promo>0 && promo<normal ? promo : normal;
}
function priceHtml(p,size,extraClass=""){
  const normal=Number(p.sizes?.[size]||0), promo=promoPrice(p,size);
  return promo<normal ? `<span class="price-promo ${extraClass}"><del>${money(normal)}</del> <strong>${money(promo)}</strong></span>` : `<span class="price ${extraClass}">${money(normal)}</span>`;
}
function applySettings(){
 const s=SITE_SETTINGS;
 const set=(id,val)=>{const e=document.getElementById(id); if(e && val!==undefined) e.textContent=val};
 const attr=(sel,name,val)=>document.querySelectorAll(sel).forEach(e=>e.setAttribute(name,val));
 document.title=s.heroTitle+" "+s.heroTitleStrong+" • Cardápio Digital";
 document.querySelectorAll(".admin-logo img,.footer-logo").forEach(e=>e.src=s.logo);
 set("topHandle",s.topHandle); set("topDelivery",s.deliveryText);
 set("heroEyebrow",s.heroEyebrow); set("heroBadge",s.heroBadge); set("heroTitle",s.heroTitle); set("heroTitleStrong",s.heroTitleStrong); set("heroDescription",s.heroDescription); renderPromoCarousel(); set("heroButton",s.heroButton); set("heroBowlText",s.heroBowlText); set("heroBadgeTitle",s.heroBadgeTitle); set("heroBadgeText",s.heroBadgeText);
 const nav=[s.menuCardapio,s.menuMonte,s.menuSobre,s.menuFaq]; ["navCardapio","navMonte","navSobre","navFaq"].forEach((id,i)=>set(id,nav[i])); set("menuFeedbackLabel",s.menuFeedback); set("feedbackKicker",s.feedbackKicker); set("feedbackTitle",s.feedbackTitle); set("feedbackDesc",s.feedbackDesc); set("feedbackFormTitle",s.feedbackFormTitle); set("cartLabel",s.cartLabel);
 set("cardapioKicker",s.cardapioKicker);set("cardapioTitle",s.cardapioTitle);set("cardapioDesc",s.cardapioDesc); const search=document.getElementById("search"); if(search) search.placeholder=s.searchPlaceholder;
 set("monteKicker",s.monteKicker);set("monteTitle",s.monteTitle);set("monteDesc",s.monteDesc);set("monteButton",s.monteButton);
 set("chupKicker",s.chupKicker);set("chupTitle",s.chupTitle);set("chupDesc",s.chupDesc);set("coposKicker",s.coposKicker);set("coposTitle",s.coposTitle);set("adicionaisKicker",s.adicionaisKicker);set("adicionaisTitle",s.adicionaisTitle);set("adicionaisDesc",s.adicionaisDesc);
 set("deliveryTitle",s.deliveryTitle);set("deliveryDesc",s.deliveryDesc);set("paymentTitle",s.paymentTitle);set("paymentDesc",s.paymentDesc);set("quickTitle",s.quickTitle);set("quickDesc",s.quickDesc);
 set("aboutKicker",s.aboutKicker);set("aboutTitle",s.aboutTitle);set("aboutText",s.aboutText);set("aboutCardTitle",s.aboutCardTitle);set("aboutCardText",s.aboutCardText); const ai=document.getElementById("aboutImage");if(ai)ai.src=s.aboutImage;
 const stats=[s.aboutStats1,s.aboutStats2,s.aboutStats3]; stats.forEach((v,i)=>{const [a,b]=String(v).split("|");set("stat"+(i+1),a);set("stat"+(i+1)+"small",b||"")});
 set("goCheckout",s.cartCheckoutButton);set("catAcai",s.catAcai);set("catCopo",s.catCopo);set("catChup",s.catChup);set("productAddButton",s.productAddButton);set("modalSizeLabel",s.modalSizeLabel);set("modalAddonLabel",s.modalAddonLabel);set("modalAddonHelp",s.modalAddonHelp);set("modalAddButton",s.modalAddButton);set("builderPill",s.builderPill);set("builderTitle",s.builderTitle);set("builderSizeLabel",s.builderSizeLabel);set("builderAddonLabel",s.builderAddonLabel);set("builderAddButton",s.builderAddButton);set("cartKicker",s.cartKicker);set("cartTitle",s.cartTitle);set("cartCheckoutButton",s.cartCheckoutButton);set("checkoutKicker",s.checkoutKicker);set("checkoutTitle",s.checkoutTitle);set("checkoutDesc",s.checkoutDesc);set("nameLabel",s.nameLabel);set("phoneLabel",s.phoneLabel);set("addressLabel",s.addressLabel);set("complementLabel",s.complementLabel);set("paymentLabel",s.paymentLabel);set("sendOrderButton",s.sendOrderButton);set("tabTodos",s.tabTodos);set("tabAcai",s.tabAcai);set("tabCopos",s.tabCopos);set("tabChup",s.tabChup);set("verTodosChup",s.verTodos);set("verTodosCopos",s.verTodos);set("footerMenu",s.footerMenu);set("footerAtendimento",s.footerAtendimento);set("footerSocial",s.footerSocial);set("faqKicker",s.faqKicker);set("faqTitle",s.faqTitle); for(let i=1;i<=4;i++){set("faq"+i+"Q",s["faq"+i+"Q"]);set("faq"+i+"A",s["faq"+i+"A"])}
 set("footerTagline",s.footerTagline);set("footerDelivery",s.footerDelivery);set("footerRegion",s.footerRegion);set("footerCopyright",s.footerCopyright);
 document.querySelectorAll("[data-whatsapp]").forEach(e=>{e.href=`https://wa.me/${s.whatsapp}`}); document.querySelectorAll("[data-instagram]").forEach(e=>{e.href=`https://instagram.com/${s.instagram}`; if(e.dataset.instagramLabel) e.textContent=e.dataset.instagramLabel;});
 document.documentElement.style.setProperty("--primary",s.primaryColor);document.documentElement.style.setProperty("--secondary",s.secondaryColor);
}
let promoIndex=0, promoTimer=null;
function renderPromoCarousel(){
 const wrap=document.getElementById("promoCarousel"), track=document.getElementById("promoTrack"), dots=document.getElementById("promoDots");
 if(!wrap||!track||!dots)return;
 const slides=[SITE_SETTINGS.promoSlide1,SITE_SETTINGS.promoSlide2,SITE_SETTINGS.promoSlide3].filter(Boolean);
 if(!slides.length){wrap.style.display="none";return;}
 wrap.style.display="block";
 if(promoIndex>=slides.length)promoIndex=0;
 track.innerHTML=slides.map((src,i)=>`<div class="promo-slide ${i===promoIndex?'active':''}"><img src="${src}" alt="Promoção ${i+1}"></div>`).join("");
 dots.innerHTML=slides.map((_,i)=>`<button type="button" class="promo-dot ${i===promoIndex?'active':''}" aria-label="Ir para promoção ${i+1}" onclick="promoGo(${i})"></button>`).join("");
 clearInterval(promoTimer);
 if(slides.length>1)promoTimer=setInterval(()=>promoMove(1),4500);
}
function promoGo(i){promoIndex=i;renderPromoCarousel()}
function promoMove(delta){const slides=[SITE_SETTINGS.promoSlide1,SITE_SETTINGS.promoSlide2,SITE_SETTINGS.promoSlide3].filter(Boolean);if(!slides.length)return;promoIndex=(promoIndex+delta+slides.length)%slides.length;renderPromoCarousel()}

function renderProducts(target="productGrid",filter="todos"){
 const q=(document.getElementById("search")?.value||"").toLowerCase();
 const list=products.filter(p=>(filter==="todos"||p.cat===filter)&&(p.name+" "+p.desc).toLowerCase().includes(q));
 document.getElementById(target).innerHTML=list.map(p=>{const first=Object.entries(p.sizes)[0];const normal=Number(first[1]);const promo=promoPrice(p,first[0]);const price=promo<normal?`a partir de <del>${money(normal)}</del> <strong>${money(promo)}</strong>`:`a partir de ${money(normal)}`;return `<article class="product-card"><div class="product-photo">${promo<normal?`<span class="promo-badge">PROMO</span>`:""}<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src=fallbackImage(p)"></div><div class="product-info"><span class="pill">${p.cat==="acai"?SITE_SETTINGS.catAcai:p.cat==="copos"?SITE_SETTINGS.catCopo:SITE_SETTINGS.catChup}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><span class="price">${price}</span><button class="add" onclick="openProduct('${p.id}')">${SITE_SETTINGS.productAddButton}</button></div></div></article>`}).join("");
}
function setFilter(filter){document.querySelectorAll("#tabs button").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));renderProducts("productGrid",filter);document.getElementById("cardapio").scrollIntoView({behavior:"smooth"})}
function renderFeatured(){const list=products.filter(p=>p.cat==="copos").slice(0,6);document.getElementById("featuredGrid").innerHTML=list.map(p=>{const size=Object.keys(p.sizes)[0],normal=Number(p.sizes[size]),promo=promoPrice(p,size);return `<article class="product-card"><div class="product-photo">${promo<normal?`<span class="promo-badge">PROMO</span>`:""}<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src=fallbackImage(p)"></div><div class="product-info"><span class="pill">${SITE_SETTINGS.catCopo}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom">${priceHtml(p,size)}<button class="add" onclick="openProduct('${p.id}')">${SITE_SETTINGS.productAddButton}</button></div></div></article>`}).join("")}
function renderChupChup(){const list=products.filter(p=>p.cat==="chupchup");document.getElementById("chupGrid").innerHTML=list.map(p=>{const size=Object.keys(p.sizes)[0],normal=Number(p.sizes[size]),promo=promoPrice(p,size);return `<article class="product-card"><div class="product-photo">${promo<normal?`<span class="promo-badge">PROMO</span>`:""}<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src=fallbackImage(p)"></div><div class="product-info"><span class="pill">Chup Chup Gourmet</span><h3>${p.name.replace("Chup Chup Gourmet — ","")}</h3><p>${p.desc}</p><div class="product-bottom">${priceHtml(p,size)}<button class="add" onclick="openProduct('${p.id}')">${SITE_SETTINGS.productAddButton}</button></div></div></article>`}).join("")}
function renderAddons(){document.getElementById("addonGrid").innerHTML=addons.map(a=>`<div class="addon"><span>${a[0]}</span><span>+ ${money(a[1])}</span></div>`).join("")}
function openProduct(id){current=products.find(p=>p.id===id);currentSize=null;currentAddons=[];document.getElementById("modalImg").src=current.img;document.getElementById("modalImg").onerror=function(){this.onerror=null;this.src=fallbackImage(current)};document.getElementById("modalTitle").textContent=current.name;document.getElementById("modalDesc").textContent=current.desc;document.getElementById("modalCategory").textContent=current.cat==="acai"?SITE_SETTINGS.catAcai:current.cat==="copos"?SITE_SETTINGS.catCopo:SITE_SETTINGS.catChup;document.getElementById("sizeOptions").innerHTML=Object.entries(current.sizes).map(([s,p])=>{const promo=promoPrice(current,s);return `<button class="size" onclick="selectSize(${s},this)">${s==1000?"1 litro":s==1?"unidade":s+"ml"} <b>${promo<Number(p)?`<del>${money(p)}</del> ${money(promo)}`:money(p)}</b></button>`}).join("");renderProductAddons();updateModal();showModal("productModal")}
function selectSize(s,el){currentSize=+s;document.querySelectorAll("#sizeOptions .size").forEach(x=>x.classList.remove("active"));el.classList.add("active");updateModal()}
function renderProductAddons(){const box=document.getElementById("productAddonArea");if(!box)return;if(current.cat==="chupchup"){box.innerHTML="";return}box.innerHTML=`<label class="label" id="modalAddonLabel">Acréscimos</label><p class="addon-help" id="modalAddonHelp">Escolha os adicionais para colocar junto com seu açaí.</p><div class="product-addons">${addons.map((a,i)=>`<button type="button" class="product-addon ${currentAddons.includes(i)?"active":""}" onclick="toggleProductAddon(${i},this)"><span>${a[0]}</span><b>+${money(a[1])}</b></button>`).join("")}</div>`}function toggleProductAddon(i,el){if(currentAddons.includes(i))currentAddons=currentAddons.filter(x=>x!==i);else currentAddons.push(i);el.classList.toggle("active");updateModal()}function updateModal(){const btn=document.getElementById("modalAddButton");if(currentSize===null){document.getElementById("modalPrice").innerHTML="<span>Selecione um tamanho</span>";btn.disabled=true;btn.classList.add("disabled");return}btn.disabled=false;btn.classList.remove("disabled");const normal=Number(current.sizes[currentSize]),promo=promoPrice(current,currentSize),extras=currentAddons.reduce((sum,i)=>sum+Number(addons[i][1]),0),base=promo+extras,normalHtml=promo<normal?`<del>${money(normal)}</del> ${money(promo)}`:money(normal);document.getElementById("modalPrice").innerHTML=extras?`<span>${normalHtml} <small>+ ${money(extras)} adicionais</small></span><strong>${money(base)}</strong>`:normalHtml}
function showModal(id){document.getElementById(id).classList.add("show");document.getElementById("overlay").classList.add("show")}
function hideModal(id){document.getElementById(id).classList.remove("show");if(!document.querySelector(".modal.show"))document.getElementById("overlay").classList.remove("show")}
function closeModal(){hideModal("productModal")}function closeBuilder(){hideModal("builderModal")}function closeCheckout(){hideModal("checkoutModal")}
function addCurrent(){if(currentSize===null){alert("Selecione o tamanho antes de adicionar à sacola.");return}const base=promoPrice(current,currentSize),extras=currentAddons.reduce((sum,i)=>sum+Number(addons[i][1]),0),extraNames=currentAddons.map(i=>addons[i][0]).join(", ");cart.push({name:current.name,size:currentSize,price:base+extras,normalPrice:Number(current.sizes[currentSize]),img:current.img,extra:extraNames});closeModal();renderCart();}
function openCart(){document.getElementById("cartDrawer").classList.add("open");document.getElementById("overlay").classList.add("show")}
function closeCart(){document.getElementById("cartDrawer").classList.remove("open");if(!document.querySelector(".modal.show"))document.getElementById("overlay").classList.remove("show")}
function renderCart(){document.getElementById("cartCount").textContent=cart.length;const total=cart.reduce((s,i)=>s+i.price,0);document.getElementById("cartTotal").textContent=money(total);document.getElementById("cartItems").innerHTML=cart.length?cart.map((i,n)=>`<div class="cart-row"><img src="${i.img}" alt="${i.name}" onerror="this.onerror=null;this.src=fallbackImage({id:'tradicional'})"><div><h4>${i.name}</h4><small>${i.size==1000?"1 litro":i.size==1?"unidade":i.size+"ml"} • ${i.normalPrice&&i.price<i.normalPrice?`<del>${money(i.normalPrice)}</del> ${money(i.price)}`:money(i.price)}${i.extra?`<br><span>+ ${i.extra}</span>`:""}</small></div><button onclick="removeItem(${n})">×</button></div>`).join(""):`<div class="empty">🛍️<br><b>Sua sacola está vazia.</b><br>Escolha um açaí para começar.</div>`}
function removeItem(n){cart.splice(n,1);renderCart()}
function openBuilder(){builderSize=500;builderAddons=[];renderBuilder();showModal("builderModal")}
function renderBuilder(){const baseP=products.find(p=>p.id==="tradicional")||products.find(p=>p.cat==="acai");const sizes=baseP?.sizes||{500:22,700:28,1000:37};const box=document.querySelector(".builder-sizes");if(box)box.innerHTML=Object.entries(sizes).map(([size,price])=>{const promo=promoPrice(baseP,size);return `<button data-size="${size}" data-price="${promo}" class="${+size===builderSize?"active":""}">${size==1000?"1 litro":size==1?"Unidade":size+"ml"} <b>${promo<Number(price)?`<del>${money(price)}</del> ${money(promo)}`:money(price)}</b></button>`}).join("");document.querySelectorAll(".builder-sizes button").forEach(b=>b.onclick=()=>{builderSize=+b.dataset.size;renderBuilder()});document.getElementById("builderAddons").innerHTML=addons.map((a,i)=>`<button class="builder-addon ${builderAddons.includes(i)?"active":""}" onclick="toggleBuilderAddon(${i},this)"><span>${a[0]}</span><b>+${money(a[1])}</b></button>`).join("");document.getElementById("builderTotal").textContent=money(builderPrice())}
function builderPrice(){const baseP=products.find(p=>p.id==="tradicional")?.sizes?.[builderSize]||0; const promo=products.find(p=>p.id==="tradicional")?.promos?.[builderSize]||0; return (promo&&promo<baseP?promo:baseP)+builderAddons.reduce((s,i)=>s+addons[i][1],0)}
function toggleBuilderAddon(i,el){builderAddons=builderAddons.includes(i)?builderAddons.filter(x=>x!==i):[...builderAddons,i];el.classList.toggle("active");document.getElementById("builderTotal").textContent=money(builderPrice())}
function addBuilder(){const names=builderAddons.map(i=>addons[i][0]).join(", ");cart.push({name:"Açaí personalizado",size:builderSize,price:builderPrice(),img:"tradicional.jpg",extra:names});closeBuilder();renderCart();openCart()}
function openCheckout(){if(!cart.length)return alert("Adicione pelo menos um item à sacola.");closeCart();renderCheckout();showModal("checkoutModal")}
function renderCheckout(){const send=document.getElementById("sendOrderButton");if(send)send.textContent="Finalizar pedido no WhatsApp →";document.getElementById("checkoutItems").innerHTML=cart.map(i=>`<div class="summary-row"><span>${i.name} • ${i.size==1000?"1L":i.size==1?"unidade":i.size+"ml"}</span><b>${i.normalPrice&&i.price<i.normalPrice?`<del>${money(i.normalPrice)}</del> ${money(i.price)}`:money(i.price)}</b></div>`).join("");document.getElementById("checkoutTotal").textContent=money(cart.reduce((s,i)=>s+i.price,0))}
function loadFeedbacks(){try{return JSON.parse(localStorage.getItem("guhAcaiFeedbackV1")||"[]")}catch(e){return []}}
function saveFeedbacks(list){localStorage.setItem("guhAcaiFeedbackV1",JSON.stringify(list))}
function renderFeedbacks(){const list=loadFeedbacks();const box=document.getElementById("feedbackList");const count=document.getElementById("feedbackCount");if(count)count.textContent=`${list.length} ${list.length===1?"avaliação":"avaliações"}`;if(!box)return;if(!list.length){box.innerHTML='<div class="feedback-empty">⭐ Ainda não há avaliações. Seja o primeiro a deixar seu feedback!</div>';return}box.innerHTML=list.slice().reverse().map(f=>`<article class="feedback-item"><div class="feedback-item-top"><strong>${escapeHtml(f.name||"Cliente")}</strong><span class="feedback-stars">${"★".repeat(Number(f.rating)||0)}${"☆".repeat(5-(Number(f.rating)||0))}</span></div><p>${escapeHtml(f.message||"")}</p><span class="feedback-date">${new Date(f.date).toLocaleDateString("pt-BR")}</span></article>`).join("")}
function escapeHtml(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]))}
function initFeedback(){let selected=0;document.querySelectorAll("#ratingInput button").forEach(b=>b.onclick=()=>{selected=Number(b.dataset.rating);document.querySelectorAll("#ratingInput button").forEach(x=>x.classList.toggle("active",Number(x.dataset.rating)<=selected))});const send=document.getElementById("sendFeedback");if(send)send.onclick=()=>{const name=document.getElementById("feedbackName").value.trim()||"Cliente";const message=document.getElementById("feedbackMessage").value.trim();if(!selected)return alert("Escolha uma nota de 1 a 5 estrelas.");if(!message)return alert("Escreva uma mensagem para enviar seu feedback.");const list=loadFeedbacks();list.push({name,rating:selected,message,date:new Date().toISOString()});saveFeedbacks(list);document.getElementById("feedbackName").value="";document.getElementById("feedbackMessage").value="";selected=0;document.querySelectorAll("#ratingInput button").forEach(x=>x.classList.remove("active"));renderFeedbacks();alert("Obrigado pelo seu feedback! 💜")};renderFeedbacks()}
function initSideMenu(){const trigger=document.getElementById("sideMenuTrigger"),menu=document.getElementById("sideMenu"),overlay=document.getElementById("sideMenuOverlay"),close=document.getElementById("closeSideMenu");if(!trigger||!menu)return;const closeMenu=()=>{menu.classList.remove("open");overlay?.classList.remove("show")};const openMenu=()=>{menu.classList.add("open");overlay?.classList.add("show")};trigger.onclick=openMenu;close.onclick=closeMenu;overlay.onclick=closeMenu;menu.querySelectorAll("a[href^='#']").forEach(a=>a.onclick=closeMenu)}
function sendOrder(){const name=document.getElementById("customerName").value.trim(),phone=document.getElementById("customerPhone").value.trim(),address=document.getElementById("customerAddress").value.trim();if(!name||!phone||!address)return alert("Preencha nome, WhatsApp e endereço.");const total=cart.reduce((s,i)=>s+i.price,0);const items=cart.map(i=>`• ${i.name} — ${i.size==1000?"1 litro":i.size==1?"unidade":i.size+"ml"} — ${money(i.price)}${i.extra?" ("+i.extra+")":""}`).join("\n");const msg=`Olá! Quero fazer um pedido na Guh Açaí 💜\n\n${items}\n\nTotal: ${money(total)}\n\nNome: ${name}\nWhatsApp: ${phone}\nEndereço: ${address}\nComplemento: ${document.getElementById("customerComplement").value||"Não informado"}\nPagamento: ${payment}`;if(!SITE_SETTINGS.whatsapp)return alert("Configure o WhatsApp no painel ADM.");window.open(`https://wa.me/${SITE_SETTINGS.whatsapp}?text=${encodeURIComponent(msg)}`,"_blank")}
document.querySelectorAll("#tabs button").forEach(b=>b.onclick=()=>setFilter(b.dataset.filter));
document.getElementById("search").oninput=()=>{const active=document.querySelector("#tabs button.active").dataset.filter;renderProducts("productGrid",active)};
document.getElementById("openCart").onclick=openCart;document.getElementById("closeCart").onclick=closeCart;document.getElementById("goCheckout").onclick=openCheckout;document.getElementById("overlay").onclick=()=>{closeCart();document.querySelectorAll(".modal").forEach(m=>m.classList.remove("show"));document.getElementById("overlay").classList.remove("show")};
document.querySelectorAll(".pay").forEach(b=>b.onclick=()=>{document.querySelectorAll(".pay").forEach(x=>x.classList.remove("active"));b.classList.add("active");payment=b.dataset.pay});
async function syncPublishedState(){
  try{
    const response=await fetch("/api/state",{cache:"no-store"});
    if(!response.ok) return false;
    const state=await response.json();
    if(state.settings){
      SITE_SETTINGS={...DEFAULT_SETTINGS,...state.settings};
      localStorage.setItem("guhAcaiSettingsV1",JSON.stringify(SITE_SETTINGS));
    }
    if(Array.isArray(state.products)){
      products=state.products;
      localStorage.setItem("guhAcaiCatalogV1",JSON.stringify({products,updatedAt:state.updatedAt||new Date().toISOString()}));
    }
    if(Array.isArray(state.addons)){
      addons=state.addons;
      localStorage.setItem("guhAcaiAddonsV1",JSON.stringify(addons));
    }
    return true;
  }catch(e){
    console.warn("Publicação online indisponível; usando os dados locais.",e);
    return false;
  }
}
function renderEverything(){
  applySettings(); initSideMenu(); initFeedback(); renderProducts(); renderFeatured(); renderChupChup(); renderAddons(); renderCart();
}
window.addEventListener("storage", (event) => {
  if (["guhAcaiCatalogV1","guhAcaiSettingsV1","guhAcaiAddonsV1"].includes(event.key)) window.location.reload();
});
renderEverything();
syncPublishedState().then(ok=>{ if(ok) renderEverything(); });
