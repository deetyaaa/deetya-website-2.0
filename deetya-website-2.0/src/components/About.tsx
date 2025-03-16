import React from "react";
import { motion } from "framer-motion";
import kirbyImage from "../assets/img/kirby.jpg";
import "../parent.css";
import "./styles/About.css";

const About = () => {
    return (
        <section className="bg-dark text-white px-6 py-16 md:py-24">
            <h1 className="about-title font-extrabold text-center mb-12">
                About me {"\u00A0"} :)
            </h1>

            <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl mx-auto gap-12">
                {/* Image Section - Moves on top when screen gets cramped */}
                <motion.div
                    className="w-full flex justify-center lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={kirbyImage}
                        alt="kirby"
                        className="w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 lg:border-8 border-secondary shadow-lg"
                    />
                </motion.div>

                {/* Info Section */}
                <motion.ul
                    className="w-full lg:w-1/2 flex flex-col space-y-6 text-lg sm:text-xl lg:text-2xl leading-relaxed"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <li className="bg-white/10 p-6 rounded-lg shadow-lg">
                        I'm a software developer with over 5 years of experience in machine learning and cloud technologies.
                    </li>
                    <li className="bg-white/10 p-6 rounded-lg shadow-lg">
                        I enjoy working with AI, full-stack development, and cloud computing.
                    </li>
                    <li className="bg-white/10 p-6 rounded-lg shadow-lg">
                        In my free time, I love drinking tea and playing video games.
                    </li>
                </motion.ul>
            </div>
        </section>
    );
};

export default About;