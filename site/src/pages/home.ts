import { el } from "../dom";
import { TASKS, type Task } from "../config";
import { getUnlocked, hashCode, setUnlocked, resetProgress } from "../gate";

export function renderHome(): HTMLElement {
  const page = el("div", "wrap");
  page.append(
    el("h1", undefined, "Retake the Mainframe"),
    el("p", "sub", "A rogue AI has infiltrated our systems. Win each game to take a piece of it back."),
    el(
      "div",
      "miss",
      "<b>Miss AI:</b> Agents, I’m on your side. Every game you solve gives you a code. Enter it to open the next one. Good luck.",
    ),
  );

  const list = el("div");
  page.append(list);

  const draw = (): void => {
    const unlocked = getUnlocked();
    list.replaceChildren(...TASKS.map((t) => card(t, unlocked, draw)));
  };
  draw();

  const reset = el("button", "linkbtn", "Reset my progress");
  reset.onclick = () => {
    resetProgress();
    draw();
  };
  page.append(reset);
  return page;
}

function card(t: Task, unlocked: number, redraw: () => void): HTMLElement {
  const open = t.n <= unlocked;
  const c = el("section", "task" + (open ? "" : " locked"));
  c.append(
    el("span", "badge" + (open ? " open" : ""), open ? "Unlocked" : "Locked"),
    el("h2", undefined, `Game ${t.n}: ${t.title}`),
    el("p", undefined, t.blurb),
  );

  if (open) {
    const a = el("a", "go", `Start game ${t.n}`);
    a.href = `#/task/${t.n}`;
    c.append(a);
  } else if (t.n === unlocked + 1) {
    c.append(el("p", "hint", `Enter the code from Game ${t.n - 1} to unlock this game.`));
    const form = el("form");
    const input = el("input");
    input.placeholder = "Enter code";
    input.autocomplete = "off";
    input.autocapitalize = "off";
    input.spellcheck = false;
    input.setAttribute("aria-label", `Code for game ${t.n}`);
    const btn = el("button", undefined, "Unlock");
    const err = el("div", "err");
    err.setAttribute("role", "alert");
    form.append(input, btn);
    form.onsubmit = async (ev) => {
      ev.preventDefault();
      if ((await hashCode(input.value)) === t.unlock) {
        setUnlocked(t.n);
        redraw();
      } else {
        err.textContent = "That code didn’t work. Check it and try again.";
        input.select();
      }
    };
    c.append(form, err);
  } else {
    c.append(el("p", "hint", "Finish the earlier games first."));
  }
  return c;
}
