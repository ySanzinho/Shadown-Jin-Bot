# Shadown Jin - Discord Bot

**Atualizado:** 19 de Junho de 2025  
**Criador:** @sanzinho

---

## Sobre o Shadown Jin

E aí! Sou o Shadown Jin, um bot para Discord inspirado no universo do *Solo Leveling*. Minha missão é facilitar a sua vida no servidor com comandos úteis, além de trazer diversão e um toque do anime que a galera curte. Feito com Discord.js, estou aqui para ajudar desde a organização até os momentos de descontração.

Além disso, me conecto com banco de dados MongoDB para guardar suas informações e manter tudo sincronizado, e também uso APIs como Steam e Giphy para trazer conteúdo atualizado e dinâmico.

---

## O que eu faço

### Utilidades que facilitam  
- **user** — Mostro informações detalhadas sobre qualquer usuário.  
- **server** — Trago detalhes do servidor rapidinho.  
- **ajuda** — Listo e explico todos os meus comandos para você.  
- **lembrete** — Quer lembrar de algo? Eu envio uma mensagem no horário que você escolher.  
- **tradutor** — Traduzo textos para vários idiomas, na moral.  
- **roles** — Listo cargos, adiciono ou removo para você sem complicação.

### Administração no controle  
- **anuncio** — Mando anúncios oficiais no canal que você escolher.  
- **mute / unmute** — Silencio quem precisa ou libero a fala de volta.  
- **kick / ban** — Expulso ou bloqueio usuários que estiverem atrapalhando.

### Diversão garantida  
- **memes** — Mando memes fresquinhos para animar o chat.  
- **piada** — Piadas aleatórias para dar risada.  
- **gif** — Procuro gifs legais com base no que você digitar, usando a API do Giphy.  
- **avatar** — Mostro o avatar seu ou de quem você mencionar.  
- **hug, pat, kiss** — Comandos sociais para interagir com a galera do servidor, espalhando boas vibes.

### Sistemas que engajam  
- **perfil** — Um perfil personalizado para cada usuário, salvo no MongoDB.  
- **daily** — Recompensa diária para quem participa sempre.  
- **XP/Level** — Sistema de níveis para deixar tudo mais interativo.  
- **música Spotify** — Toco suas músicas favoritas direto do Spotify.  
- **steam** — Busca preços e informações de jogos na Steam via API.

### Comandos Master (só para o dono, ok?)  
- **reload** — Recarrego comandos sem precisar desligar o bot.

---

## Como começar a usar

1. Me convide para o seu servidor com as permissões certas (admin, por exemplo).  
2. Use `!ajuda` para conhecer meus comandos.  
3. Testa os comandos de utilidade para ver como facilito sua vida.  
4. E claro, aproveite os comandos de diversão para deixar o servidor mais leve e animado.

---

## O que vem por aí (Roadmap)

- Comandos exclusivos só para fãs de *Solo Leveling* — quotes, curiosidades, quizzes...  
- Sistema de rankings e conquistas personalizadas para deixar tudo mais competitivo.  
- Integração com outras APIs para trazer notícias e conteúdos fresquinhos sobre animes e games.  
- Melhorias no sistema de música, com playlists temáticas e mais.

---

## Um papo reto pra você, criador

Assim como o Jinwoo, que começou do nada e foi ficando cada vez mais forte, você também está construindo algo do zero, enfrentando desafios e aprendendo a cada passo. O Shadown Jin é uma extensão dessa sua jornada, e cada função nova que você implementa é uma vitória real — tanto para o bot quanto para você.

**Uma dica:** Pense no desenvolvimento do bot como uma história de evolução: pequenas missões, desafios e recompensas. Isso ajuda a manter o foco e a motivação para continuar avançando.

---
## 🚀 Como replicar este bot usando o GitHub

Se você quiser rodar este bot em outro computador ou servidor usando este repositório, siga estes passos:

1️⃣ **Clone o repositório:**

```bash
git clone https://github.com/ySanzinho/Shadown-Jin-Bot.git
cd SEU-REPOSITORIO
```

2️⃣ **Instale as depedências**
```bash
npm install
```
3️⃣ **Configure as variáveis de ambiente**
Crie um arquivo .env na raiz do projeto e adicione:
```bash
BOT_TOKEN= #Token do seu bot
CLIENT_ID= #Seu client ID
GUILD_ID= #ID da guild que você irá realizar teste
```
4️⃣ **Compilação e execução**
Caso for rodar em teste, execute:
```bash
npm run dev
```

Caso deseje rodar como produção, realize a compilação e use o build em `/dist` execute:
```bash
npm run build

npm start
```