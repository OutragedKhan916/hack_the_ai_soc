/** Tiny typed element helper. `html` is set as innerHTML (only pass trusted strings). */
export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  html?: string,
): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html != null) e.innerHTML = html;
  return e;
}
