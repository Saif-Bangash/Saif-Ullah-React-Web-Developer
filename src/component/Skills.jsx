import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiExpress,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "group-hover:text-[#47A248]",
    border: "hover:border-[#47A248]",
  },
  {
    name: "Express JS",
    icon: <SiExpress />,
    color: "group-hover:text-black dark:group-hover:text-white",
    border: "hover:border-black",
  },
  {
    name: "React JS",
    icon: <FaReact />,
    color: "group-hover:text-[#61DBFB]",
    border: "hover:border-[#61DBFB]",
  },
  {
    name: "Node JS",
    icon: <FaNodeJs />,
    color: "group-hover:text-[#68A063]",
    border: "hover:border-[#68A063]",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "group-hover:text-[#F7DF1E]",
    border: "hover:border-[#F7DF1E]",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "group-hover:text-[#06B6D4]",
    border: "hover:border-[#06B6D4]",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "group-hover:text-[#E34F26]",
    border: "hover:border-[#E34F26]",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "group-hover:text-[#F05032]",
    border: "hover:border-[#F05032]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills = () => {
  return (
    <section
      id="resume"
      className="w-full bg-white dark:bg-[#0a0118] py-20 lg:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#5C4DFF] dark:text-purple-400 font-bold uppercase tracking-[0.3em] text-xs md:text-sm"
          >
            My Expertise
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#2F4066] dark:text-white leading-tight"
          >
            Technical{" "}
            <span className="font-serif italic text-gray-400 dark:text-gray-500">
              Skillset
            </span>
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            I specialize in the MERN stack and modern frontend tools to create
            high-performance web applications.
          </p>
          <div className="w-20 h-1.5 bg-[#5C4DFF] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid - Responsive Columns and Gaps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`group flex flex-col items-center p-6 md:p-10 bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] transition-all duration-300 shadow-sm hover:shadow-xl hover:bg-white dark:hover:bg-white/10 ${skill.border}`}
            >
              <div
                className={`text-4xl md:text-5xl text-gray-400 dark:text-gray-600 transition-colors duration-300 ${skill.color}`}
              >
                {skill.icon}
              </div>
              <p className="mt-3 md:mt-5 font-bold text-[#2F4066] dark:text-gray-200 text-sm md:text-base tracking-wide transition-colors group-hover:text-black dark:group-hover:text-white">
                {skill.name}
              </p>

              <div className="mt-3 md:mt-4 w-6 md:w-8 h-1 bg-gray-100 dark:bg-white/10 group-hover:bg-[#5C4DFF] transition-all rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra Tools Section - Mobile Friendly Wrapped Layout */}
        <div className="mt-12 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-10 border-t border-gray-100 dark:border-white/10 pt-10">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:text-orange-500 transition-colors cursor-default">
            <SiPostman className="text-lg md:text-xl" /> Postman
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:text-purple-600 transition-colors cursor-default">
            <SiBootstrap className="text-lg md:text-xl" /> Bootstrap
          </div>
          {/* Fixed: Tailwind icon changed to SiTailwindcss */}
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:text-cyan-500 transition-colors cursor-default">
            <SiTailwindcss className="text-lg md:text-xl" /> Tailwind CSS
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
