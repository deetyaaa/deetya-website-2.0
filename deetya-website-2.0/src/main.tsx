import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import Education from "./components/Education.tsx";
import Experience from "./components/Experience.tsx";
import SlideTabContainer from "./components/Navigation.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <SlideTabContainer />
        <Header />
        <About />
        <Education />
        <Experience />
    </StrictMode>
);
