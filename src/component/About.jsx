import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const details = [
    { label: "Birthday", value: "16-05-2001" },
    { label: "Email", value: "saifbangash480@gmail.com", type: "email" },
    { label: "Age", value: "24" },
    { label: "Phone", value: "+92 332 6767 615" },
    { label: "Address", value: "Pakistan" },
    { label: "Freelance", value: "Available" },
  ];

  return (
    <section
      id="about"
      className="w-full bg-white dark:bg-[#0a0118] py-20 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Image Container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative group px-4 md:px-10 lg:px-0"
        >
          {/* Decorative Background Box */}
          <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 w-full h-full border-2 border-[#5C4DFF]/20 rounded-[2rem] group-hover:top-0 group-hover:left-0 transition-all duration-500"></div>

          <div className="relative z-10 rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-xl">
            <img
              src="/assets/img/about.png"
              alt="About Saifullah"
              className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* Experience Tag Overlay - Responsive Size */}
          <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-[#5C4DFF] p-2 md:p-6 rounded-2xl shadow-2xl z-20">
            <p className="text-white font-bold text-xl md:text-2xl text-center">MERN</p>
            <p className="text-purple-100 text-[10px] md:text-xs uppercase tracking-widest font-medium">
              Stack Expert
            </p>
          </div>
        </motion.div>

        {/* Right Side: Text & Info Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start"
        >
          <div className="space-y-4">
            <h4 className="text-[#5C4DFF] dark:text-purple-400 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
              About Me
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2F4066] dark:text-white leading-tight">
              Crafting Scalable{" "}
              <span className="font-serif italic text-gray-400 dark:text-gray-500">
                Web Solutions
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              I am a dedicated{" "}
              <span className="text-[#5C4DFF] dark:text-purple-300 font-semibold">
                MERN Stack Developer
              </span>
              . While I have 1 year of formal experience, I have spent countless
              hours mastering the art of building full-stack applications.
            </p>
            <div className="w-20 h-1.5 bg-[#5C4DFF] rounded-full mx-auto lg:mx-0"></div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
            {details.map((info, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl transition-all group text-left
                bg-gray-50 border border-gray-100 hover:border-[#5C4DFF]/30 hover:bg-white hover:shadow-lg
                dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10"
              >
                <p className="text-[#5C4DFF] dark:text-purple-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">
                  {info.label}
                </p>
                
                {info.type === "email" ? (
                  <a 
                    href={`mailto:${info.value}`}
                    className="text-[#2F4066] dark:text-gray-200 font-semibold break-all hover:text-[#5C4DFF] transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-[#2F4066] dark:text-gray-200 font-semibold">
                    {info.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;