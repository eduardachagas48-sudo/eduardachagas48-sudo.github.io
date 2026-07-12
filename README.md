# Eduarda Chagas — Personal Academic Site

Site pessoal de divulgação científica internacional, em estilo elegante e
acadêmico: fundo em tons pastéis (marfim/creme), acentos em terracota e sálvia,
tipografia serifada editorial (Fraunces + Inter). Pronto para publicar no
GitHub Pages.

## Estrutura

```
index.html      conteúdo do site (uma página, com âncoras por seção)
css/style.css   tema visual (tokens de cor, tipografia, layout)
js/main.js      interações: menu mobile, scroll-reveal, filtro de publicações
assets/         coloque aqui sua foto e o PDF do currículo
```

## Antes de publicar — pendências

1. **Foto de perfil**: hoje o herói usa um monograma "EC" (`.hero-avatar` em
   `index.html`). Para trocar por uma foto real:
   - salve a imagem em `assets/photo.jpg`
   - substitua o bloco `<div class="hero-avatar"><span>EC</span></div>` por
     `<img src="assets/photo.jpg" alt="Eduarda Chagas" class="hero-avatar">`
     (ajuste `object-fit: cover` no CSS se necessário)

2. **PDF do currículo**: o botão "Curriculum Vitae" aponta para
   `assets/Eduarda_Chagas_CV.pdf`. Coloque o arquivo real nesse caminho.

3. **Links dos 3 papers de 2026** (DataSynK, Beyond Statistical Fidelity,
   Deterministic-First Clinical Concept Normalization): estão marcados com
   `data-placeholder="paper-link"` em `index.html` (seção `#featured`) e
   apontam para `#`. Assim que tiver o link do PDF/arXiv/proceedings de cada
   um, troque o `href="#"` pelo link real.

4. **GitHub**: o link de contato já aponta para
   `github.com/eduardachagas48-sudo`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub em
   [github.com/eduardachagas48-sudo](https://github.com/eduardachagas48-sudo)
   chamado `eduardachagas48-sudo.github.io` (publica automaticamente na raiz).
   Alternativamente, use outro nome de repositório e ative o GitHub Pages
   apontando para a branch `main` / pasta raiz nas configurações do repo.
2. Dentro desta pasta:
   ```bash
   git init
   git add .
   git commit -m "Initial personal site"
   git branch -M main
   git remote add origin https://github.com/eduardachagas48-sudo/eduardachagas48-sudo.github.io.git
   git push -u origin main
   ```
3. Em alguns minutos o site estará no ar em
   `https://eduardachagas48-sudo.github.io`.

## Rodar localmente

Basta abrir `index.html` no navegador, ou rodar um servidor simples:

```bash
python3 -m http.server 8000
```

e acessar `http://localhost:8000`.
