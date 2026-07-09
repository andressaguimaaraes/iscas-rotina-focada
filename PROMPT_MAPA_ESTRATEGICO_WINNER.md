# PROMPT · MAPA ESTRATÉGICO DE IA — WINNER.IA

Template reutilizável para gerar o pacote completo de mentoria para qualquer novo cliente do Programa de Aceleração em IA.

Antes de rodar, **substitua os campos entre colchetes** na seção INPUTS DO CLIENTE. O resto do prompt não precisa ser alterado.

---

## INPUTS DO CLIENTE — preencha antes de rodar

| Campo | Valor |
|---|---|
| Nome do cliente | `[NOME_CLIENTE]` (ex: Coisa e Lar) |
| Slug (para arquivos) | `[SLUG_CLIENTE]` (ex: coisa-e-lar) |
| Data de início da mentoria | `[DATA_INICIO]` (ex: 18/05/2026) |
| Segmento / categoria | `[SEGMENTO]` (ex: E-commerce · Cama, mesa & banho) |
| Faturamento mensal | `[FATURAMENTO]` (ex: R$ 650–700k/mês) |
| Tamanho da equipe | `[EQUIPE]` (ex: 8 pessoas · 3 CNPJs) |
| Nº de consultorias com Lucas | `[NUM_CONSULTORIAS_LUCAS]` (ex: 2 ou 6) |
| Nº de tutorias com Diogo | `[NUM_TUTORIAS_DIOGO]` (ex: 12) |
| Duração total | `[DURACAO]` (ex: 6 meses) |
| Link do curso Claude Sem Código | `[LINK_CURSO]` |
| Link do Manual do Mentorado | `[LINK_MANUAL]` |
| Senha do Manual | `[SENHA_MANUAL]` |
| Link do Drive compartilhado | `[LINK_DRIVE]` |
| Link do formulário de diagnóstico | `[LINK_FORMULARIO]` |
| Link do grupo WhatsApp | `[LINK_WHATSAPP]` |

---

## INPUTS DE ARQUIVOS — anexar antes de rodar

1. **PDF 1 — Transcrição da call de boas-vindas** (gerada pelo Tactiq ou similar)
2. **PDF 2 — Formulário do mentorado** com as 12 perguntas respondidas
3. *(opcional)* **Brand book Winner.ia** se houver atualização da identidade

---

## INSTRUÇÃO PARA O AGENTE

> **Leia os PDFs anexados na íntegra antes de gerar qualquer conteúdo.** Extraia: áreas do negócio, pessoas e responsabilidades, ferramentas em uso, gargalos mencionados, números reais (faturamento, perdas, sazonalidade), objetivos do empresário, nível de maturidade digital, e quais decisões hoje são feitas no feeling. Toda página gerada deve usar esses dados reais — proibido placeholder genérico. Se algum dado não foi coletado, escreva explicitamente: *"Informação não coletada — alinhar na primeira reunião."*

---

## ENTREGÁVEIS — gere todos

### 1. Dashboard de boas-vindas
**Arquivo:** `boas-vindas-[SLUG_CLIENTE].html` (também salvar como `index.html`)

### 2. Mapa Estratégico
**Arquivo:** `mapa_estrategico_[SLUG_CLIENTE].html`

### 3. 12 documentos Word das consultorias (3 por consultoria × 4 consultorias)
**Pasta:** `consultorias/` contendo 12 `.docx`:

Para CADA uma das 4 consultorias, gerar:
- `consultoria_X_[tema]_proximo_passo.docx` — **NOVO · o mais importante para o cliente**
- `consultoria_X_[tema]_cronograma.docx`
- `consultoria_X_[tema]_passo_a_passo.docx`

Os 4 temas das consultorias são definidos pelo agente com base nos gargalos identificados nos PDFs. Não use os temas do Coisa e Lar como padrão — derive dos PDFs deste cliente.

### 4. ZIP pronto para Netlify
**Arquivo:** `[SLUG_CLIENTE]-netlify.zip` contendo `index.html` + os HTMLs + a pasta `consultorias/`

---

## IDENTIDADE VISUAL — winner.ia · Brand System v1.0

### Paleta cromática (HEX · uso)

| Cor | HEX | RGB | Uso |
|---|---|---|---|
| **Onyx 00** | `#0A0A0B` | 10·10·11 | Background institucional, headers escuros |
| **Signature Gold 01** | `#C8A24A` | 200·162·74 | **Único acento — usar com intenção, jamais como decoração** |
| **Deep Gold 02** | `#8C6E22` | 140·110·34 | Variação escura do ouro |
| **Warm Paper 03** | `#F2EBDD` | 242·235·221 | Fundo de conteúdo, papel quente |
| **Sand 04** | `#E6DDC8` | 230·221·200 | Cards sobre Warm Paper |

