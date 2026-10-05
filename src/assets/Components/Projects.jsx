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
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-30 ">
        
        {/* Section Header */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
            My Projects Experience 
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Featured Projects in Frontend {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              Development <br/> and UI/UX Design
            </span>
          </h2>

          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore a selection of my recent projects, showcasing my skills in frontend development and UI/UX design. Each project highlights my ability to create modern, responsive, and user-friendly web applications.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div 
          className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 mt-6"
            >
              {/* Project Image */}
              <div className="overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-slate-100 text-gray-700 border border-gray-200 text-xs font-semibold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                  {project.type === "figma" ? (
                    // Figma Project
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-gray-900 text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors text-sm font-medium shadow-md"
                    >
                      View Figma Design ↗
                    </a>
                  ) : (
                    // Coding Projects
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-gray-900 text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors text-sm font-medium shadow-md"
                      >
                        Code Repository
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border-2 border-red-100 bg-red-50 text-red-600 px-4 py-3 rounded-xl hover:bg-red-600 hover:text-white hover:border-red-600 transition-all text-sm font-medium shadow-sm"
                      >
                        Live Demo ↗
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