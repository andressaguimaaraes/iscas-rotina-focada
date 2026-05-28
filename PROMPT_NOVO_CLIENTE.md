# 🎯 PROMPT · NOVO CLIENTE — WINNER.IA

> **Como usar este prompt:**
> 1. Abra uma conversa **NOVA** com o Claude
> 2. Anexe estes **3 arquivos** no topo:
>    - `PROMPT_MAPA_ESTRATEGICO_WINNER.md` (já está no seu Downloads — é o manual completo da identidade)
>    - Transcrição da call de boas-vindas (PDF do Tactiq ou Otter)
>    - Formulário do mentorado respondido (PDF)
> 3. Cole tudo abaixo
> 4. Edite **APENAS** o que está entre colchetes
> 5. Manda rodar

---

## 📋 DADOS DO CLIENTE — edite só isto

```
Nome do cliente:         [NOME DO CLIENTE]
Slug para arquivos:      [slug-do-cliente]
Data de início:          [DD/MM/AAAA]
Consultorias com Lucas:  [número — 2 ou 6]
Tutorias com Diogo:      [número — 12]
Duração total:           [6 meses]
```

**Recursos do programa (cole os links/senhas que mandar pro cliente):**
```
Link do curso Claude:     [link Kiwify]
Manual do Mentorado:      [link]
Senha do manual:          [senha]
Drive compartilhado:      [link Drive do cliente]
Formulário diagnóstico:   https://formsprogramaaceleracao.winneria.com.br/
Grupo WhatsApp:           [link do grupo]
```

---

## 📝 O QUE EU QUERO QUE VOCÊ FAÇA

Olá, Claude. Você é um agente da **Winner.IA** ajudando a montar o pacote completo de mentoria para um novo cliente.

### Passo 1 — Leia tudo
Leia na íntegra **os 2 PDFs anexados** (transcrição da call + formulário). Extraia:
- Áreas do negócio, pessoas e quem faz o quê
- Ferramentas em uso hoje
- Gargalos mencionados (com números reais: faturamento, perdas, sazonalidade)
- Objetivos do empresário em 6 e 12 meses
- Nível de maturidade digital
- Quais decisões hoje são feitas no feeling

**Proibido inventar dado.** Se algo não foi coletado nos PDFs, escreva literalmente: *"Informação não coletada — alinhar na primeira reunião."*

### Passo 2 — Siga o brand system
Use o arquivo `PROMPT_MAPA_ESTRATEGICO_WINNER.md` (anexo) como **manual completo**. Ele tem:
- Paleta cromática exata (Onyx, Signature Gold, Warm Paper, Sand)
- Tipografia (Inter Tight + JetBrains Mono)
- Estrutura dos 6 blocos do mapa
- Estrutura dos 12 docs (3 por consultoria × 4 consultorias)
- Regras técnicas e checklist final

### Passo 3 — Gere todos os entregáveis

**1. Dashboard de boas-vindas — DUAS versões**

Gere DOIS dashboards distintos (mesma identidade, comportamento diferente):

- **`boas-vindas-[slug].html`** — versão **EQUIPE / INTERNA** (privada, só Winner acessa)
  - Tudo desbloqueado: 4 consultorias com os 3 botões cada (Comece por aqui · Cronograma · Passo a passo)

- **`cliente-[slug].html`** — versão **CLIENTE / EXTERNA** (a que vai pública pro grupo)
  - **Apenas a Consultoria 01 desbloqueada**
  - Consultorias 02, 03 e 04 com **overlay de cadeado** + texto "disponível em breve · mês X · [mês]"
  - Copy explicando que o acesso é gradual: "Liberadas uma por vez, conforme o programa avança"
  - **Mês para abrir** cada consultoria definido com base no plano dos 6 meses

Ambas viram `index.html` no respectivo pacote (ver item 4).

**2. Mapa Estratégico**
- `mapa_estrategico_[slug].html` com 6 blocos clicáveis

**3. 12 documentos Word das 4 consultorias** (pasta `consultorias/`)

