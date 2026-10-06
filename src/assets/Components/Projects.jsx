import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Task Management",
      description:
        "A modern and responsive task management application built with React.js and Tailwind CSS.",
      image: "/take.jpg",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      github: "#",
      live: "https://todolist-update-olive.vercel.app/",
      type: "code",
    },
    {
      title: "Apple Clone",
      description:
        "A sleek and modern Apple website clone built with React.js and Tailwind CSS, featuring responsive design and smooth animations.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBI-DSHhctZ9Jx-uR_MSXz2AsvEuFuoNs12MJmfE4EYKeUjTAelVN-5xQ&s=10",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      github: "#",
      live: "https://apple-kheum-sokkhen.vercel.app/",
      type: "code",
    },
    {
      title: "Zando E-Commerce",
      description:
        "An e-commerce website inspired by Zando featuring responsive layouts, product listings, filtering, and a modern shopping experience.",
      image: "https://bongsrey.sgp1.digitaloceanspaces.com/library/937/images/LogoZandoblack.jpg",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      github: "#",
      live: "https://zando-clone-nextgenit.vercel.app/",
      type: "code",
    },
    {
      title: "Skin Care Figma Design",
      description:
        "A modern Figma UI/UX design for a skin care brand, featuring a clean and minimalist interface with a strong focus on user experience.",
      image: "/skincare.jpg",
      tech: ["Figma", "UI/UX Design"],
      figma: "https://www.figma.com/design/aPmmDvkFzXE2U0cAoJN5n5/flutter?node-id=0-1&p=f&t=bHNIQhP1FrrPfS7M-0",
      type: "figma",
    },
    {
      title: "StepUpShoesApp",
      description:
        "A modern Figma UI/UX design for a shoe brand, featuring a clean and minimalist interface with a strong focus on user experience.",
      image: "https://i.pinimg.com/736x/b4/40/48/b440485de58817f4a6827f86a4c79a96.jpg",
      tech: ["Figma", "UI/UX Design"],
      figma: "https://www.figma.com/design/pAjLyr2emDK7VIuaxTEbrz/StepUpShoesApp?node-id=0-1&t=sUpywxYsSmpQsAha-1",
      type: "figma",
    },
    {
      title: "Elévance Web Design",
      description:
        "A moder n Figma UI/UX design for a luxury brand, featuring a clean and minimalist interface with a strong focus on user experience.",
      image: "/Sign Up.png",
      tech: ["Figma", "UI/UX Design"],
      figma: "https://www.figma.com/design/q46tRk4thBUcXCP2U1YfLw/El%C3%A9vance-Web?node-id=2370-4138&t=C3Nw6joOT2Z5RYyo-1",
      type: "figma",
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
    <section id="projects" className="relative py-20 bg-slate-50 overflow-hidden">
      
      {/* Subtle Ambient Background */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 pt-10">

        {/* Section Header */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100/80 text-blue-700 font-semibold text-xs sm:text-sm backdrop-blur-sm">
            My Projects Experience
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Featured Projects in Frontend <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              Development & UI/UX Design
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-500 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed px-2">
            Explore a selection of my recent projects, showcasing my skills in frontend development and UI/UX design. Each project highlights my ability to create modern, responsive, and user-friendly web applications.
          </p>
        </motion.div>

        {/* Projects Grid: Forced to 2 columns on mobile, 3 on desktop */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mt-10 sm:mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              className="flex flex-col bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/60 transition-all duration-300 group hover:-translate-y-1.5"
            >
              {/* Project Image - height shrinks on mobile to fit 2 cols */}
              <div className="overflow-hidden relative w-full h-32 sm:h-48 md:h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-grow p-4 sm:p-6 md:p-8">
                
                {/* Titles shrink and truncate on small screens */}
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-2 md:mt-4 leading-relaxed text-[11px] sm:text-sm line-clamp-2 md:line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 md:mt-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-200/80 text-[9px] sm:text-xs font-semibold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons - Stack vertically on mobile, row on tablet/desktop */}
                <div className="flex flex-col xl:flex-row gap-2 sm:gap-4 mt-auto pt-4 md:pt-8">
                  {project.type === "figma" ? (
                    // Figma Project
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-gray-900 text-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-800 transition-colors text-xs sm:text-sm font-medium shadow-md"
                    >
                      View Figma ↗
                    </a>
                  ) : (
                    // Coding Projects
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full xl:flex-1 text-center bg-gray-900 text-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-800 transition-colors text-xs sm:text-sm font-medium shadow-md"
                      >
                        Code
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full xl:flex-1 text-center border-2 border-blue-100 bg-blue-50 text-blue-600 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-xs sm:text-sm font-medium shadow-sm"
                      >
                        Demo ↗
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}