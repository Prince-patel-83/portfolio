import {projects} from '../data/portfolioData'
import {  FaCloudSun , FaIdBadge   } from 'react-icons/fa';
import { FaBagShopping ,FaKey ,FaListCheck ,FaCalculator ,FaClock  } from "react-icons/fa6";
import { IoQrCodeSharp } from "react-icons/io5";

function Projects() {
  

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-[var(--border)] bg-[var(--bg)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-12 flex items-start gap-5 sm:mb-16">

          <div>
            <p className="mb-3 text-xl font-bold tracking-[0.25em] text-[var(--accent)]">
              PROJECTS
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
              Things I've
              <span className="text-[var(--accent)]"> built.</span>
            </h2>
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {projects.map((project, index) =>{ 
            const IconComponent = project.icon; 
            return (
            
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-2xl sm:p-7"
            >

             
              <div className="mb-5 flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-lg text-[var(--accent)] transition ] group-hover:text-white">
                  {IconComponent && <IconComponent />}
                </div>

                <div className="min-w-0">  
                  <h3 className="text-lg font-bold leading-snug text-[var(--text)] sm:text-xl">
                    {project.title}
                  </h3>
                </div>

              </div>

              <p className="mb-6 flex-1 text-sm leading-7 text-[var(--muted)] sm:text-base">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">

                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs font-medium text-[var(--muted)]"
                  >
                    {technology}
                  </span>
                ))}

              </div>

              <div className="flex flex-wrap gap-3 border-t border-[var(--border)] pt-5">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <i className="fa-brands fa-github"></i>
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </a>
                )}

              </div>

            </article>

          )})}

        </div>

      </div>
    </section>
  );
}

export default Projects;