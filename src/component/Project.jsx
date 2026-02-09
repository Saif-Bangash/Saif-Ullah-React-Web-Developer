import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="bg-white dark:bg-[#0a0118] transition-colors duration-500">
      {/* Featured Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto py-20 md:py-40 px-6 space-y-24 md:space-y-32"
      >
        {/* Section Title */}
        <div className="text-center lg:text-left mb-10">
          <h4 className="text-[#5C4DFF] font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
            My Work
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Recent{" "}
            <span className="font-serif italic text-gray-400">Projects</span>
          </h2>
        </div>

        {/* Project 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Left: Image Container */}
          <div className="relative group w-full lg:flex-1">
            <div className="absolute -inset-4 bg-[#5C4DFF]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gray-100 dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl">
              {/* Image placeholder - Aap apni image src yahan add karein */}
              <div className="h-64 md:h-80 lg:h-96 bg-gray-800 flex items-center justify-center text-gray-500 overflow-hidden">
                <img
                  src="https://www.webcomforts.com/mtill-uploads/files/smoknic-vape-web-design-190.webp"
                  alt="Project Thumbnail"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right: Content Container */}
          <div className="w-full lg:flex-1 space-y-4 text-center lg:text-left">
            <span className="text-[#5C4DFF] dark:text-purple-400 text-xs font-bold uppercase tracking-widest">
              Featured Project
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white font-serif">
              Smoknic Ltd
            </h3>

            {/* Description Card - Overlapping only on Large Screens */}
            <div
              className="p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-white/10 relative z-10 
              bg-white dark:bg-white/5 backdrop-blur-xl shadow-lg
              lg:-ml-20   transition-all duration-300"
            >
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Smoknic, a growing name in the vape industry, required a stylish
                and functional website to effectively present their product
                lineup, spotlight deals, and provide a smooth online shopping
                experience.
              </p>

              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                We built a clean, mobile-optimized platform with eye-catching
                visuals, user-friendly navigation, and sales-driven design —
                aimed at boosting brand credibility, engaging customers, and
                increasing conversions.
              </p>
            </div>
 
            {/* Tech Stack used in Project */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4 text-xs font-mono text-gray-500 dark:text-gray-400">
              <span>React</span>
              <span>Framer Motion</span>
              <span>Tailwind CSS</span>
            </div>

            {/* Project Link Section - NEW */}
            <div className="pt-6 flex justify-center lg:justify-start">
              <a
                href="https://www.smoknic.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-900 dark:text-white font-semibold text-sm hover:text-[#5C4DFF] dark:hover:text-purple-400 transition-colors"
              >
                <span>View Live Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
