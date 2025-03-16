import React from "react";
import TypeWriter from "typewriter-effect";
import "../parent.css";
import "./styles/Header.css";

const Header = () => {
    return (
        <section className="bg-dark flex items-center justify-center h-screen bg-primary text-center px-6">
            <header className="container">
                <div className="flex flex-col justify-center items-center h-screen text-center">
                    {/* Responsive Name Text */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight primary-color">
                        Hi, I'm{"\u00A0"}
                        <span className="text-accent accent-color">Deetya.</span>
                    </h1>

                    {/* Typewriter Section */}
                    <div className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight w-full flex justify-center primary-color">
                        I'm a{"\u00A0"}
                        <span className="font-bold accent-color">
                            <TypeWriter
                                options={{
                                    strings: [
                                        "front-end enthusiast.",
                                        "software developer.",
                                        "book connoisseur.",
                                        "",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </span>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Header;