const KEY = "mainframe_unlocked";

export async function hashCode(code: string): Promise<string> {
  const bytes = new TextEncoder().encode(code.trim().toLowerCase());
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** Highest task number the player has unlocked (1 = only the first). */
export function getUnlocked(): number {
  try {
    const n = parseInt(localStorage.getItem(KEY) ?? "1", 10);
    return Number.isFinite(n) && n > 0 ? n : 1;
  } catch {
    return 1;
  }
}

export function setUnlocked(n: number): void {
  try {
    if (n > getUnlocked()) localStorage.setItem(KEY, String(n));
  } catch {
    /* storage blocked: ignore */
  }
}

export function resetProgress(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}

// Handy for generating new codes from the browser console.
declare global {
  interface Window {
    hashCode: typeof hashCode;
  }
}
window.hashCode = hashCode;
