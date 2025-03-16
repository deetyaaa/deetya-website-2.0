import React from "react";
import Header from "./Header";
import About from "./About";

import "../parent.css";


const Home = () => {
    return (
        <div>
            <Header />
            {/* About section appears below Header */}
            <section className="pb-40 bg-dark">
                <About />
            </section>
        </div>
    );
};

export default Home;