Para cada uma das 4 consultorias (temas derivados dos gargalos reais do cliente — não copie os do Coisa e Lar):

- `consultoria_X_[tema]_proximo_passo.docx` ← **o mais importante para o cliente**
  - Linguagem SIMPLES, qualquer pessoa entende
  - 3 tarefas concretas dessa semana
  - Ferramentas com links (Claude → claude.ai, Nano Banana → gemini.google.com, etc.)
  - Quem da equipe faz cada tarefa + tempo estimado
  - Use **"Claude"** (jamais "Cláudio")

- `consultoria_X_[tema]_cronograma.docx` — tabela de 4 semanas

- `consultoria_X_[tema]_passo_a_passo.docx` — método detalhado

**4. DOIS pacotes de publicação separados**

Crie 2 pastas + 2 zips, distintos:

- **`[slug]-CLIENTE/`** + **`[slug]-CLIENTE.zip`** → site externo (publicar pro cliente)
  - `index.html` = cópia de `cliente-[slug].html`
  - `cliente-[slug].html`
  - `mapa_estrategico_[slug].html`
  - `consultorias/` → **somente os 3 docs da Consultoria 01** (privacidade: outros .docx não são publicados externamente)

- **`[slug]-EQUIPE/`** + **`[slug]-EQUIPE.zip`** → site interno (uso Winner, link privado)
  - `index.html` = cópia de `boas-vindas-[slug].html`
  - `boas-vindas-[slug].html`
  - `mapa_estrategico_[slug].html`
  - `consultorias/` → **todos os 12 docs**

Ambos os ZIPs prontos para arrastar em https://app.netlify.com/drop.

**5. Mensagem de WhatsApp — PRIMEIRO MOMENTO**
- Texto pronto pra eu colar no grupo do cliente
- **Foco apenas na Consultoria 01** (as outras 3 ainda estão travadas — não menciona)
- Tom Andressa: caloroso, direto, motivacional, em pt-BR
- Inclui placeholder `[colar link Netlify quando publicar]`
- Distribui as 3 tarefas do "Comece por aqui" por nome de quem da equipe faz cada uma
- Encerra com convite pra agendar a primeira sessão quando tudo estiver pronto

---

## ⚠️ ANTES DE ENTREGAR, CONFIRA

- [ ] Todos os dados vieram dos PDFs (nenhum placeholder genérico)
- [ ] Paleta usa **apenas** Onyx · Signature Gold · Warm Paper · Sand
- [ ] Tipografia usa **apenas** Inter Tight + JetBrains Mono
- [ ] Logo `V·` em SVG inline aparece no hero e no footer
- [ ] Wordmark `winner.ia` com `.ia` em ouro
- [ ] Cronograma do mapa usa o número correto de consultorias e tutorias informado acima
- [ ] 4 consultorias derivadas dos gargalos REAIS deste cliente
- [ ] 12 docs gerados em `consultorias/`
- [ ] Doc "Próximo Passo" está em linguagem que qualquer funcionário entende
- [ ] Em todos os textos, é "Claude" (não "Cláudio")
- [ ] **2 dashboards** criados: `boas-vindas-[slug].html` (EQUIPE) + `cliente-[slug].html` (CLIENTE travado)
- [ ] Versão CLIENTE: apenas Consultoria 01 desbloqueada · 02/03/04 com overlay de cadeado
- [ ] Dashboard tem **3 botões** por consultoria liberada: "Comece por aqui" (ouro), "Cronograma", "Passo a passo"
- [ ] **2 pacotes** criados: `[slug]-CLIENTE.zip` + `[slug]-EQUIPE.zip`
- [ ] Pacote CLIENTE só inclui os 3 docs da Consultoria 01 (privacidade)
- [ ] Pacote EQUIPE inclui os 12 docs completos

### Saída esperada
1. Caminho de cada arquivo gerado
2. Caminho do ZIP final
3. Mensagem de WhatsApp pronta para copiar

Quando terminar, **abra o `index.html` localmente** para revisão visual antes de eu publicar no Netlify.

---

**Pronto. Pode começar.**
