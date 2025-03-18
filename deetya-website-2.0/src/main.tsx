import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Projects from "./components/Projects.tsx";
import Navbar from "./components/Navbar.tsx";
import Contact from "./components/Contact.tsx";
import Home from "./components/Home.tsx";


createRoot(document.getElementById("root") as HTMLElement).render(
    <Router>
            <Navbar /> {/* Ensure Navbar is inside Router */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
);
