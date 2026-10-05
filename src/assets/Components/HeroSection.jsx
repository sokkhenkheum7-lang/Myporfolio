import React from "react";
import { ArrowRight, Download, Sparkles, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const TECH_PILLS = [
  { name: "React.js", color: "bg-blue-50 text-blue-600 border-blue-100" },
  { name: "JavaScript", color: "bg-yellow-50 text-yellow-600 border-yellow-100" },
  { name: "Tailwind CSS", color: "bg-teal-50 text-teal-600 border-teal-100" },
  { name: "Next.js", color: "bg-slate-50 text-slate-700 border-slate-200" },
  { name: "Node.js", color: "bg-green-50 text-green-600 border-green-100" },
  { name: "Express.js", color: "bg-slate-50 text-slate-600 border-slate-200" },
  { name: "MongoDB", color: "bg-green-50 text-green-600 border-green-100" },
  { name: "Figma", color: "bg-purple-50 text-purple-600 border-purple-100" },
  { name: "TypeScript", color: "bg-blue-50 text-blue-600 border-blue-100" },
];

export default function HeroSection() {
  // Animation Variants for staggering the text content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-50/50 px-6 lg:px-14 pt-30 pb-20 border-b border-slate-200/80"
    >
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[580px] h-[480px] bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-4 right-1/4 w-[320px] h-[320px] bg-indigo-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Bio & CTAs */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 leading-[1.12]">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Kheum Sokkhen
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="mt-5 text-xl sm:text-2xl font-bold text-slate-700 tracking-tight">
            Full Stack Developer &amp; UI/UX Designer
          </motion.p>

          <motion.p variants={itemVariants} className="mt-5 text-base text-slate-600 max-w-xl leading-relaxed">
            I specialize in creating seamless web experiences that combine robust backend functionality with pixel-perfect aesthetic appeal. I bring ideas to life through clean code and intuitive, human-centered design.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/resume.pdf"
              download="Kheum_Sokkhen_Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 text-slate-700 font-semibold text-sm shadow-xs hover:shadow-md transition-all duration-300"
            >
              <Download size={16} className="text-current" />
              <span>Resume PDF</span>
            </a>
          </motion.div>

          {/* Tech Stack Pills (Animated Entry) */}
          <motion.div variants={itemVariants} className="mt-12 pt-7 border-t border-slate-200/80 w-full max-w-lg">
            <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-4">
              Core Toolkit
            </p>
            <div className="flex flex-wrap gap-2.5">
              {TECH_PILLS.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border shadow-xs cursor-default hover:-translate-y-0.5 transition-transform duration-200 ${tech.color}`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Animated Hero Portrait */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            {/* Ambient Background Aura */}
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-blue-500/20 via-purple-500/15 to-transparent blur-xl opacity-75 transition duration-500 -z-10" />

            {/* Profile Picture Floating Wrapper */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Interactive Hover Card */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group w-[290px] h-[390px] sm:w-[350px] sm:h-[450px] rounded-[32px] overflow-hidden bg-slate-100 border-4 border-white shadow-2xl shadow-slate-900/10 cursor-pointer"
              >
                {/* Glossy Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out z-20 pointer-events-none" />
                
                <img
                  src="/profile.jpg"
                  alt="Kheum Sokkhen"
                  className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-110 group-hover:saturate-110"
                />
              </motion.div>
            </motion.div>

            {/* Floating Highlight 1: Top Right */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: 0 }}
              animate={{ opacity: 1, x: 0, y: [-4, 4, -4] }}
              transition={{ 
                opacity: { duration: 0.5, delay: 1 },
                x: { duration: 0.5, delay: 1 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } 
              }}
              className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md border border-slate-200/90 px-4 py-3 rounded-2xl shadow-xl shadow-blue-900/5 flex items-center gap-3 z-30 pointer-events-none"
            >
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                <Code2 size={20} />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Role</p>
                <p className="text-xs font-bold text-slate-800">Full Stack Developer</p>
              </div>
            </motion.div>

            {/* Floating Highlight 2: Bottom Left */}
            <motion.div 
              initial={{ opacity: 0, x: -20, y: 0 }}
              animate={{ opacity: 1, x: 0, y: [4, -4, 4] }}
              transition={{ 
                opacity: { duration: 0.5, delay: 1.2 },
                x: { duration: 0.5, delay: 1.2 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 } 
              }}
              className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 px-4 py-3 rounded-2xl shadow-xl shadow-purple-900/5 flex items-center gap-3 z-30 pointer-events-none"
            >
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <Sparkles size={20} />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Focus</p>
                <p className="text-xs font-bold text-slate-800">Clean UI & Code</p>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}