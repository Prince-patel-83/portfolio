import { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiSun, FiMoon, FiDownload } from "react-icons/fi";

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        border-b border-[var(--border)]
        bg-[var(--nav-bg)]
        backdrop-blur-xl
      "
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="
            text-2xl font-extrabold tracking-tight
             hover:text-[var(--primary)] logo
          "
        >
          &lt;Prince <span className="text-[#a056e5]">Patel</span>/&gt;
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex ">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Education", "#education"],
            ["Contact", "#contact"],
          ].map(([name, link]) => (
            <a
              key={name}
              href={link}
              className="
                text-sm font-semibold
                text-[1.2rem]
                text-[var(--text)]
                hover:text-[var(--primary)]
              "
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">

  
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              border border-[var(--border)]
              bg-[var(--card)]
              text-[var(--text)]
              hover:border-[var(--primary)]
              hover:text-[var(--primary)]
              hover:scale-105
            "
          >
            {theme === "light" ? (
              <FiMoon size={18} />
            ) : (
              <FiSun size={18} />
            )}
          </button>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="
              flex items-center gap-2
              rounded-lg
              bg-[var(--primary)]
              px-5 py-2.5
              text-sm font-bold
              text-white
              shadow-md
              hover:bg-[var(--primary-hover)]
              hover:-translate-y-0.5
            "
          >
            <FiDownload size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-lg
            border border-[var(--border)]
            text-[var(--text)]
            md:hidden
          "
          aria-label="Open menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            border-t border-[var(--border)]
            bg-[var(--bg-secondary)]
            px-5 py-5
            md:hidden
          "
        >
          <nav className="flex flex-col gap-4">

            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Education", "#education"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={closeMenu}
                className="
                  rounded-lg px-3 py-2
                  font-semibold
                  text-[var(--text)]
                  hover:bg-[var(--bg)]
                  hover:text-[var(--primary)]
                "
              >
                {name}
              </a>
            ))}

            <div className="mt-3 flex items-center gap-3 border-t border-[var(--border)] pt-4">

              <button
                onClick={toggleTheme}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-[var(--border)]
                  text-[var(--text)]
                "
              >
                {theme === "light" ? (
                  <FiMoon size={18} />
                ) : (
                  <FiSun size={18} />
                )}
              </button>

              <a
                href="/resume.pdf"
                download
                className="
                  flex items-center gap-2
                  rounded-lg
                  bg-[var(--primary)]
                  px-4 py-2.5
                  font-semibold
                  text-white
                "
              >
                <FiDownload size={16} />
                Resume
              </a>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;