### Tipografia (Google Fonts)

- **Inter Tight** (300–800) — primária, display & UI: títulos, copy, cards
- **JetBrains Mono** (400, 500) — secundária, metadados/dados/código: tags uppercase, numeração, etiquetas técnicas

### Hierarquia tipográfica

| Nível | Tamanho / Line-height |
|---|---|
| Display | 120 / 92 |
| H1 | 72 / 68 |
| H2 | 48 / 52 |
| Body | 18 / 28 |
| Caption | 12 / 16 |

### Grid

- 12 colunas
- Gutter 16px
- Margem 48px
- Baseline 8px
- Breakpoint 1440px

### Tom & padrões visuais

- **Layout sanduíche dark/light:** alternar Onyx ↔ Warm Paper entre seções
- **Tags monoespaçadas** uppercase com `letter-spacing: 0.08–0.14em` no estilo: `WINNER.IA — PROGRAMA`, `01 / 14`, `V 1.0 / 2026`
- **Numeração** em duas linhas estilo brand book: `01 /`, `14`
- **Wordmark** sempre `winner.ia` (lowercase) — `.ia` em **Signature Gold**
- **Logo V·** em SVG inline (V estilizado com bolinha no canto superior direito)
- **Manifesto** opcional integrado no hero: *"Inteligência artificial com propósito de negócio. Vencer não é tendência — é decisão."*
- **Grids visíveis sutis** no fundo Onyx (1px Sand 8% opacity, células 96px)
- **Linhas finas** (1px) em divisões — nunca usar barras coloridas decorativas
- **Hover de cards:** inverter Sand → Onyx (cria contraste e energia)
- **Ouro como acento:** apenas em números importantes, marcos, tags-chave, hover states. NUNCA como background extenso.

---

## ESTRUTURA · Dashboard de Boas-vindas

### Hero institucional (fundo Onyx)
- Tag superior em mono: `winner.ia — programa de aceleração em ia` / `cliente · [NOME_CLIENTE]`
- Tag direita: `v 1.0 / 2026` · `01 / 04`
- Linha-acento dourada + tag kicker `posicionamento · 2026`
- Título H1 grande (Inter Tight 700): "Inteligência artificial com propósito de negócio. *Sua aceleração começa agora.*"
- Lede curto personalizado para o segmento do cliente
- Meta-grid com 4 itens: cliente · segmento · início · duração
- Logo V· + wordmark no rodapé do hero

### Seção "02 — recursos" (fundo Warm Paper)
- Header com tag + título "Tudo que você acessa durante a mentoria."
- Grid de 5 cards em 12 colunas (3-3-3 + 6-6, ou ajustar pela quantidade de recursos disponíveis):
  1. Curso Claude Sem Código
  2. Manual do Mentorado
  3. Drive Compartilhado
  4. Mapa Estratégico → linka para `mapa_estrategico_[SLUG_CLIENTE].html`
  5. Comunidade & Suporte WhatsApp
- Cada card: numeração `01 / curso`, título Inter Tight bold, desc curta, meta-info em mono uppercase

### Seção "03 — consultorias estratégicas" (fundo Warm Paper, cards Onyx)
- Header: "4 frentes estratégicas. Cronograma + passo a passo para cada."
- Grid 2×2 com 4 cards Onyx, um por consultoria
- Cada card mostra:
  - Tag `consultoria 0X` em ouro
  - Tag `mês X · [mês]` em paper opacity 0.5
  - Título Inter Tight (tema da consultoria derivado dos gargalos)
  - Subtítulo descritivo
  - **2 botões de download:** "Cronograma" e "Passo a passo" — linkados para os respectivos `.docx` em `consultorias/`

### Footer Onyx
- Logo + wordmark winner.ia
- Manifesto curto: "Consultoria estratégica em I.A para empresários. Vencer não é tendência — é decisão."
- 3 colunas: programa · contato · brand
- Linha inferior com tags mono: `© 2026 · winner.ia · brand system v 1.0` · `cliente · [NOME_CLIENTE]`

---

## ESTRUTURA · Mapa Estratégico (6 blocos clicáveis)

### Hero Onyx
- Back-link em mono: `← voltar à dashboard`
- Título display H1: "Mapa estratégico de IA. *Seu plano dos próximos [DURACAO]*"
- Meta-grid: cliente · segmento · faturamento · equipe · gerado em

### Bloco 01 — Mapeamento do Negócio
- Diagrama SVG inline (Inter Tight nas labels, JetBrains Mono nas sub-labels): áreas, pessoas, fluxo
- Cards de áreas: tag em ouro + nome + descrição
- Lista da stack de ferramentas

