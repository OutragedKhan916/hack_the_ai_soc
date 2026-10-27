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
  window.Gate = { getUnlocked, setUnlocked, hashCode };

  // On task pages: <script src="../assets/gate.js" data-task="3"></script>
  const me = document.currentScript && document.currentScript.dataset.task;
  if (me && parseInt(me, 10) > getUnlocked()) location.replace("../index.html");
})();
