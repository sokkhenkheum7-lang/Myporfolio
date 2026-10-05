import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      icon: "C#",
      title: "C#",
      skills: ["C#", "ASP.NET", "Entity Framework"],
    },
    {
      icon: "💻",
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      icon: "🖥️",
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "Django"],
    },
    {
      icon: "🗄️",
      title: "Database Management",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      icon: "🌐",
      title: "API Development",
      skills: ["RESTful APIs", "GraphQL", "Node.js", "Express.js"],
    },
    {
      icon: "🎨",
      title: "UX/UI Design",
      skills: ["Figma", "Wireframing", "Prototyping", "Responsive Design"],
    },
    {
      icon: "🐍",
      title: "Programming",
      skills: ["Python", "JavaScript"],
    },
    {
      icon: "🛠️️",
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Vite", "npm"],
    },
  ];

  // Animation variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section id="skills" className="relative py-24 bg-slate-50/50 overflow-hidden">
      {/* Background Ambience & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-14">
        
        {/* Heading */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
            Skills & Expertise
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            My Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              Skills
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-600 leading-relaxed text-base md:text-lg">
            I have a diverse set of technical skills that enable me to build modern, responsive, and user-friendly web applications. From full Stack development to UX/UI design, I am constantly expanding my knowledge and expertise in the latest web technologies.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              className="group relative flex flex-col justify-between bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/80 p-7 hover:border-blue-400/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div>
                {/* Icon Capsule */}
                <div className="w-13 h-13 flex items-center justify-center rounded-2xl bg-blue-50/80 border border-blue-100 text-xl font-bold text-blue-600 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-inner">
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                  {category.title}
                </h3>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-slate-100/70 border border-slate-200/50 text-slate-700 text-xs font-medium hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies */}
        <motion.div 
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <h3 className="text-2xl font-bold text-slate-900">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap justify-center gap-3.5 mt-8 max-w-4xl mx-auto">
            {[
              "html",
              "css",
              "javascript",
              "react",
              "tailwind",
              "nodejs",
              "express",
              "python",
              "django",
              "mongodb",
              "postgresql",
              "mysql",
              "git",
              "github",
              "figma",
              "csharp",
            ].map((technology) => (
              <span
                key={technology}
                className="px-5 py-2.5 rounded-2xl bg-white border border-slate-200/80 text-slate-700 text-sm font-semibold shadow-xs hover:border-blue-500 hover:text-blue-600 hover:shadow-md hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}