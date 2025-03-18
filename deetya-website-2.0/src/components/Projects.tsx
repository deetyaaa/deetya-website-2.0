import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Starfield from "./Starfield";
// import Starfield from "react-starfield";
import kirbyImage from "../assets/img/kirby.jpg";

import brickbreaker from "../assets/breakout.gif";
import minesweeper from "../assets/img/minesweeper.png";
import weather from "../assets/img/weather.png";

import spectrogram from "../assets/img/spectrogram.png";
import vertex11 from "../assets/img/vertex11.png";
import results from "../assets/img/results.png";
import sigai from "../assets/sigai.gif";

import "../parent.css";
import "./styles/Projects.css";

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const projects = [
        {
            title: "Course Review System",
            frameworks: "<Java, SQLite>",
            description:
                "A longer description of Project 1. This project explores various aspects of web development, including front-end frameworks, back-end APIs, and best practices for UI/UX design.",
            date: "December 2024",
            image: kirbyImage,
        },
        {
            title: "Club Website - SIGAI",
            frameworks: "<Typescript, Firebase, Framer Motion>",
            description:
                "A longer description of Project 1. https://mlatuva.org/ This project explores various aspects of web development, including front-end frameworks, back-end APIs, and best practices for UI/UX design.",
            date: "August 2023 - December 2024",
            image: sigai,
        },
        {
            title: "Automated Risk Management Questionnaires - Vertex11",
            frameworks: "<NLP, Python, NLTK, HuggingFace>",
            description:
                "A longer description of Project 1. This project explores various aspects of web development, including front-end frameworks, back-end APIs, and best practices for UI/UX design.",
            date: "June-August 2022",
            image: vertex11,
        },
        {
            title: "Automatic Music Transcriber",
            frameworks: "<Python>",
            description:
                "A longer description of Project 1. This project explores various aspects of web development, including front-end frameworks, back-end APIs, and best practices for UI/UX design.",
            date: "August 2022 - May 2023",
            image: spectrogram,
        },
        {
            title: "Music Genre Predictor",
            frameworks: "<ML, Python, TensorFlow, APIs>",
            description:
                "A longer description of Project 1. This project explores various aspects of web development, including front-end frameworks, back-end APIs, and best practices for UI/UX design.",
            date: "April-May 2023",
            image: results,
        },
        {
            title: "Weather App",
            frameworks: "<React Native, APIs>",
            description:
                "This project involves machine learning and artificial intelligence applications. It includes data preprocessing, model training, and fine-tuning for optimal performance.",
            date: "March 2022",
            image: weather,
        },
        {
            title: "Minesweeper",
            frameworks: "<Java>",
            description:
                "A creative project involving game development, animation, and interactive storytelling. Built using a combination of Unity and JavaScript for dynamic effects.",
            date: "April 2021",
            image: minesweeper,
        },
        {
            title: "Brickbreaker",
            frameworks: "<Java>",
            description:
                "A creative project involving game development, animation, and interactive storytelling. Built using a combination of Unity and JavaScript for dynamic effects.",
            date: "May 2020",
            image: brickbreaker,
        },
    ];

    return (
        <div className="bg-dark text-white relative">
            {/* Title Section */}
            <section className="h-screen bg-cover bg-center darker-translucent flex flex-col items-center justify-center text-center px-6 relative z-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl sm:text-6xl md:text-9xl font-extrabold accent-color"
                >
                    Projects.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 text-xl sm:text-2xl text-white/80 pt-3"
                >
                    Check out what I've done so far!
                </motion.p>
            </section>

            {/* Timeline Section */}
            <section className="py-20 px-6 bg-primary relative z-10">
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <Starfield />
                </div>

                <div className="max-w-7xl mx-auto relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-white/40"></div>

                    <div className="space-y-32 relative">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                                className={`relative flex flex-col sm:flex-row w-full max-w-6xl mx-auto ${
                                    index % 2 === 0
                                        ? "justify-start"
                                        : "justify-end"
                                }`}
                            >
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-secondary rounded-full border-4 border-white z-10"></div>

                                <motion.div
                                    className="relative flex flex-col sm:flex-row w-[100%] sm:w-[80%] bg-black/40 backdrop-blur-md rounded-xl shadow-lg px-6 py-12 hover:bg-purple-600/5 hover:scale-105 transition transform group"
                                    whileHover={{
                                        scale: 1.05,
                                        borderColor: "#9333ea",
                                    }}
                                >
                                    {/* Clickable Image */}
                                    <div className="w-full sm:w-1/2 px-5 mb-4 sm:mb-0">
                                        <div
                                            className="border-4 border-transparent rounded-lg transition-all duration-300 group-hover:border-purple-500 project-image cursor-pointer"
                                            onClick={() =>
                                                setSelectedImage(project.image)
                                            }
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-96 object-contain rounded-lg shadow-lg"
                                            />
                                        </div>
                                    </div>

                                    {/* Project Details */}
                                    <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between">
                                        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                                            {project.title}
                                        </h3>
                                        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold pt-4 accent-color">
                                            {project.frameworks}
                                        </h4>
                                        <span className="mt-2 text-md sm:text-lg md:text-xl text-gray-400 block">
                                            {project.date}
                                        </span>
                                        <p className="mt-4 text-md sm:text-lg md:text-2xl text-gray-300">{project.description}</p>
                                    </div>
                                </motion.div>

                                {/* <div className="w-full mt-4 sm:mt-0">
                                    <p className="mt-4 text-2xl text-gray-300">
                                        {project.description}
                                    </p>
                                </div> */}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            src={selectedImage}
                            alt="Enlarged Project"
                            className="max-w-full max-h-[80vh] sm:max-w-3xl sm:max-h-[80vh] lg:max-w-5xl lg:max-h-[90vh] xl:max-w-6xl xl:max-h-[95vh] rounded-lg shadow-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
