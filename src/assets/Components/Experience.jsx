export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer & UI/UX Designer",
      company: "Freelance & Personal Projects",
      duration: "Present",
      description:
        "Building modern, responsive web applications using React.js and Tailwind CSS. Designing user-friendly interfaces in Figma, including earning a Gold Medal in UI/UX Design.",
      skills: ["React.js", "Tailwind CSS", "Figma", "UI/UX"],
    },
    {
      id: 2,
      role: "Digital Marketing & Content Creator",
      company: "Professional Experience",
      duration: "1.5+ Years",
      description:
        "Managed content creation, Search Engine Optimization (SEO), and utilized analytics tools to drive digital engagement and grow online presence.",
      skills: ["Content Creation", "SEO", "Analytics", "Digital Strategy"],
    },
    {
      id: 3,
      role: "Software Engineering Trainee",
      company: "Continuous Learning",
      duration: "Recent",
      description:
        "Actively participating in technical community seminars (like Khmer Coders Gathering) and advancing skills in application development, Python, and GitHub version control.",
      skills: ["Python", "Git/GitHub", "Problem Solving"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm">
            My Journey
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Experience</span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Red line decoration on the left */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-red-500 to-orange-400 rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-lg text-red-600 font-medium mt-1">{exp.company}</p>
                </div>
                
                {/* Duration Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-gray-600 text-sm font-semibold whitespace-nowrap self-start">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {exp.duration}
                </div>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                {exp.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium group-hover:border-red-200 group-hover:text-red-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}