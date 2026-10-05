import { useState, useEffect } from "react";
import { Menu, X, FileDown, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  // Subtle elevation shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-10 pt-4 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 border ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-slate-200/80 shadow-lg shadow-blue-500/10"
            : "bg-white/50 backdrop-blur-md border-slate-200/40 shadow-sm shadow-blue-500/5"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-5 sm:px-6">
          {/* Logo with Gradient Text and accent dot */}
          <a
            href="#home"
            onClick={() => setActiveItem("Home")}
            className="group flex items-center gap-1.5 text-xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Portfolio
            </span>
            <span className="inline-block h-2 w-2 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-150" />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
            {NAV_ITEMS.map(({ label, href }) => {
              const isActive = activeItem === label;
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setActiveItem(label)}
                    className={`relative px-4 py-2 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-blue-700 font-bold bg-blue-50/50"
                        : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-4 right-4 h-[2px] rounded-full bg-blue-600" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA / Resume */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 active:scale-95"
            >
              <FileDown size={16} className="transition-transform group-hover:-translate-y-0.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition active:scale-90"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu with Smooth Collapse */}
        <div
          className={`grid md:hidden transition-all duration-300 ease-in-out border-slate-100 ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 py-4 px-5 border-t"
              : "grid-rows-[0fr] opacity-0 py-0 px-5 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="flex flex-col space-y-1.5">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => {
                      setActiveItem(label);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all ${
                      activeItem === label
                        ? "bg-blue-50/80 text-blue-700 font-bold"
                        : "text-slate-600 font-medium hover:bg-slate-50 hover:text-blue-600"
                    }`}
                  >
                    <span>{label}</span>
                    <ArrowUpRight size={16} className={`transition-opacity ${activeItem === label ? "opacity-100 text-blue-500" : "opacity-0"}`} />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md shadow-blue-500/25 transition active:scale-95"
            >
              <FileDown size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}