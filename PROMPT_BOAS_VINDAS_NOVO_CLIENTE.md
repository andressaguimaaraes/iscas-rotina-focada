# 🎯 PROMPT · BOAS-VINDAS DE NOVO CLIENTE — WINNER.IA

> **Quando usar:** No dia 1 do novo cliente, para gerar a página de boas-vindas
> (antes do diagnóstico estar pronto — o Mapa Estratégico completo vem depois,
> usando o outro prompt `PROMPT_NOVO_CLIENTE.md`).
>
> **Como usar:**
> 1. Abra uma conversa **NOVA** com o Claude
> 2. Preencha os dados entre `[colchetes]` abaixo
> 3. Cole tudo e envie
> 4. Pronto. A pasta sai aberta no Finder.

---

## 📋 DADOS DO CLIENTE — edite só isto

```
Nome do cliente:           [Ex: Transrota]
Tipo de negócio:           [Ex: Transportadora]
Segmento:                  [Ex: Logística & transporte]
Slug (sem espaços):        [Ex: transrota]
Data de início:            [DD/MM/AAAA]
Duração total:             [6 meses]
```

**Links e senhas:**
```
Curso Claude Sem Código:   https://members.kiwify.com/?club=04f64c9d-075c-4543-b44f-5fdeca907f51
Manual do Mentorado:       https://materialalunos.winneria.com.br/
Senha do manual:           programaia2026
Drive compartilhado:       [link Drive específico do cliente]
Google Form diagnóstico:   [link do Google Form específico do cliente — ver instrução abaixo]
Grupo WhatsApp:            [link do grupo do cliente]
```

> **Sobre o Google Form do diagnóstico:**
> Se ainda não criou, use o script `gerar-formulario-mapa-estrategico.gs`
> (em `boas-vindas-transrota/`) — cole em script.google.com → Executar.
> Em 30s ele cria o form com as 12 perguntas oficiais e te entrega o link público.

---

## 📝 O QUE EU QUERO QUE VOCÊ FAÇA

Olá, Claude. Você é um agente da **Winner.IA** ajudando a montar a página de boas-vindas para um novo cliente que está entrando no Programa de Aceleração em IA.

### O que entregar

**Crie a pasta `boas-vindas-[slug]/` com um único arquivo:**
- `index.html` — página de boas-vindas seguindo **rigorosamente** o Brand System v1.0 da winner.ia

Ao terminar, **abra a pasta no Finder** (`open /Users/andressaguimaraes/claude/formulario mentoria/boas-vindas-[slug]`) e me devolva o caminho exato.

---

## 🎨 BRAND SYSTEM v1.0 — winner.ia

Use **EXATAMENTE** estas especificações. Não improvise cores, fontes nem estrutura.

### Paleta cromática
```css
--onyx:        #0A0A0B    /* fundo hero + footer */
--onyx-soft:   #15151A    /* hover suave */
--onyx-line:   rgba(242, 235, 221, 0.08)
--gold:        #C8A24A    /* signature gold — acentos, .ia */
--gold-deep:   #8C6E22    /* gold mais escuro pra fundo claro */
--paper:       #F2EBDD    /* warm paper — fundo da seção recursos */
--sand:        #E6DDC8    /* cards default */
--paper-line:  rgba(10, 10, 11, 0.10)
--paper-text:  #2A2622
--paper-muted: #6B6258
```

### Tipografia
- **Inter Tight** (300/400/500/600/700/800) — corpo, títulos, h1.display
- **JetBrains Mono** (400/500) — tags monoespaçadas, numeração de cards, labels

Import:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Logo V· em SVG (inline, sem imagem externa)
```html
<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
  <path d="M 8 6 L 32 6 L 52 70 L 38 92 L 18 28 Z"/>
  <path d="M 38 92 L 50 110 L 62 92 L 50 70 Z"/>
  <path d="M 50 70 L 62 92 L 92 6 L 68 6 Z"/>
  <circle cx="91" cy="9" r="6"/>
</svg>
```

### Wordmark
`<span class="wordmark">winner<span class="ia">.ia</span></span>` — `.ia` sempre em `var(--gold)`.

---

## 🧱 ESTRUTURA DA PÁGINA

A página tem **3 seções** em ordem fixa:

### 1) HERO INSTITUCIONAL — fundo onyx
- `head-bar` no topo (duas colunas):
  - Esquerda: `winner.ia — programa de aceleração em ia` · `cliente · [slug]`
  - Direita: `v 1.0 / 2026` · `01 / 06`
- `hero-grid-bg` (malha de 96px de fundo)
- `hero-kicker`: linha dourada de 64px + tag `posicionamento · 2026` em ouro
- `h1.display` (clamp 2.8rem → 6rem, Inter Tight 700, line-height 0.95):
  ```
  Inteligência artificial
  com propósito de negócio.
  <em>Sua aceleração começa agora.</em>   ← em ouro
  ```
- `hero-lede` (máx 620px, opacity 0.7):
  > Bem-vindo(a), **[Nome do cliente]**. Tudo o que você precisa para extrair o máximo do programa está aqui. Comece pelo curso, conheça o método e use os recursos abaixo para acelerar **[tipo de negócio]** com IA.
