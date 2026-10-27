import "./styles/base.css";
import "./styles/task3.css";
import "./gate";
import { startRouter } from "./router";

const root = document.getElementById("app");
if (!root) throw new Error("#app not found");
startRouter(root);
