# Guh Açaí — publicação das alterações do painel ADM

Esta versão corrige o problema do painel que salvava as alterações somente no navegador.

## Como funciona agora

1. O cliente acessa `index.html` pelo servidor.
2. O painel `admin.html` salva as alterações em `/api/state`.
3. As imagens escolhidas no ADM são enviadas ao servidor e guardadas em `uploads/`.
4. O site público consulta `/api/state` e usa os dados publicados.
5. Depois de clicar em **Salvar tudo**, a alteração passa a ser compartilhada pelos visitantes.

## Rodar no computador

É necessário Node.js 18 ou superior.

```bash
npm install
npm start
```

Abra:
- Site: `http://localhost:3000/`
- ADM: `http://localhost:3000/admin.html`

Senha atual do ADM: `scdesign`.

Para trocar a senha no servidor:

```bash
ADMIN_PASSWORD="sua-senha" npm start
```

## Hospedagem

O projeto agora precisa de uma hospedagem que rode Node.js e mantenha os arquivos do servidor. Se usar Render ou outro serviço com filesystem temporário, configure um armazenamento persistente para a pasta `uploads/` e para `data/`.

Não abra os arquivos HTML diretamente pelo computador (`file://`), pois a publicação online depende da API `/api/state`.

## Observação

O feedback dos clientes ainda usa o armazenamento local do navegador. A publicação de fotos, textos, produtos, preços, promoções e demais configurações do ADM foi ligada ao servidor.
