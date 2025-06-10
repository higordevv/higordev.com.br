import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/tailwind.css";
import {
  MainSection,
  NavBarSection,
  AboutMeSection,
  ProjectsSection,
  ContactSection,
  FooterSection,
} from "./components";

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
    <section>
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </section>
    <footer>
      <FooterSection />
    </footer>
  </StrictMode>
);
