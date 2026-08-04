import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Experience",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-2 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-semibold text-gray-900">
          My Portfolio.
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-red-600 transition duration-300 font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="hidden md:block bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
        >
          Resume
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 hover:text-red-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}

            <a
              href="/resume.pdf"
              className="mt-4 text-center bg-red-600 text-white py-3 rounded-full"
            >
              Resume
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}