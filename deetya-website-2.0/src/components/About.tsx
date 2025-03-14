import React from "react";
import { motion } from "framer-motion";
// import { Github, Linkedin, Mail } from "lucide-react";
import kirbyImage from "../assets/img/kirby.jpg";

import "../parent.css";
import "./styles/About.css";

const About = () => {
    return (
        <body className="main-content primary-color">
            <section className="container about" id="about">
                <div className="main-title">
                    <h1 className="header">Overview.</h1>
                    <div className="info-container">
                        <div className="image accent-color">
                            <img src={kirbyImage} alt="kirby" />
                        </div>
                        <ul className="info">
                            <li className="elem">I'm a software developer with over 5 years of experience in machine learning and cloud technologies.</li>
                            <li  className="elem">Tea</li>
                            <li  className="elem">Milk</li>
                        </ul>
                    </div>
                </div>
            </section>
        </body>
    );
};

export default About;