### Bloco 02 — Gargalos & Onde Aplicar IA
- Diagrama SVG radial com setores e gargalos
- Para cada gargalo (6–8 identificados):
  - Título + setor afetado (tag ouro)
  - Problema atual (com números reais dos PDFs)
  - Solução com IA proposta
  - Grid 3 colunas: economia · impacto financeiro · dificuldade (Baixa/Média/Alta com cores semânticas)
  - Caixa "passos para resolver" com lista numerada

### Bloco 03 — Plano de Ação & Treinamentos
- Timeline SVG dos [DURACAO] meses com pontos M1–M6 (ou conforme duração)
- Cards mês a mês: foco · treinamento · entregável · IA trabalhada
- Justificativa da ordem de priorização

### Bloco 04 — Dashboard de Métricas
- Diagrama radar SVG (atual vs meta) com 7 eixos
- 6–8 cards de indicadores: nome · descrição · fonte · frequência · meta

### Bloco 05 — Cronograma da Mentoria
- Timeline SVG detalhada com:
  - **[NUM_CONSULTORIAS_LUCAS] reuniões** com Lucas (R1, R2, …) em ouro
  - **[NUM_TUTORIAS_DIOGO] tutorias** com Diogo (T1, T2, …) em Sand
  - 4 marcos críticos (★) em ouro: 1ª automação · 1º resultado mensurável · revisão de rota · apresentação final
- Lista dos marcos com explicação

### Bloco 06 — ROI Estimado
- Gráfico de barras SVG mês a mês (crescente)
- 4 cards de retorno: horas/mês · $ recuperado/mês · 6 meses · 12 meses
- Caixa de premissas explícitas (custo-hora, base de cálculo, o que NÃO foi contado)
- Comparativo com custo da mentoria (se o agente conhecer a faixa)

### Footer Onyx
Igual ao da dashboard, mas com tag `mapa estratégico · documento confidencial`

---

## ESTRUTURA · 12 Documentos Word das Consultorias

### Para cada uma das 4 consultorias, gerar 3 docs

#### Doc A — Próximo Passo (o mais importante para o cliente)
**Regra de ouro: linguagem simples. Qualquer pessoa da equipe do cliente precisa entender e executar sem ajuda.** Use "Claude" (nunca "Cláudio"). Cite as ferramentas reais e onde acessá-las.

Estrutura:
1. **Cabeçalho Winner.ia**: kicker mono `Consultoria 0X · Próximo passo`, título do tema, subtítulo "O que fazer essa semana para [objetivo concreto]"
2. **Callout "O que é essa folha"**: explica em 2-3 linhas que este documento é o que o cliente faz ANTES da consultoria começar
3. **Quem faz**: nome(s) do(s) responsável(eis) extraído(s) dos PDFs + tempo estimado
4. **As 3 tarefas dessa semana** — usar lista numerada com título grande em ouro (01, 02, 03), título da tarefa em destaque, e descrição em linguagem cotidiana (frases curtas, sem jargão técnico). Cada tarefa explica O QUÊ fazer, ONDE encontrar, e o resultado esperado.
5. **Ferramentas que você vai usar** — 3 a 5 caixas (Sand) com: nome da ferramenta + descrição em 1 linha + "Onde baixar/acessar: [URL ou caminho]"
   - Padronizar: Claude → `claude.ai` (navegador, sem instalação)
   - Citar ferramentas que o cliente JÁ usa (do PDF)
   - Para geração de imagens: Nano Banana Pro (Gemini) → `gemini.google.com`
6. **Para ficar tranquilo(a)** — 4 bullets reforçando: não precisa de programação · não precisa estar perfeito · onde pedir ajuda · que a consultoria começa só depois do prep
7. **Quando estiver pronto** — frase única em itálico instruindo a avisar no grupo WhatsApp
8. **Rodapé**: `Winner IA · Programa de Aceleração em IA · [NOME_CLIENTE] · Consultoria X · Próximo Passo`

