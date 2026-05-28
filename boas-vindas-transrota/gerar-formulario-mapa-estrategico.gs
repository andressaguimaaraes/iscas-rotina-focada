/**
 * WINNER IA — Gerador automático do Google Form
 * Mapa Estratégico de IA · Formulário do Mentorado (12 perguntas)
 *
 * COMO USAR (3 passos, ~30 segundos):
 *
 * 1) Acesse: https://script.google.com → "Novo projeto"
 * 2) Apague o código padrão e COLE este arquivo inteiro
 * 3) Clique em "Executar" (▶) — autorize o acesso na primeira vez
 *
 * Pronto. O console vai imprimir:
 *   - Link para EDITAR o formulário
 *   - Link público para COMPARTILHAR com o mentorado
 *
 * O formulário será criado no seu Google Drive automaticamente.
 */

function criarFormularioMapaEstrategico() {
  // ─────────────────────────────────────────────────────────────
  // 1. CRIA O FORMULÁRIO
  // ─────────────────────────────────────────────────────────────
  const form = FormApp.create('Mapa Estratégico de IA — Formulário do Mentorado');

  form.setDescription(
    'Este formulário é a base para construirmos o seu Mapa Estratégico de IA. ' +
    'Quanto mais honesto e específico você for, mais cirúrgico será o plano que vamos desenhar juntos.\n\n' +
    'Responda no que faz sentido. Não tente parecer organizado: queremos a realidade da sua operação hoje, ' +
    'não uma versão polida dela.\n\n' +
    'Tempo estimado: 25 a 40 minutos.'
  );

  form.setCollectEmail(true);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage(
    'Recebemos seu formulário. Com essas respostas em mãos, sua mentoria entra em modo cirúrgico: ' +
    'vamos mapear o que automatizar primeiro, onde a IA gera dinheiro mais rápido e qual é o caminho ' +
    'de 12 meses para a sua empresa.\n\nObrigada — Equipe Winner IA.'
  );

  // ─────────────────────────────────────────────────────────────
  // 2. SEÇÃO DE IDENTIFICAÇÃO
  // ─────────────────────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('Identificação')
    .setHelpText('Dados básicos para abrirmos seu Mapa.');

  form.addTextItem().setTitle('Nome').setRequired(true);
  form.addTextItem().setTitle('Empresa').setRequired(true);
  form.addTextItem().setTitle('Cargo').setRequired(true);
  form.addTextItem().setTitle('Segmento').setRequired(true);
  form.addDateItem().setTitle('Data').setRequired(true);

  // ─────────────────────────────────────────────────────────────
  // 3. FORMULÁRIO — 12 PERGUNTAS
  // ─────────────────────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('Mapa Estratégico de IA')
    .setHelpText('12 perguntas. Responda com objetividade.');

  // 01
  form.addParagraphTextItem()
    .setTitle('01 · O que a empresa faz e qual é o modelo de receita?')
    .setHelpText('Produto, serviço, recorrência, projeto, comissão.')
    .setRequired(true);

  // 02
  form.addParagraphTextItem()
    .setTitle('02 · Qual o faturamento médio mensal e quantas pessoas trabalham hoje?')
    .setHelpText('Pode ser uma faixa.')
    .setRequired(true);

  // 03
  form.addParagraphTextItem()
    .setTitle('03 · Descreva o caminho do seu cliente — do primeiro contato até a entrega final.')
    .setHelpText('Pode ser em tópicos.')
    .setRequired(true);

  // 04
  form.addParagraphTextItem()
    .setTitle('04 · Quais ferramentas e sistemas vocês usam hoje?')
    .setHelpText('CRM, ERP, planilhas, WhatsApp, etc.')
    .setRequired(true);

  // 05
  form.addParagraphTextItem()
    .setTitle('05 · Quais tarefas consomem mais tempo da equipe e poderiam ser feitas de forma mais rápida?')
    .setRequired(true);

  // 06
  form.addParagraphTextItem()
    .setTitle('06 · Onde você percebe mais retrabalho, falha de comunicação ou informação perdida?')
    .setRequired(true);

  // 07
  form.addParagraphTextItem()
    .setTitle('07 · O que trava o crescimento da empresa hoje?')
    .setHelpText('Seja direto.')
    .setRequired(true);

  // 08
  form.addParagraphTextItem()
    .setTitle('08 · Quais decisões você toma no feeling que deveriam ser baseadas em dados?')
    .setRequired(true);

  // 09
  form.addParagraphTextItem()
    .setTitle('09 · Você ou alguém do time já usa IA hoje? Para quê?')
    .setHelpText('Se não usa, escreva "ainda não usamos".')
    .setRequired(false);

  // 10 — escala 0 a 10
  form.addScaleItem()
    .setTitle('10 · Como você avalia a maturidade digital da empresa de 0 a 10?')
    .setHelpText('0 = tudo no WhatsApp e planilha  ·  10 = tudo automatizado e integrado.')
    .setBounds(0, 10)
    .setLabels('Tudo manual', 'Tudo automatizado')
    .setRequired(true);

  // 11
  form.addParagraphTextItem()
    .setTitle('11 · Onde você quer que a empresa esteja em 12 meses?')
    .setHelpText('Seja específico: faturamento, equipe, processos, mercado.')
    .setRequired(true);

  // 12
  form.addParagraphTextItem()
    .setTitle('12 · Se a IA pudesse resolver uma coisa na sua empresa agora, o que você pediria?')
    .setRequired(true);

  // ─────────────────────────────────────────────────────────────
  // 4. CRIA PLANILHA DE RESPOSTAS VINCULADA
  // ─────────────────────────────────────────────────────────────
  const planilha = SpreadsheetApp.create('Mapa Estratégico de IA — Respostas');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, planilha.getId());

  // ─────────────────────────────────────────────────────────────
  // 5. IMPRIME LINKS NO CONSOLE
  // ─────────────────────────────────────────────────────────────
  const linkEditar = form.getEditUrl();
  const linkPublico = form.getPublishedUrl();
  const linkPlanilha = planilha.getUrl();

  Logger.log('═══════════════════════════════════════════════════════');
  Logger.log('FORMULÁRIO CRIADO COM SUCESSO');
  Logger.log('═══════════════════════════════════════════════════════');
  Logger.log('');
  Logger.log('🔗 EDITAR formulário:');
  Logger.log(linkEditar);
  Logger.log('');
  Logger.log('🔗 LINK PÚBLICO (compartilhar com mentorado):');
  Logger.log(linkPublico);
  Logger.log('');
  Logger.log('📊 PLANILHA DE RESPOSTAS:');
  Logger.log(linkPlanilha);
  Logger.log('');
  Logger.log('═══════════════════════════════════════════════════════');
  Logger.log('Use o LINK PÚBLICO no bloco "Mapa Estratégico" da página de boas-vindas.');
  Logger.log('═══════════════════════════════════════════════════════');
}
