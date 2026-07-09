# Cartas de Foco — Landing da Newsletter

Landing de inscrição na newsletter **Cartas de Foco** (Andressa Guimarães). A inscrita recebe a **Biblioteca Anti-Procrastinação** como presente de boas-vindas e, daí pra frente, uma carta por semana sobre vencer a procrastinação, foco e disciplina com propósito.

> Captura via **iframe do Matte Hub** (form id `rK4TiLri5cc9uTudZUUs`, "Newsletter"). Mesma stack que você já usa nas outras iscas — nada de ESP externo.

---

## 📁 Estrutura

```
biblioteca-anti-procrastinacao/
├── index.html               ← landing
├── obrigado.html            ← página de obrigado
├── politica-privacidade.html
├── styles.css
├── script.js                ← analytics
├── README.md
└── assets/
    ├── biblioteca-anti-procrastinacao.pdf   (opcional — link fica no e-mail do Matte)
    └── andressa-foto.jpg                    (foto sua)
```

> 💡 A pasta ainda se chama `biblioteca-anti-procrastinacao/` por questão de URL/identificação. Se quiser renomear pra `cartas-de-foco/` ou similar, é só renomear a pasta e atualizar links.

---

## 🚀 Rodando localmente

```bash
open index.html
```

Ou com servidor (recomendado pra o iframe carregar bonito):

```bash
python3 -m http.server 8000
```

