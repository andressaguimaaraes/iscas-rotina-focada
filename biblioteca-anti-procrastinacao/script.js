/* =========================================================
   Biblioteca Anti-Procrastinação — script da landing

   O formulário de captura é um iframe do Matte (LeadConnector).
   Por isso a maior parte do que normalmente seria controlado
   por JS (validação de campos, honeypot, loading state) é
   gerenciada pelo Matte builder, NÃO por este arquivo.

   Este script cuida de:
   1. Disparar analytics quando o usuário envia o form
      (escuta mensagens postMessage emitidas pelo iframe).
   2. Garantir que links externos abram em nova aba com segurança.
   ========================================================= */

(function () {
  'use strict';

  // ----- 1. Analytics: disparar evento quando o form for enviado -----

  /**
   * O iframe do Matte (form_embed.js) emite postMessage events
   * pra parent window quando o form é submetido com sucesso.
   * Escutamos esses eventos pra disparar conversão no GA4 e Meta Pixel.
   *
   * PLUGUE AQUI: descomente o bloco de analytics no <head> dos HTMLs
   * e configure GA_MEASUREMENT_ID e META_PIXEL_ID.
   */
  window.addEventListener('message', function (event) {
    // Só processa mensagens vindas do domínio do Matte
    if (!event.origin || !event.origin.includes('leadconnectorhq.com')) {
      return;
    }

    var data = event.data;
    if (!data || typeof data !== 'object') return;

    // O Matte emite eventos com type 'form-submit-success' ou similar.
    // Como o nome exato pode variar, usamos um match defensivo.
    var isSubmitEvent =
      data.type === 'form-submit-success' ||
      data.event === 'form_submit' ||
      (typeof data.action === 'string' && data.action.indexOf('submit') !== -1);

    if (!isSubmitEvent) return;

    dispararConversao();
  });

  function dispararConversao() {
    // Google Analytics 4
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'lead_capturado', {
        event_category: 'lead_magnet',
        event_label: 'biblioteca-anti-procrastinacao'
      });
    }

    // Meta Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'biblioteca-anti-procrastinacao'
      });
    }

    // Log de debug (remover em produção se preferir)
    console.log('[Biblioteca] lead_capturado disparado');
  }

  // ----- 2. Links externos: rel="noopener" como defesa em profundidade -----

  document.addEventListener('DOMContentLoaded', function () {
    var externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(function (link) {
      if (!link.rel || link.rel.indexOf('noopener') === -1) {
        link.rel = (link.rel ? link.rel + ' ' : '') + 'noopener';
      }
    });
  });

})();
