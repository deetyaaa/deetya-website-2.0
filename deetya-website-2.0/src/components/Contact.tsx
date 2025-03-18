import { useState } from "react";
// import emailjs from "emailjs-com";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";
import Starfield from "./Starfield";

import "../parent.css";
import "./styles/Contact.css";

const Contact = () => {
    const serviceId = import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.REACT_APP_EMAILJS_USER_ID;
    console.log(serviceId, templateId, userId);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Replace with your own EmailJS service and template IDs
        // emailjs
        //     .send(
        //         import.meta.env.REACT_APP_EMAILJS_SERVICE_ID || "", // Use the environment variable
        //         import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID || "", // Use the environment variable
        //         formData,
        //         import.meta.env.REACT_APP_EMAILJS_USER_ID || "" // Use the environment variable
        //     )
        //     .then(
        //         (response) => {
        //             alert("Message sent successfully!");
        //         },
        //         (error) => {
        //             alert("Failed to send message: " + error.text);
        //         }
        //     );
    };

    return (
      <div className="min-h-screen bg-dark text-white flex items-center justify-center px-6 flex-col">
          <Starfield />

          {/* Contact is work in progress message */}
          <div className="text-3xl mb-8 text-center bg-white/10 p-6 rounded-xl shadow-lg hover:bg-white/15">
              <p>I'm still working on the contact page, so to actually reach me, please email <span className="accent-color font-bold">deetya.adhikari@gmail.com</span> :)</p>
          </div>

          {/* Grid for the contact form and other content */}
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 p-10 bg-[#100f1f] rounded-2xl shadow-lg">
              {/* Contact Form */}
              <div>
                  <p className="text-lg text-gray-400">GET IN TOUCH</p>
                  <h1 className="text-7xl font-bold mt-2">Contact.</h1>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                      {/* Name & Email Row */}
                      <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-1">
                              <label className="text-gray-300 text-2xl py-4 flex items-center gap-2">
                                  <FaUser className="text-purple-500" /> Name
                              </label>
                              <input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  placeholder="Your name"
                                  className="w-full text-xl p-3 mt-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                              />
                          </div>

                          <div className="flex-1">
                              <label className="text-gray-300 py-4 text-2xl flex items-center gap-2">
                                  <FaEnvelope className="text-purple-500" />{" "}
                                  Email
                              </label>
                              <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="Your email"
                                  className="w-full text-xl p-3 mt-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                              />
                          </div>
                      </div>

                      {/* Message Box */}
                      <div>
                          <label className="text-gray-300 text-2xl py-5 flex items-center gap-2">
                              <FaCommentDots className="text-purple-500" />{" "}
                              Message
                          </label>
                          <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Type your message..."
                              className="w-full text-xl p-3 mt-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                          />
                      </div>

                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-2xl transition py-3 rounded-lg font-semibold">
                          Send Message 🚀
                      </button>
                  </form>
              </div>

              {/* 3D Globe Placeholder */}
              <div className="hidden md:flex items-center justify-center">
                  <div className="w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                      <p className="text-white font-bold text-2xl">
                          🌍 3D Model
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Contact;