// Tippt den Begrüßungssatz nach dem Prompt Zeichen für Zeichen.
// Respektiert prefers-reduced-motion und schreibt sonst den Text direkt hin.
(function () {
  const el = document.getElementById("typed");
  if (!el) return;

  const text = "whoami && cat about.txt";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    el.textContent = text;
    return;
  }

  let i = 0;
  function typeNext() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(typeNext, 45);
    }
  }
  typeNext();
})();
