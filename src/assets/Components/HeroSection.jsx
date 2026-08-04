import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 px-6"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 font-medium">
                        Hello, I'm
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
                        Kheum <span className="text-red-600">Sokhen</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-600 mt-4">
                        Frontend Developer Internship
                    </h2>

                    <p className="text-gray-500 mt-6 leading-8">
                        I build modern, responsive, and user-friendly web applications
                        using React.js, Tailwind CSS, and Figma to create beautiful digital
                        experiences.
                    </p>

                    <div className="flex gap-4 mt-8">
                        {/* View Projects Link */}
                        <a
                            href="#projects"
                            className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
                        >
                            View Projects
                            <ArrowRight size={17} />
                        </a>

                        {/* Resume Download Link */}
                        <a
                            href="/resume.pdf"
                            download="Resume.pdf"
                            className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition"
                        >
                            <Download size={18} />
                            Resume
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex justify-center">
                    <div className="w-[360px] h-[460px] rounded-[32px] overflow-hidden shadow-2xl border border-gray-200">
                        <img
                            src="/profile.jpg"
                            alt="Kheum Sokhen"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}