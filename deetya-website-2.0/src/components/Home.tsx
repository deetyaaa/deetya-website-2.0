// import React from "react";
import Header from "./Header";
import About from "./About";

import Starfield from "./Starfield";
import "../parent.css";

const Home = () => {
    return (
        <div>
            

            <div>
                <Header />
                {/* About section appears below Header */}
                <section className="pb-40 bg-dark">
                    <About />
                </section>
                <Starfield />
            </div>
        </div>
    );
};

export default Home;
