import { FaArrowRight, FaCode } from "react-icons/fa";
import { CiCircleCheck, CiLocationOn } from "react-icons/ci";
import { personalInfo } from "../data/portfolioData" ;

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-[var(--border)] bg-[var(--bg)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-12 flex items-start gap-5 sm:mb-16">

          <div>
            <p className="mb-3 text-xl font-bold tracking-[0.25em] text-[var(--accent)]">
              ABOUT ME
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
              Building things for
              <span className="text-[var(--accent)]"> the web.</span>
            </h2>
          </div>

        </div>

        {/* About Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Text */}
          <div className="max-w-2xl">

            <p className="mb-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
              {personalInfo.summary}
            </p>

            <p className="mb-8 text-base leading-8 text-[var(--muted)] sm:text-lg">
              I enjoy solving programming problems,
              developing full-stack applications and
              learning new technologies that help me
              create better software.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 font-semibold text-[var(--accent)] transition hover:gap-5"
            >
              Let's work together
              <FaArrowRight />

            </a>

          </div>

           <div className="w-full">

            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl">

              <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">

                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

                  <span className="font-mono text-sm text-[var(--muted)]">
                    prince-patel.js
                  </span>
                </div>
                <FaCode className="fa-solid fa-code text-[var(--muted)] text-xl" />

              
              </div>

              <div className="overflow-x-auto px-5 py-6 font-mono text-xs leading-7 sm:text-sm">

                <p className="whitespace-nowrap">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-[var(--text)]">developer</span> = &#123;
                </p>

                <p className="whitespace-nowrap">
                  &nbsp;&nbsp;Name:{" "}
                  <span className="text-green-400">
                    "Prince Patel"
                  </span>,
                </p>
                <p className="whitespace-nowrap">
                  &nbsp;&nbsp;Email:{" "}
                  <span className="text-green-400">
                    "pp2079058@gmail.com"
                  </span>,
                </p>

                <p className="whitespace-nowrap">
                  &nbsp;&nbsp;role:{" "}
                  <span className="text-green-400">
                    "Full Stack Developer"
                  </span>,
                </p>

                <p>
                  &nbsp;&nbsp;stack: [
                </p>

                <p className="whitespace-nowrap">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-green-400">
                    "MongoDB"
                  </span>
                  ,{" "}
                  <span className="text-green-400">
                    "Express"
                  </span>,
                </p>

                <p className="whitespace-nowrap">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-green-400">
                    "React"
                  </span>
                  ,{" "}
                  <span className="text-green-400 ">
                    "Node.js"
                  </span>
                </p>

                <p>
                  &nbsp;&nbsp;],
                </p>

                <p className="whitespace-nowrap">
                  &nbsp;&nbsp;problemsSolved:{" "}
                  <span className="text-orange-400">
                    200+
                  </span>,
                </p>

                <p className="whitespace-nowrap">
                  &nbsp;&nbsp;status:{" "}
                  <span className="text-green-400">
                    "Learning & Building"
                  </span>
                </p>

                <p>&#125;</p>

              </div>

              {/* Footer */}
              <div className="flex flex-col gap-3 border-t border-[var(--border)] px-5 py-4 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">

                <span className="flex items-center gap-2">
                  <CiLocationOn className="text-[var(--accent)] text-lg" />

                  Bhopal, India
                </span>

                <span className="flex items-center gap-2">
                    <CiCircleCheck className="text-green-500 text-lg"/>

                  Open to work
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;