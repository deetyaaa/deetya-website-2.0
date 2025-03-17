import React, { useEffect, useState } from "react";
import TypeWriter from "typewriter-effect";
import "../parent.css";
import { motion } from "framer-motion";
import { del } from "framer-motion/client";
// import "./styles/Header.css";

const Header = () => {
    const [showTypewriter, setShowTypewriter] = useState(false);
    const [delay, setDelay] = useState<number>(0.9); // Initial value
    const delayTime = 1500;
    const delayTime2 = 0.9;
    const [hasAnimated, setHasAnimated] = useState<boolean>(false); // Initial value

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTypewriter(true); // Make TypeWriter visible after delay
        }, delayTime);

        // Cleanup timeout on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="bg-dark flex items-center justify-center h-screen bg-primary text-center px-6">
            <header className="container">
                <div className="flex flex-col justify-center items-center h-screen text-center">
                    {/* Responsive Name Text */}
                    <motion.h1
                        whileHover={hasAnimated ? { scale: 1.08 } : undefined}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ x: 0 }}
                        transition={{
                            delay: delay,
                            type: "spring",
                            stiffness: 300,
                            ease: "circIn",
                        }}
                        onAnimationComplete={() => setHasAnimated(true)}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight primary-color"
                    >
                        Hi, I'm{"\u00A0"}
                        <span className="accent-color">Deetya.</span>
                    </motion.h1>

                    {/* Typewriter Section */}
                    {showTypewriter && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ x: 0 }}
                            transition={{
                                // delay: delay,
                                type: "spring",
                                stiffness: 200,
                                ease: "circIn",
                            }}
                            onAnimationComplete={() => setDelay(0)}
                            className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight w-full flex justify-center primary-color"
                        >
                            I'm a{"\u00A0"}
                            <span className="font-bold text-purple-600">
                                <TypeWriter
                                    options={{
                                        strings: [
                                            "front-end enthusiast.",
                                            "software developer.",
                                            "book connoisseur.",
                                            // "self-proclaimed poet.",
                                            "404 philosopher.",
                                            "yarn-hoarder.",
                                            "dark-mode advocate.",
                                            "",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                        wrapperClassName: "accent-color",
                                        cursorClassName: "accent-color",
                                    }}
                                />
                            </span>
                        </motion.div>
                    )}
                </div>
            </header>
        </section>
    );
};

export default Header;
