// Tippt die Begrüßungszeilen nacheinander, Zeichen für Zeichen.
// Respektiert prefers-reduced-motion und schreibt sonst den Text direkt hin.
(function () {
  const lines = [
    { id: "typed-intro", text: "whoami && cat about.txt" },
    { id: "typed-keys", text: "ls ./keys && cat contact.txt" },
  ];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    lines.forEach(({ id, text }) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    });
    return;
  }

  function typeLine(index) {
    if (index >= lines.length) return;
    const { id, text } = lines[index];
    const el = document.getElementById(id);
    if (!el) {
      typeLine(index + 1);
      return;
    }
    let i = 0;
    (function typeNext() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(typeNext, 45);
      } else {
        typeLine(index + 1);
      }
    })();
  }

  typeLine(0);
})();

// Theme-Toggle (Dark/Light) und Sprach-Toggle (DE/EN).
// Die eigentliche Wahl beim Laden trifft bereits ein Inline-Script im
// <head>, um Flackern zu vermeiden. Hier werden nur die Buttons verdrahtet
// und der aktuelle Zustand persistiert + in der UI sichtbar gemacht.
(function () {
  function syncButtons(selector, attr) {
    const current = document.documentElement.getAttribute(attr);
    document.querySelectorAll(selector).forEach((btn) => {
      const value = btn.dataset.themeChoice || btn.dataset.langChoice;
      btn.setAttribute("aria-pressed", String(value === current));
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    syncButtons("[data-theme-choice]", "data-theme");
  }

  function setLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
    syncButtons("[data-lang-choice]", "data-lang");
  }

  document.querySelectorAll("[data-theme-choice]").forEach((btn) => {
    btn.addEventListener("click", () => setTheme(btn.dataset.themeChoice));
  });

  document.querySelectorAll("[data-lang-choice]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.langChoice));
  });

  syncButtons("[data-theme-choice]", "data-theme");
  syncButtons("[data-lang-choice]", "data-lang");
})();
