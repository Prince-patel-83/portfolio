import { FaArrowAltCircleDown, FaArrowRight, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg)] pt-20"
    >

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-[100px]" />

        <div className="absolute bottom-[5%] right-[-5%] h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      </div>

      {/* Hero Container */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* Content */}
        <div>

          <p className="mb-4 font-mono text-xl font-semibold tracking-wider text-[var(--accent)] sm:text-base">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl">
            Prince
            <span className="text-[var(--accent)]"> Patel.</span>
          </h1>

          <h2 className="mt-5 text-xl font-bold text-[var(--muted)] sm:text-2xl lg:text-3xl">
            {personalInfo.role}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I build modern, responsive , scalable and high-performance 
            web applications using the MERN stack.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:opacity-90"
            >
              View Projects
              <FaArrowRight />

            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-[var(--border)] px-6 py-3 font-semibold text-[var(--text)] transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-3">

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FaGithub size={18} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FaLinkedinIn size={17} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FaEnvelope size={17} />
            </a>

          </div>

        </div>

        {/* Profile Image */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">

          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-[var(--accent)]/20 blur-[100px]" />

          {/* Image */}
          <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">

            <img
              src="/profile.jpg"
              alt="Prince Patel"
              className="h-full w-full rounded-2xl object-cover"
            />

          </div>

        </div>

      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--muted)] transition hover:text-[var(--accent)] sm:flex"
      >
        <span>Scroll Down</span>
        <FaArrowAltCircleDown className="text-3xl"/>

      </a>

    </section>
  );
}

export default Hero;
