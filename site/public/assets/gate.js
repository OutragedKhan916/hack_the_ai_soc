(function () {
  const KEY = "mainframe_unlocked";
  async function hashCode(s) {
    const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(s).trim().toLowerCase()));
    return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
  }
  function getUnlocked() {
    try { return Math.max(1, parseInt(localStorage.getItem(KEY) || "1", 10) || 1); } catch (e) { return 1; }
  }
  function setUnlocked(n) {
    try { if (n > getUnlocked()) localStorage.setItem(KEY, String(n)); } catch (e) {}
  }
  window.hashCode = hashCode;

  // Progress can also ride in the URL (#u=2). This keeps the gate working in
  // contexts where localStorage is blocked or split per file (file:// previews).
  const link = /(?:^|[#&?])u=(\d+)/.exec(location.search + location.hash);
  const linkLevel = link ? parseInt(link[1], 10) : 0;
  if (linkLevel > 0) setUnlocked(linkLevel);
  function unlocked() { return Math.max(getUnlocked(), linkLevel); }

  window.Gate = { getUnlocked: unlocked, setUnlocked, hashCode };

  // On task pages: <script src="../assets/gate.js" data-task="3"></script>
  const me = document.currentScript && document.currentScript.dataset.task;
  if (me && parseInt(me, 10) > unlocked()) location.replace("../index.html");
})();