- `hero-meta` com **4 itens** (label JetBrains Mono uppercase + value):
  - cliente · [Nome] · [Tipo de negócio]
  - segmento · [Segmento]
  - início · [DD / MM / AAAA]
  - duração · [6 meses]
- `head-bar` no rodapé da seção: logo V· + wordmark à esquerda, `↓ navegue pelos recursos` à direita

### 2) RECURSOS — fundo papel (#F2EBDD), 6 cards
- Header em grid 2 colunas:
  - Esquerda: tag `02 — recursos` + h2 "Tudo que você acessa<br>durante a mentoria."
  - Direita: lede explicando o uso dos blocos
- Grid 12 colunas, **6 cards span 4** (2 linhas de 3)
- Animação `cardIn` com delays 0.10s → 0.50s
- Cards: fundo `--sand`, no hover viram fundo `--onyx` com texto claro e accent ouro

**Os 6 blocos (ordem fixa):**

| # | Título | Descrição | Meta inferior |
|---|---|---|---|
| 01 / curso | **Claude<br>Sem Código** | Comece por aqui. O treinamento-base para dominar o Claude na prática — direto ao ponto. | acesso · **seu login Kiwify** |
| 02 / manual | **Manual<br>do Mentorado** | Como funciona o programa, o que esperar e como extrair o máximo de cada reunião. | senha · **programaia2026** |
| 03 / arquivos | **Drive<br>Compartilhado** | Arquivos, templates e materiais da mentoria — atualizados a cada reunião. | exclusivo · **[Nome do cliente]** |
| 04 / diagnóstico | **Mapa<br>Estratégico de IA** | 12 perguntas para abrirmos a operação da [Nome]. Quanto mais honesto, mais cirúrgico o plano que vamos desenhar juntos. | tempo · **25 a 40 min** |
| 05 / em construção | **Mapa do Negócio<br>Personalizado** | Seu diagnóstico em 6 áreas, com gargalos identificados e o plano dos próximos 6 meses. Aparece aqui assim que recebermos o formulário. | aguardando · **preenchimento do formulário** |
| 06 / comunidade | **Suporte & Comunidade<br>WhatsApp** | Dúvidas, avanços, travamentos — acesso direto ao suporte da mentoria. Sua equipe e a equipe Winner no mesmo grupo. | grupo exclusivo · **resposta rápida** |

- **Card 05** tem classe `.locked` — borda **tracejada**, sem href, sem hover-onyx, sem seta. No lugar da seta: badge `em breve` com ícone de cadeado em `--gold-deep`.
- Cards 01, 02, 03, 04, 06 são `<a>` com link direto.

### 3) FOOTER — fundo onyx
- `footer-grid` 3 colunas:
  - Coluna 1: logo V· + wordmark + lede "Consultoria estratégica em I.A para empresários. Vencer não é tendência — é decisão."
  - Coluna 2: tag `programa` + "Aceleração em IA / Edição 2026"
  - Coluna 3: tag `contato` + link `winneria.com.br` em ouro
- `footer-bottom`: `© 2026 · winner.ia · brand system v 1.0` + `cliente · [slug] · [tipo de negócio]`

---

## ✅ ANTES DE ENTREGAR, CONFIRA

- [ ] Paleta usa **APENAS** Onyx (`#0A0A0B`), Signature Gold (`#C8A24A`), Warm Paper (`#F2EBDD`), Sand (`#E6DDC8`)
- [ ] Tipografia usa **APENAS** Inter Tight + JetBrains Mono (via Google Fonts)
- [ ] Logo `V·` em SVG inline aparece no hero (bottom) e no footer
- [ ] Wordmark `winner.ia` com `.ia` em `--gold`
- [ ] Hero tem grid de fundo 96px, kicker com linha dourada, h1.display com 3 linhas + em dourado na última
- [ ] hero-meta tem exatamente 4 itens (cliente · segmento · início · duração)
- [ ] Seção recursos tem 6 cards span 4 (2 linhas de 3)
- [ ] Card 05 (Mapa do Negócio) está `.locked` com borda tracejada, badge "em breve" com cadeado, sem link
- [ ] Tags de número de card usam JetBrains Mono, lowercase com barra (ex: `01 / curso`)
- [ ] Em todos os textos: "Claude" (jamais "Cláudio")
- [ ] Animações: hero com `fadeUp` e cards com `cardIn` (delays 0.10s → 0.50s)
- [ ] Responsivo: até 960px cards viram span 6; até 640px viram span 12
- [ ] Footer-bottom mostra `cliente · [slug] · [tipo de negócio]`

### Saída esperada
1. Arquivo gerado em: `/Users/andressaguimaraes/claude/formulario mentoria/boas-vindas-[slug]/index.html`
2. Confirmação de que abriu a pasta no Finder
3. Lista de checagem marcada

---

**Modelo de referência:** `boas-vindas-transrota/index.html` (mesma pasta raiz).
Se tiver dúvida sobre algum detalhe visual, **leia esse arquivo primeiro** — ele é o gabarito oficial.

**Pronto. Pode começar.**
