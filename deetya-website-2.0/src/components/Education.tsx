import React from "react";
import { motion } from "framer-motion";
// import { Github, Linkedin, Mail } from "lucide-react";
import kirbyImage from "../assets/img/kirby.jpg";
// import '../parent.css';
// import './css/header.css';
import "../parent.css";
import "./styles/Education.css";

const Education = () => {
    return (
        <section>
            <ul className="info">
                            <li className="elem">Coffee</li>
                            <li  className="elem">Tea</li>
                            <li  className="elem">Milk</li>
                        </ul>
        </section>
    )
}

export default Education;



// {/* <section className="container" id="portfolio">
//                 <div className="main-title">
//                     <h2>
//                         My <span>Portfolio</span>
//                         <span className="bg-text">My Work</span>
//                     </h2>
//                 </div>
//                 <p className="port-text">
//                     Here is some of my work that I've done in various
//                     programming languages.
//                 </p>
//                 <div className="portfolios">
//                     <div className="portfolio-item">
//                         <div className="image">
//                             {/* <img src="img/port1.PNG" alt=""> */}
//                         </div>
//                         <div className="hover-items">
//                             <h3>KnifeThrow</h3>
//                             <div className="icons">
//                                 <a
//                                     href="https://github.com/sunnypatell/KnifeThrow"
//                                     className="icon"
//                                 >
//                                     <i className="fab fa-github"></i>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="portfolio-item">
//                         <div className="image">
//                             {/* <img src="img/port2.jpg" alt=""> */}
//                         </div>
//                         <div className="hover-items">
//                             <h3>Word Search Game</h3>
//                             <div className="icons">
//                                 <a
//                                     href="https://github.com/sunnypatell/Word-Search-Game"
//                                     className="icon"
//                                 >
//                                     <i className="fab fa-github"></i>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="portfolio-item">
//                         <div className="image">
//                             {/* <img src="img/port3.jpg" alt=""> */}
//                         </div>
//                         <div className="hover-items">
//                             <h3>Chess Game</h3>
//                             <div className="icons">
//                                 <a
//                                     href="https://github.com/sunnypatell/chess-game"
//                                     className="icon"
//                                 >
//                                     <i className="fab fa-github"></i>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="portfolio-item">
//                         <div className="image">
//                             {/* <img src="img/port4.jpg" alt=""> */}
//                         </div>
//                         <div className="hover-items">
//                             <h3>COVID-19 Daily Tracker</h3>
//                             <div className="icons">
//                                 <a
//                                     href="https://github.com/sunnypatell/covid19-cases-daily"
//                                     className="icon"
//                                 >
//                                     <i className="fab fa-github"></i>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="portfolio-item">
//                         <div className="image">
//                             {/* <img src="img/port5.jpg" alt=""> */}
//                         </div>
//                         <div className="hover-items">
//                             <h3>Youtube Video Downloader</h3>
//                             <div className="icons">
//                                 <a
//                                     href="https://github.com/sunnypatell/youtube-downloader"
//                                     className="icon"
//                                 >
//                                     <i className="fab fa-github"></i>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="container contact" id="contact">
//                 <div className="contact-container">
//                     <div className="main-title">
//                         <h2>
//                             Contact <span>Me</span>
//                             <span className="bg-text">Contact</span>
//                         </h2>
//                     </div>
//                     <div className="contact-content-con">
//                         <div className="left-contact">
//                             <h4>Contact me here</h4>
//                             <p>
//                                 Have any questions or inquiries? Feel free to
//                                 personally email or call me.
//                             </p>
//                             <div className="contact-info">
//                                 <div className="contact-item">
//                                     <div className="icon">
//                                         <i className="fas fa-map-marker-alt"></i>
//                                         <span>Location: </span>
//                                     </div>
//                                     <p>Toronto, Ontario</p>
//                                 </div>
//                                 <div className="contact-item">
//                                     <div className="icon">
//                                         <i className="fas fa-envelope"></i>
//                                         <span>Email: </span>
//                                     </div>
//                                     <p>
//                                         <span>
//                                             &nbsp sunnypatel124555@gmail.com
//                                         </span>
//                                     </p>
//                                 </div>
//                                 <div className="contact-item">
//                                     <div className="icon">
//                                         <i className="fas fa-phone"></i>
//                                         <span>Phone: </span>
//                                     </div>
//                                     <p>
//                                         <span>+1 (437) 216-1611</span>
//                                     </p>
//                                 </div>

//                                 <div className="contact-icons">
//                                     <div className="icons">
//                                         <a
//                                             href="https://github.com/sunnypatell"
//                                             className="icon"
//                                         >
//                                             <i className="fab fa-github"></i>
//                                         </a>
//                                         <a
//                                             href="https://www.linkedin.com/in/sunny-patel-30b460204/"
//                                             className="icon"
//                                         >
//                                             <i className="fab fa-linkedin"></i>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* <div className="controls">
//                 <div className="control active-btn" data-id="home">
//                     <i className="fas fa-home"></i>
//                 </div>
//                 <div className="control" data-id="about">
//                     <i className="fas fa-user"></i>
//                 </div>
//                 <div className="control" data-id="portfolio">
//                     <i className="fas fa-briefcase"></i>
//                 </div>
//                 <div className="control" data-id="contact">
//                     <i className="fas fa-envelope-open"></i>
//                 </div>
//             </div>
//             <div className="theme-btn">
//                 <i className="fas fa-adjust"></i>
//             </div>
//             <script src="app.js"></script> */} */}