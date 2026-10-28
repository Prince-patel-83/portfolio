import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="bg-[var(--bg)]">

      {/* Main Footer */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row lg:px-10">

        <div className="text-center md:text-left">

          <a
            href="#home"
            className="text-2xl font-bold text-[var(--text)]"
          >
            Prince
            <span className="text-[var(--accent)]">.</span>
          </a>

          <p className="mt-1 text-sm text-[var(--muted)]">
            Full Stack Web Developer
          </p>

        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FaGithub />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FaLinkedin />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-[var(--border)] px-5 py-5 text-center">

        <p className="text-xs text-[var(--muted)] sm:text-sm">
          © {new Date().getFullYear()} Prince Patel.
          All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
