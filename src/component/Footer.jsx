import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo & About */}
          <div className="flex flex-col items-start space-y-6">
            <div className="text-3xl font-bold text-gray-800">
              <img
                src="/src/assets/img/logo-svg.svg"
                alt="Logo"
                width={"100%"}
                height={100}
                className="h-15 object-contain"
              />{" "}
            </div>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Specializing in building robust web applications using MongoDB,
              Express, React, and Node.js. Turning complex problems into
              elegant, scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Resume", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-500 hover:text-purple-600 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6">
              Social Connect
            </h4>
            <div className="flex gap-4">
              {[
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/in/saifullahbangash/",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/Saif-Bangash/",
                },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © 2026{" "}
            <span className="text-gray-600 font-medium">Saif Portfolio</span>.
            All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-purple-600 transition-colors text-sm font-bold uppercase tracking-widest"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-purple-600 transition-all">
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
