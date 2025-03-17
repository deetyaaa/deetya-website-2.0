import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Router, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import Header from "./Header.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";

import "../parent.css";
import "./styles/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [delay, setDelay] = useState<number>(0.75); // Initial value

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", link: "/" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "purple-translucent backdrop-blur-lg shadow-md py-4"
                    : "bg-transparent py-8"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ x: 0 }}
                        transition={{
                            // delay: delay,
                            type: "spring",
                            stiffness: 100,
                            ease: "circIn",
                        }}
                        className=" font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent logo"
                    >
                        Deetya Adhikari
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="nav-links hidden">
                        {navItems.map(({ name, link }) => (
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ x: 0 }}
                                transition={{
                                    delay: delay,
                                    type: "spring",
                                    stiffness: 300,
                                    ease: "circIn",
                                }}
                                onAnimationComplete={() => setDelay(0)}
                            >
                                <Link
                                    key={name}
                                    to={link}
                                    className="text-2xl font-semibold primary-color hover:text-purple-600 transition duration-200 links"
                                >
                                    {name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="nav-menu-btn block">
                        <motion.button
                            whileHover={{ scale: 1.3 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-3 rounded-md primary-color hover:text-purple-600 transition duration-200"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mobile-menu hidden"
                >
                    <div className="px-8 py-6 space-y-6">
                        {navItems.map(({ name, link }) => (
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ x: 0 }}
                                transition={{
                                    delay: delay,
                                    type: "spring",
                                    stiffness: 300,
                                    ease: "circIn",
                                }}
                                onAnimationComplete={() => setDelay(0)}
                            >
                                <Link
                                    key={name}
                                    to={link}
                                    className="block text-xl font-semibold primary-color hover:text-purple-600 transition duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
