import { setupCounter } from "./counter";
import "./style.css";
import typescriptLogo from "./typescript.svg";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) throw new Error("No app element found");

app.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

const counter = document.querySelector<HTMLButtonElement>("#counter");
if (!counter) throw new Error("No counter element found");

setupCounter(counter);
