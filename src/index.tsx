import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/tailwind.css";
import { MainSection, NavBarSection } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <header>
      <nav>
        <NavBarSection />
      </nav>
    </header>
    <main>
      <MainSection />
    </main>
    <footer></footer>
  </StrictMode>
);
