import { el } from "../dom";

/** Wraps a game page with a back link and a title. */
export function gameShell(title: string, body: HTMLElement | string): HTMLElement {
  const page = el("div", "wrap");
  const back = el("a", "back", "&larr; Back to the mainframe");
  back.href = "#/";
  page.append(back, el("h1", undefined, title));
  page.append(typeof body === "string" ? el("div", undefined, body) : body);
  return page;
}
