import React from "react";
import { motion } from "framer-motion";

const ResumeSection = () => {
  const education = [
    {
      year: "2019 - 2023",
      title: "BSCS – Bachelor of Computer Science",
      desc: "Completed a Bachelor's degree in Computer Science with a focus on programming, databases, and web development.",
    },
    {
      year: "2017 - 2019",
      title: "F.A.C – Faculty of Science",
      desc: "Completed intermediate education with a science background, building a strong foundation in analytical and problem-solving skills.",
    },
  ];

  const experience = [
    {
      year: "2023 - Present",
      title: "MERN Stack Developer",
      desc: "Working on full-stack MERN projects including REST APIs, authentication, dashboards, and responsive user interfaces.",
    },
    {
      year: "2025 - Present",
      title: "Freelance MERN Stack Developer",
      desc: "Developed full-stack web applications for clients using MongoDB, Express, React, and Node.js.",
    },
  ];

  return (
    <section
      id="resume"
      className="py-20 lg:py-32 bg-white dark:bg-[#0a0118] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header - Responsive text sizes */}
        <div className="mb-12 md:mb-20 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 dark:text-gray-400 font-medium mb-2 text-base md:text-lg italic"
          >
            My professional journey
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            My{" "}
            <span className="text-[#5C4DFF] dark:text-purple-400 font-serif">
              CV Resume
            </span>
          </h2>
        </div>

        {/* Main Grid - Mobile stack (1 col), Tablet+ (2 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Education & Experience Columns Wrapper */}
          {[
            { title: "Education", data: education },
            { title: "Experience", data: experience },
          ].map((column, colIdx) => (
            <div key={colIdx}>
              <h3 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12 text-gray-800 dark:text-gray-100 flex items-center gap-4">
                {column.title}
                <div className="flex-1 h-[1px] bg-gray-100 dark:bg-white/10 hidden sm:block"></div>
              </h3>

              {/* Timeline Container */}
              <div className="relative border-l-2 border-gray-100 dark:border-white/10 ml-2 md:ml-4 space-y-10 md:space-y-12">
                {column.data.map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-white dark:border-[#0a0118] shadow-md transition-colors duration-300 ${
                        index === 0
                          ? "bg-[#5C4DFF]"
                          : "bg-gray-300 dark:bg-gray-700"
                      }`}
                    ></div>

                    {/* Year Tag */}
                    <div
                      className={`inline-block px-4 py-1 rounded-md text-xs md:text-sm font-bold mb-4 transition-all duration-300 ${
                        index === 0
                          ? "bg-[#5C4DFF] text-white shadow-lg shadow-purple-200 dark:shadow-none"
                          : "bg-white dark:bg-white/5 text-[#5C4DFF] dark:text-purple-300 border border-purple-100 dark:border-white/10"
                      }`}
                    >
                      {item.year}
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] dark:shadow-none border border-gray-50 dark:border-white/10 hover:border-[#5C4DFF]/30 transition-all"
                    >
                      <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 md:mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
