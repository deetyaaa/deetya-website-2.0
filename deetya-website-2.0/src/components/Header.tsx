import React from "react";
import { motion } from "framer-motion";
import TypeWriter from "typewriter-effect";
// import { Github, Linkedin, Mail } from "lucide-react";
import "../parent.css";
import "./styles/Header.css";


const Header = () => {
    return (
       
        <body className="main-container primary-color">
            <header className="container header active" id="home">
                <div className="header-content">
                    <div className="left-header">
                        <div className="h-shape"></div>
                        {/* <div className="image">
                    <img src={kirbyImage}
                    alt="kirby"/>
                </div> */}
                    </div>
                    <div className="content">
                        <h1 className="name">
                            Hi, I'm{'\u00A0'}
                            <span className="accent-color">Deetya.</span>
                        </h1>

                        <div className="typewriter">
                        I'm a{'\u00A0'}
                            <span className="typewriter accent-color">
                                
                                <TypeWriter
                                    options={{
                                        strings: [
                                            "front-end enthusiast.",
                                            "software developer.",
                                            "",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                    }}
                                ></TypeWriter>
                            </span>
                        </div>

                        {/* <div className="btn-con">
                            <a
                                href="Sunny Patel - Resume.pdf"
                                className="main-btn"
                            >
                                <span className="btn-text">Download Resume</span>
                                <span className="btn-icon">
                                    <i className="fas fa-download"></i>
                                </span>
                            </a>
                        </div> */}
                    </div>
                </div>
            </header>
        </body>
    );
};

export default Header;