#### Doc B — Cronograma de Execução
Estrutura:
1. **Cabeçalho Winner.ia**: kicker mono `Consultoria 0X · Cronograma de Execução`, título Georgia 26pt em Onyx (em DOCX use #3B2A1A — escuro próximo do Onyx — porque Word não renderiza puro #0A0A0B bem), subtítulo italic
2. **Callout "Resumo"**: caixa com borda esquerda dourada, sumarizando o problema e a meta
3. **Tabela de cronograma 4 semanas** com colunas: Semana · Foco · Entregável (header Onyx, linhas alternadas em Warm Paper)
4. **Ritual semanal** após a consultoria (bullets)
5. **Marcos de validação** (bullets)
6. **Rodapé** centralizado: `Winner IA · Programa de Aceleração em IA · [NOME_CLIENTE] · Consultoria X · Cronograma`

#### Doc C — Passo a Passo & Objetivo
Estrutura:
1. **Cabeçalho Winner.ia** (igual ao Doc B, mas título "Passo a Passo & Objetivo")
2. **Objetivo** — callout com a transformação esperada ao fim da consultoria
3. **Por que esta é a Nª consultoria** — justificativa de priorização
4. **Passo a passo completo** com 5–6 subseções (Passo 1, Passo 2, …) cada uma com lista numerada
5. **Resultados esperados em 30/60 dias** (bullets)
6. **Rodapé** com tag específica

### Configuração visual dos docs (use python-docx)

```python
# Cores aplicadas em RGB
BROWN_DARK = (0x3B, 0x2A, 0x1A)    # Onyx aproximado para Word
BROWN_MID = (0x6B, 0x4F, 0x35)
BROWN_WARM = (0x8B, 0x5E, 0x3C)    # Ouro deep
CREAM = "F2EBDD"                    # Warm Paper para shading
CREAM_DEEP = "E6DDC8"               # Sand
```

- Fonte corpo: **Calibri** 11pt
- Fonte títulos: **Georgia** 26/15/12pt
- Bordas de página finas em marrom warm
- Margens 2.2cm topo/base, 2.4cm laterais
- Tabela com header escuro + body em creme alternado
- Callouts com borda esquerda em marrom warm (2pt)

---

## REGRAS TÉCNICAS

### HTML
- Arquivo único por página (CSS embutido em `<style>`, JS em `<script>`)
- Sem dependências externas exceto Google Fonts (Inter Tight + JetBrains Mono)
- Todos os SVGs inline — proibido `<img>` para diagramas
- Logo V· em SVG inline
- Responsivo (testar em 1440, 960, 640px)
- Animação stagger de entrada nos cards (animation-delay 0.08s cada)

### Acessibilidade
- Contraste mínimo AA em todos os pares de cor
- Foco visível em links/cards
- `aria-hidden="true"` em SVGs decorativos
- `<a>` para links navegáveis, não `<div>` com onclick

### Dados
- **Toda informação no mapa deve vir dos PDFs**. Se inventar dado, marcar com tag `[VERIFICAR]`
- Números monetários sempre no formato `R$ XXk` ou `R$ X,Xk`
- Datas no padrão brasileiro `DD/MM/AAAA`

### Estrutura final do projeto
```
[SLUG_CLIENTE]/
├── index.html                              ← cópia do boas-vindas
├── boas-vindas-[SLUG_CLIENTE].html
├── mapa_estrategico_[SLUG_CLIENTE].html
└── consultorias/
    ├── consultoria_1_[tema1]_proximo_passo.docx     ← MAIS IMPORTANTE
    ├── consultoria_1_[tema1]_cronograma.docx
    ├── consultoria_1_[tema1]_passo_a_passo.docx
    ├── consultoria_2_[tema2]_proximo_passo.docx
    ├── consultoria_2_[tema2]_cronograma.docx
    ├── consultoria_2_[tema2]_passo_a_passo.docx
    ├── consultoria_3_[tema3]_proximo_passo.docx
    ├── consultoria_3_[tema3]_cronograma.docx
    ├── consultoria_3_[tema3]_passo_a_passo.docx
    ├── consultoria_4_[tema4]_proximo_passo.docx
    ├── consultoria_4_[tema4]_cronograma.docx
    └── consultoria_4_[tema4]_passo_a_passo.docx
```

E também: `[SLUG_CLIENTE]-netlify.zip` com tudo dentro, pronto para arrastar em https://app.netlify.com/drop.

---

## CHECKLIST FINAL — antes de entregar

- [ ] Todos os dados do mapa vieram dos PDFs (sem placeholder)
- [ ] Paleta usa **apenas** Onyx · Gold · Paper · Sand (zero marrom-creme antigo, zero roxo, zero gradiente)
- [ ] Tipografia usa **apenas** Inter Tight + JetBrains Mono
- [ ] Tags monoespaçadas em uppercase com letter-spacing
- [ ] Logo V· em SVG inline aparece no hero e no footer
- [ ] Wordmark `winner.ia` com `.ia` em ouro
- [ ] Sanduíche dark/light alternando entre seções
- [ ] Cronograma do mapa usa o número correto de consultorias e tutorias
- [ ] 4 consultorias derivadas dos gargalos REAIS do cliente
- [ ] 12 docs gerados em `consultorias/` (3 por consultoria: próximo passo + cronograma + passo a passo)
- [ ] Doc "Próximo Passo" está em linguagem simples — qualquer funcionário do cliente entende
- [ ] Em todos os docs e páginas, usar **Claude** (não "Cláudio")
- [ ] `index.html` existe (cópia do boas-vindas) — sem ele, Netlify não publica
- [ ] ZIP final criado e testado
- [ ] Botões de download dos `.docx` no dashboard funcionam (caminhos relativos `consultorias/*.docx`)

---

**Quando terminar, abrir o `index.html` localmente para revisão visual antes de publicar.**
