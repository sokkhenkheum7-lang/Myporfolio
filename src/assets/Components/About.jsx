import { Code2, Palette, GraduationCap, Laptop } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Code2 size={32} />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive web applications using React.js, JavaScript, HTML, CSS, and Tailwind CSS.",
    },
    {
      icon: <Palette size={32} />,
      title: "UX/UI Design",
      description:
        "Designing clean, modern, and user-friendly interfaces with Figma while focusing on great user experiences.",
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Education",
      description:
        "4th-year Information Technology student at Western University, continuously improving my technical and design skills.",
    },
    {
      icon: <Laptop size={32} />,
      title: "Learning",
      description:
        "Currently expanding my knowledge in React.js, Tailwind CSS, backend development, and modern web technologies.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold">
            About Me
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Passionate About Building
            <span className="text-red-600"> Modern Websites</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            I'm <strong>Kheum Sokkhen</strong>, a passionate Frontend Developer
            and UX/UI Designer who enjoys turning ideas into responsive,
            user-friendly, and visually appealing web applications. I enjoy
            learning new technologies and continuously improving my skills to
            create high-quality digital experiences.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
             Who I Am?
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              I am currently studying Information Technology at Western
              University. My interests include frontend development, UX/UI
              design, and creating responsive websites with modern technologies.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              I enjoy solving real-world problems through clean code, thoughtful
              design, and continuous learning. My goal is to become a
              professional Frontend Developer while contributing to meaningful
              projects.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="rounded-2xl bg-gray-100 p-6">
                <h4 className="text-3xl font-bold text-red-600">10+</h4>
                <p className="text-gray-600 mt-2">
                  Projects Completed
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-6">
                <h4 className="text-3xl font-bold text-red-600">7+</h4>
                <p className="text-gray-600 mt-2">
                  Technologies Learned
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  {card.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {card.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}