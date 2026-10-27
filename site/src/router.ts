import { getUnlocked } from "./gate";
import { TASKS } from "./config";
import { renderHome } from "./pages/home";
import { renderTask1 } from "./pages/task1";
import { renderTask2 } from "./pages/task2";
import { renderTask3 } from "./pages/task3";

const taskPages: Record<number, () => HTMLElement> = {
  1: renderTask1,
  2: renderTask2,
  3: renderTask3,
};

export function navigate(path: string): void {
  location.hash = path;
}

function resolve(): HTMLElement {
  const m = location.hash.match(/^#\/task\/(\d+)$/);
  if (m) {
    const n = parseInt(m[1], 10);
    const page = taskPages[n];
    if (page && TASKS.some((t) => t.n === n)) {
      // Locked? Send them back to the hub.
      if (n > getUnlocked()) {
        navigate("/");
        return renderHome();
      }
      return page();
    }
  }
  return renderHome();
}

export function startRouter(root: HTMLElement): void {
  const draw = (): void => {
    root.replaceChildren(resolve());
    window.scrollTo(0, 0);
  };
  window.addEventListener("hashchange", draw);
  draw();
}
