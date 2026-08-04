const skills = [
  "🐍 Python",
  "🌐 HTML",
  "🎨 CSS",
  "🟨 JavaScript",
  "⚛️ React.js",
  "💨 Tailwind CSS",
  "🎯 Figma",
];

export default function TechSlider() {
  return (
    <section className="w-full py-10 bg-slate-50 relative overflow-hidden flex items-center">
      {/* Left Fade Gradient */}
      <div className="absolute top-0 left-0 h-full w-24 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="mx-4 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm px-6 py-3 text-base md:text-lg font-medium text-gray-700 hover:text-red-600 hover:border-red-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default whitespace-nowrap"
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Right Fade Gradient */}
      <div className="absolute top-0 right-0 h-full w-24 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}