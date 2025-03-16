import React from "react";
import { motion } from "framer-motion";
// import { Github, Linkedin, Mail } from "lucide-react";
// import '../parent.css';
// import './css/header.css';
import "../parent.css";
import "./styles/Projects.css";

const Projects = () => {
    return (
        <section>
            <ul className="info">
                <li className="elem">Coffee</li>
                <li className="elem">Tea</li>
                <li className="elem">Milk</li>
            </ul>
        </section>
    );
};

export default Projects;
