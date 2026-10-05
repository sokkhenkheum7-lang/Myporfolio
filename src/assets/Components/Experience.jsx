import React from "react";
import { Briefcase, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer & UX/UI Designer",
      company: "Freelance & Interactive Projects",
      duration: "Present",
      status: "Active",
      description:
        "Architecting modern, responsive web applications using React.js and Tailwind CSS. Crafting end-to-end user journeys, high-fidelity prototypes, and component systems in Figma.",
      highlights: [
        "Earned Gold Medal recognition in UX/UI Design competition",
        "Developed full-featured, mobile-responsive web platforms",
        "Implemented seamless component libraries and micro-interactions",
      ],
      skills: ["React.js", "Tailwind CSS", "Figma", "UI/UX Systems", "JavaScript"],
    },
    {
      id: 2,
      role: "Digital Marketing & Content Creator",
      company: "Professional Industry Experience",
      duration: "1.5+ Years",
      status: "Completed",
      description:
        "Managed multimedia digital campaigns, brand storytelling, and data-driven Search Engine Optimization (SEO) strategies to scale online engagement and customer acquisition.",
      highlights: [
        "Executed SEO strategies that increased organic visibility",
        "Produced multimedia and digital narrative content",
        "Leveraged web analytics to optimize user conversion funnels",
      ],
      skills: ["Content Creation", "SEO Strategy", "Analytics", "Brand Storytelling"],
    },
    {
      id: 3,
      role: "Video editor",
      company: "Freelance & Professional Projects",
      duration: "2+ Years",
      status: "Ongoing",
      description:
        "Crafted compelling video content for social media, marketing campaigns, and brand storytelling. Utilized advanced editing techniques to enhance visual narratives and audience engagement.",
      highlights: [
        "Produced high-quality video content for diverse clients",
        "Implemented advanced editing techniques to enhance storytelling",
        "Optimized video content for social media platforms and campaigns",
      ],
      skills: ["Video Editing", "CapCut Pro", "Final Cut Pro", "Motion Graphics","Canva"],
    },
    {
      id: 4,
      role: "Full Stack Development & Technical Community Engagement",
      company: "Case Study & Developer Community Projects",
      duration: "Ongoing",
      status: "Learning",
      description:
        "Contributed to open-source and collaborative developer projects, implementing backend APIs, database integrations, and algorithmic solutions while adhering to best practices in version control and agile workflows.",
      highlights: [
        "Developed RESTful APIs and integrated database solutions",
        "Contributed to open-source projects and developer communities",
        "Implemented agile workflows and version control best practices",
      ],
      skills: ["Node.js", "Express.js", "MongoDB", "Git & GitHub", "RESTful APIs"],
    },
  ];

  // Animation variants for scroll reveals
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="relative py-28 bg-slate-50/50 overflow-hidden">
      {/* Background Ambience & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm shadow-xs">
            My Professional Journey
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed">
            A chronological timeline of my hands-on experience in software development, user interface design, and digital strategy.
          </p>
        </motion.div>

        {/* Connected Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-[11px] sm:before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-blue-600 before:via-indigo-300 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUpVariant}
            >
              {/* Stepper Node Icon */}
              <div className="absolute -left-[30px] sm:-left-[39px] top-6 w-8 h-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 z-10">
                <Briefcase className="w-3.5 h-3.5 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Card Container */}
              <div className="relative p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                        {exp.role}
                      </h3>
                      {index === 0 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-base font-semibold text-blue-600 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-600 text-xs font-semibold whitespace-nowrap self-start">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {exp.duration}
                  </div>
                </div>

                {/* Role Description */}
                <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements / Highlights */}
                <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-100">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-medium hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}