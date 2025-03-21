import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import kirbyImage from "../assets/img/kirby.jpg";
import "../parent.css";
import "./styles/About.css";

const About = () => {
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { once: true, margin: "-300px" });

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setTimeout(() => setHasAnimated(true), 1500); // Wait for initial animation to complete
        }
    }, [isInView, hasAnimated]);

    return (
        <section
            ref={aboutRef}
            className="bg-dark text-white px-6 py-16 md:py-24"
        >
            {/* text-xl sm:text-2xl md:text-3xl lg:text-4xl */}
            <h1 className="about-title text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12">
                Overview.
            </h1>

            <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl mx-auto gap-12">
                {/* Image Section */}
                <motion.div
                    className="w-full flex justify-center lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <motion.img
                        whileHover={{ scale: 1.05, borderColor: "#a451f0" }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            ease: "circIn",
                        }}
                        src={kirbyImage}
                        alt="kirby"
                        className="w-60 h-60 sm:w-70 sm:h-70 lg:w-80 lg:h-80 rounded-full border-4 lg:border-8 border-secondary shadow-lg about-image"
                    />
                </motion.div>

                {/* Info Section */}
                <ul className="w-full lg:w-1/2 flex flex-col space-y-6 text-md sm:text-lg lg:text-xl leading-relaxed">
                    {[
                        <>
                            I'm a{" "}
                            <span className="accent-color font-bold text-purple-500">
                                software developer
                            </span>{" "}
                            with over 5 years of experience in{" "}
                            <span className="accent-color font-bold text-purple-500">
                                machine learning
                            </span>{" "}
                            and cloud technologies.
                        </>,
                        <>
                            I enjoy working with AI, full-stack development, and
                            cloud computing.
                        </>,
                        <>
                            In my free time, I love drinking tea and playing
                            video games.
                        </>,
                    ].map((text, index) => (
                        <motion.li
                            key={index}
                            className="bg-white/10 p-6 rounded-xl shadow-lg hover:bg-white/15 about-elem"
                            initial={
                                hasAnimated
                                    ? { scale: 0 }
                                    : { opacity: 0, y: 60 }
                            }
                            animate={
                                hasAnimated
                                    ? { scale: 1 }
                                    : { opacity: 1, y: 0 }
                            }
                            transition={{
                                duration: hasAnimated ? 0.5 : 0.9,
                                delay: hasAnimated ? 0 : index * 0.4,
                                type: hasAnimated ? "spring" : "tween",
                                stiffness: hasAnimated ? 150 : undefined,
                                ease: hasAnimated ? "circIn" : "easeOut",
                            }}
                            whileHover={{
                                scale: hasAnimated ? 1.05 : 1.05,
                                borderColor: "#9333ea",
                            }}
                            // tmr: make a case for when the screen size is small (mobile) so the animation isnt too fat
                        >
                            {text}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default About;
