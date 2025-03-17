import React from "react";
import { motion } from "framer-motion";

import Starfield from "./Starfield";

import kirbyImage from "../assets/img/kirby.jpg";
import codingImage from "../assets/img/coding-img.jpg";
import codeAesthetic from "../assets/img/code.jpg";


import "../parent.css";
import "./styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1.",
      date: "January 2023",
      image: codingImage,
    },
    {
      title: "Project 2",
      description: "Description of Project 2.",
      date: "March 2023",
      image: codeAesthetic,
    },
    {
      title: "Project 3",
      description: "Description of Project 3.",
      date: "July 2023",
      image: kirbyImage,
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-dark text-white">
      {/* <Starfield/> */}
      {/* Title Page Section */}
      <section style={{ backgroundImage: `url(${codeAesthetic})` }} className="h-screen bg-cover bg-no-repeat flex items-center justify-center text-center px-6 projects-title">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white leading-tight"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-white/80"
          >
            Discover the projects I have worked on, each with its unique challenges and solutions.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-primary snap-y snap-mandatory overflow-y-auto h-auto">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="border-l-4 border-secondary absolute left-1/2 transform -translate-x-1/2 h-full"></div>

            {/* Project Timeline Sections */}
            <div className="space-y-24">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className="relative flex items-center justify-start space-x-12 snap-start"
                  style={{ height: "80vh" }} // Make each project take up a full screen
                >
                  {/* Timeline Marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-secondary rounded-full border-4 border-white shadow-lg"></div>

                  {/* Project Info */}
                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} w-full`}
                  >
                    {/* Project Details */}
                    <div className="text-lg md:w-1/2 px-12 md:px-24">
                      <h3 className="text-4xl font-semibold">{project.title}</h3>
                      <p className="mt-6 text-xl">{project.description}</p>
                      <span className="mt-4 text-sm text-gray-400">{project.date}</span>
                    </div>

                    {/* Project Image */}
                    <div className="md:w-1/2 pr-20">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg shadow-lg pl-20"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;