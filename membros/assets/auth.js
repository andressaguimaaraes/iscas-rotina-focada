/* ============================================
   ROTINA FOCADA — Autenticação simples (client-side)
   ============================================
   IMPORTANTE: Esta é uma proteção client-side básica.
   Para a versão final com mais segurança, recomenda-se
   usar um sistema de membros real (ex: MemberSpace, Hotmart Members).

   Para alterar a senha: edite a constante ACCESS_PASSWORD abaixo.
   ============================================ */

const ACCESS_PASSWORD = "focada2025";
const AUTH_KEY = "rotinafocada_auth";
const PROGRESS_KEY = "rotinafocada_progress";

const Auth = {
  isAuthenticated() {
    try {
      const data = JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
      if (!data || !data.token) return false;
      // 30 dias de duração
      if (Date.now() - data.timestamp > 30 * 24 * 60 * 60 * 1000) {
        localStorage.removeItem(AUTH_KEY);
        return false;
      }
      return true;
    } catch {
      return false;
    }
  },

  login(name, password) {
    if (password !== ACCESS_PASSWORD) return false;
    localStorage.setItem(AUTH_KEY, JSON.stringify({
      name: name || "Aluna",
      token: btoa(password + Date.now()),
      timestamp: Date.now()
    }));
    return true;
  },

  logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = "login.html";
  },

  getUser() {
    try {
      return JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
    } catch {
      return null;
    }
  },

  requireAuth() {
    if (!this.isAuthenticated()) {
      window.location.href = "login.html";
    }
  }
};

const Progress = {
  getCompleted() {
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "[]");
    } catch {
      return [];
    }
  },

  isCompleted(lessonId) {
    return this.getCompleted().includes(lessonId);
  },

  toggle(lessonId) {
    const completed = this.getCompleted();
    const idx = completed.indexOf(lessonId);
    if (idx >= 0) {
      completed.splice(idx, 1);
    } else {
      completed.push(lessonId);
    }
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(completed));
    return idx < 0;
  },

  getStats(courseData) {
    const completed = this.getCompleted();
    const total = courseData.modules.reduce((sum, m) => sum + m.lessons.length, 0);
    const done = completed.length;
    return {
      total,
      done,
      percent: total > 0 ? Math.round((done / total) * 100) : 0
    };
  },

  getModuleStats(module) {
    const completed = this.getCompleted();
    const total = module.lessons.length;
    const done = module.lessons.filter(l => completed.includes(l.id)).length;
    return {
      total,
      done,
      percent: total > 0 ? Math.round((done / total) * 100) : 0
    };
  }
};