Abre [http://localhost:8000](http://localhost:8000).

---

## ✅ O que JÁ está pronto

- ✅ Landing com copy de newsletter (Biblioteca como presente de boas-vindas)
- ✅ Iframe do Matte com form id `rK4TiLri5cc9uTudZUUs` plugado nas duas seções de captura
- ✅ Página de obrigado
- ✅ Política de privacidade (LGPD básica)
- ✅ Design responsivo mobile-first (paleta rosa #E91E63, Playfair + Inter + Caveat)

---

## ⚠️ O que VOCÊ precisa fazer pra entregar de verdade

### 1. Configurar redirect pós-submit no Matte

1. Matte Hub → **Sites → Forms** → abre o form **"Newsletter"**
2. **Settings → On Submit → Redirect URL**
3. Cola a URL onde a `obrigado.html` vai morar (ex: `https://cartas.andressaguimaraes.com.br/obrigado.html`)
4. Salva e publica o form

### 2. Adicionar checkbox de consentimento LGPD no form do Matte

1. No editor do form Newsletter
2. Adiciona um campo **Checkbox** com label algo como: "Concordo em receber as Cartas de Foco e li a política de privacidade"
3. Marca como **obrigatório**
4. Coloca link pra `politica-privacidade.html` no label

### 3. Criar o workflow de entrega no Matte

Esse é o passo mais importante — sem ele, **a inscrita não recebe a Biblioteca**.

1. Matte → **Automation → Workflows → Create Workflow**
2. **Nome:** `[Newsletter] Boas-vindas + Biblioteca`
3. **Trigger:** "Formulário Enviado" → seleciona o form **"Newsletter"**
4. **Action 1 — Enviar e-mail (imediato):**
   - **De:** `Andressa Guimarães <contato@andressaguimaraes.com.br>`
   - **Assunto:** `Sua Biblioteca Anti-Procrastinação chegou 📚`
   - **Conteúdo:** texto curto + link pra baixar o PDF + apresentação rápida das Cartas
5. **Sequência (uma carta por semana, 9 cartas em ~14 dias OU semanal):**
   - Adiciona delays entre cada e-mail (Wait: 7 days)
   - Cada delay seguido de Send Email com o conteúdo da carta da semana
6. **Publica** o workflow

> 💡 **Importante:** como o form se chama "Newsletter" e pode ser reaproveitado em outras landings no futuro, recomendo que esse workflow seja **A SEQUÊNCIA-MÃE** da newsletter. Toda nova inscrita, venha de onde vier, recebe esse fluxo.

### 4. (Opcional mas recomendado) Diferenciar a origem da inscrição

Se você quiser saber quantas inscritas vieram desta landing específica (em vez de outras landings que também usem o form Newsletter no futuro):

1. No Matte → form Newsletter → **Settings → Custom Fields → Add Custom Field**: cria um campo "Source" (texto, oculto)
2. Configura o Matte pra puxar URL parameters como valor de campos do form
3. Na URL desta landing, adiciona `?source=biblioteca-cartas-de-foco`
4. No relatório do Matte você consegue filtrar por source

### 5. Adicionar foto e (opcional) PDF

- Foto: `assets/andressa-foto.jpg` (quadrada, ~400×400px)
- PDF: `assets/biblioteca-anti-procrastinacao.pdf` se quiser hospedar junto. **Não precisa** — o link vai dentro do e-mail do Matte (mais seguro, não dá pra vazar pelo HTML).

### 6. (Opcional) Plugar Analytics

No `<head>` do `index.html` e `obrigado.html`, descomenta os blocos `ANALYTICS — PLUGUE AQUI` e troca:

- `GA_MEASUREMENT_ID` pelo seu ID do GA4
- `META_PIXEL_ID` pelo seu ID do Meta Pixel

O `script.js` dispara o evento `lead_capturado` automaticamente quando o form é enviado (escuta postMessage do iframe).

---

## ☁️ Como subir no Vercel

1. Faz push da pasta pro GitHub (pode ser num repo separado, ex: `cartas-de-foco`)
2. Em [vercel.com](https://vercel.com) → **Add New → Project** → seleciona o repo
3. Configs padrão (HTML estático, sem build) → **Deploy**

Em ~30 segundos: `cartas-de-foco.vercel.app`.

**Subdomínio próprio** (recomendado, ex: `cartas.andressaguimaraes.com.br`):

1. Vercel → **Settings → Domains → Add Domain** → `cartas.andressaguimaraes.com.br`
2. O Vercel mostra um CNAME pra adicionar
3. Hostinger → **hpanel → DNS** → adiciona o CNAME
4. Aguarda propagação (10min–2h)

---

## ☁️ Alternativa: dentro do repo `iscas-rotina-focada` (GitHub Pages)

Como as outras iscas já moram lá, é a opção mais simples:

1. Copia esta pasta pra dentro do repo `iscas-rotina-focada`
2. Commit + push
3. URL fica: `andressaguimaaraes.github.io/iscas-rotina-focada/biblioteca-anti-procrastinacao/`

Zero infra nova.

---

## 🎨 Identidade visual

- **Paleta:** rose (#E91E63), rose deep (#BE185D), rose soft (#FCE7F3), ink (#1a1a2e), cream (#FAF7F2), paper (#FFFBF7)
- **Tipografia:** Playfair Display (títulos), Inter (corpo), Caveat (acentos manuscritos)

Pra trocar cores: variáveis `:root` no topo do `styles.css`.

---

## 📝 Por que essa abordagem (e não ESP externo)

Você **já paga o Matte Hub** (CRM + e-mail marketing + domínio autenticado `mail.andressaguimaraes.com.br`). Adicionar MailerLite / ConvertKit / Brevo significaria:

- Custo recorrente extra
- Lista de e-mails dividida entre 2 plataformas
- 2 sequências de boas-vindas em paralelo (risco de inconsistência)

Reusar o Matte é mais barato, mais simples e dá relatórios unificados.

**Consequência técnica:** como o form é um iframe do Matte (cross-origin), alguns requisitos vivem dentro do Matte builder e não no HTML aqui: campos do form, validação, honeypot, checkbox LGPD, loading state, redirect. O HTML controla só o layout em volta + o disparo de analytics via postMessage.

---

## ❓ Perguntas em aberto

1. **Frequência da newsletter:** semanal (toda terça?) ou outra cadência?
2. **Nome final:** "Cartas de Foco" é um nome que eu propus — você quer manter, trocar (ex: "Rotina Focada", "Cartas de Andressa") ou criar outro?
3. **A primeira sequência de e-mails:** já está pronta ou precisa ser escrita antes de você ativar?

---

Criado com carinho · maio de 2026
