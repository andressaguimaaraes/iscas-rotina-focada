/* =====================================================================
   Exercícios editáveis — permite que a aluna digite as respostas na tela.
   As respostas ficam salvas automaticamente no navegador dela (localStorage).
   Funciona nos 4 arquivos de exercícios sem precisar editar campo por campo.
   ===================================================================== */
(function () {
  "use strict";

  // Chave única por página (ex.: "aula01-exercicios"), pra cada aula ter suas respostas.
  var pageKey = (location.pathname.split("/").pop() || "exercicios").replace(".html", "");

  function fieldKey(i) { return "resp:" + pageKey + ":" + i; }
  function checkKey(i) { return "chk:" + pageKey + ":" + i; }

  // ---- 1. Campos de escrita (linhas, caixas, nome/data, células de tabela) ----
  var nodes = document.querySelectorAll(
    ".aluno-info .line, .lines, .box, table.tbl td"
  );

  var idx = 0;
  nodes.forEach(function (el) {
    // Não transforma células de tabela que já têm conteúdo fixo (cabeçalhos/exemplos).
    if (el.tagName === "TD" && el.textContent.trim() !== "") return;

    el.classList.add("editavel");
    el.setAttribute("contenteditable", "true");
    el.setAttribute("spellcheck", "true");

    var key = fieldKey(idx);
    var saved = localStorage.getItem(key);
    if (saved !== null && saved !== "") el.innerText = saved;

    el.addEventListener("input", function () {
      localStorage.setItem(key, el.innerText);
      flagSaved();
    });

    idx++;
  });

  // ---- 2. Checkboxes clicáveis ----
  document.querySelectorAll(".checkbox-list li").forEach(function (li, i) {
    li.classList.add("clicavel");
    if (localStorage.getItem(checkKey(i)) === "1") li.classList.add("checked");

    li.addEventListener("click", function () {
      li.classList.toggle("checked");
      localStorage.setItem(checkKey(i), li.classList.contains("checked") ? "1" : "0");
      flagSaved();
    });
  });

  // ---- 3. Aviso no topo + botão de limpar respostas ----
  var toolbar = document.querySelector(".toolbar");
  if (toolbar) {
    var limpar = document.createElement("button");
    limpar.type = "button";
    limpar.className = "clear-btn";
    limpar.textContent = "Limpar respostas";
    limpar.addEventListener("click", function () {
      if (!confirm("Apagar TODAS as suas respostas desta aula? Isso não pode ser desfeito.")) return;
      Object.keys(localStorage).forEach(function (k) {
        if (k.indexOf(":" + pageKey + ":") > -1) localStorage.removeItem(k);
      });
      location.reload();
    });
    toolbar.appendChild(limpar);
  }

  // Faixa de instrução logo abaixo da toolbar.
  var aviso = document.createElement("div");
  aviso.className = "aviso-editavel";
  aviso.innerHTML =
    "✏️ Você pode <strong>digitar direto nos campos</strong> abaixo. " +
    "Suas respostas são <strong>salvas automaticamente neste navegador</strong>. " +
    "Para enviar para a mentora, clique em <strong>Imprimir / Salvar PDF</strong> e mande o arquivo.";
  var doc = document.querySelector(".doc");
  if (doc && doc.parentNode) doc.parentNode.insertBefore(aviso, doc);

  // ---- 4. Indicador "Salvo ✓" ----
  var toast = document.createElement("div");
  toast.className = "saved-toast";
  toast.textContent = "Salvo ✓";
  document.body.appendChild(toast);

  var toastTimer = null;
  function flagSaved() {
    toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 1200);
  }
})();
