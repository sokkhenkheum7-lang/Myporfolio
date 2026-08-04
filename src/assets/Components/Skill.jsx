export default function Skills() {
  const skillCategories = [
    {
      icon: "💻",
      title: "Frontend Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
      ],
    },
    {
      icon: "🎨",
      title: "UX/UI Design",
      skills: [
        "Figma",
        "Wireframing",
        "Prototyping",
        "Responsive Design",
      ],
    },
    {
      icon: "🐍",
      title: "Programming",
      skills: [
        "Python",
        "JavaScript",
      ],
    },
    {
      icon: "🛠️",
      title: "Tools & Workflow",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Vite",
        "npm",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold">
            My Skills
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            My Technical{" "}
            <span className="text-red-600">Skills</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-8">
            I continuously improve my skills in frontend development,
            UX/UI design, programming, and modern development tools.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-gray-200 p-7 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-red-100 text-2xl group-hover:bg-red-600 transition-all duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-red-100 hover:text-red-600 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Tailwind CSS",
              "Python",
              "Figma",
              "Git",
              "GitHub",
              "Vite",
            ].map((technology) => (
              <span
                key={technology}
                className="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}