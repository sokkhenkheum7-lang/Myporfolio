import React from "react";
import { Code2, Palette, GraduationCap, Laptop, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const cards = [
    {
      icon: <Code2 size={26} />,
      title: "Full Stack Development",
      description:
        "Architecting seamless, end-to-end web applications from intuitive React interfaces to scalable backend APIs and databases, built for speed and clean maintainability.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      hover: "hover:border-blue-400 hover:shadow-blue-500/10",
    },
    {
      icon: <Palette size={26} />,
      title: "UX/UI Design",
      description:
        "Designing clean, modern, and user-friendly interfaces with Figma while focusing on great user experiences and intuitive human-centered layouts.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      hover: "hover:border-purple-400 hover:shadow-purple-500/10",
    },
    {
      icon: <GraduationCap size={26} />,
      title: "Education",
      description:
        "Senior Computer Science student at Western University with specialized training at Instinct Institute and Above & Beyond School. Bridging theory with practical expertise.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      hover: "hover:border-indigo-400 hover:shadow-indigo-500/10",
    },
    {
      icon: <Laptop size={26} />,
      title: "Continuous Learning",
      description:
        "Currently expanding my knowledge in React.js, Tailwind CSS, backend development, and modern AI-integrated web technologies.",
      color: "text-teal-600",
      bg: "bg-teal-50",
      hover: "hover:border-teal-400 hover:shadow-teal-500/10",
    },
  ];

  // Animation configuration for scroll reveals
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/40 via-purple-50/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-100/40 via-blue-50/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-14">
        
        {/* Heading Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Changed to once: false
          variants={fadeUpVariant}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            About Modern Web Building
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
            Passionate About Full Stack Development, UI/UX Design &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Modern Websites
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            I am a dedicated developer and designer with a strong passion for creating responsive, user-friendly digital products. My expertise lies in combining clean code with intuitive design to deliver seamless web experiences. I am committed to continuous learning to bring innovative solutions to life.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          
          {/* Left Column: Bio & Stats */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Changed to once: false
            variants={staggerContainer}
            className="flex flex-col h-full justify-center"
          >
            <motion.h3 variants={fadeUpVariant} className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Who Am I?
            </motion.h3>

            <motion.p variants={fadeUpVariant} className="mt-6 text-slate-600 leading-relaxed text-lg">
              I am a student at Western University, currently in my 4th year studying Computer Science. I have a profound passion for web development and design, constantly seeking opportunities to enhance my skills. My focus is on crafting modern, highly responsive websites that provide exceptional user experiences.
            </motion.p>

            <motion.p variants={fadeUpVariant} className="mt-4 text-slate-600 leading-relaxed text-lg">
              I enjoy solving real-world problems through clean architecture, thoughtful design systems, and continuous adaptation. My goal is to become a professional Full Stack Developer while contributing to meaningful, high-impact projects.
            </motion.p>

            {/* Stats Grid */}
            <motion.div variants={fadeUpVariant} className="grid grid-cols-2 gap-5 mt-10">
              <div className="group rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <h4 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:scale-105 transition-transform origin-left">
                  6+
                </h4>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 mt-2">
                  Projects Completed
                </p>
              </div>

              <div className="group rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300">
                <h4 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:scale-105 transition-transform origin-left">
                  7+
                </h4>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 mt-2">
                  Technologies Learned
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Bento Cards */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }} // Changed to once: false
            variants={staggerContainer}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className={`group flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 ${card.hover}`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-inner`}>
                    {card.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}