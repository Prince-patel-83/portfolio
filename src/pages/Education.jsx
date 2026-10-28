import { education } from "../data/portfolioData";

function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-b border-[var(--border)] bg-[var(--bg)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">

        {/* Heading */}
        <div className="mb-12 flex items-start gap-5 sm:mb-16">

          
          <div>
            <p className="mb-3 text-xl font-bold tracking-[0.25em] text-[var(--accent)]">
              EDUCATION
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
              My academic
              <span className="text-[var(--accent)]"> journey.</span>
            </h2>
          </div>

        </div>

        {/* Timeline */}
        <div className="relative ml-3 border-l border-[var(--border)] pl-8 sm:ml-5 sm:pl-12">

          {education.map((item, index) => (
            <div
              className="relative mb-10 last:mb-0"
              key={item.year}
            >

              {/* Number */}
              <div className="absolute -left-[51px] flex h-8 w-8 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--bg)] text-xs font-bold text-[var(--accent)] sm:-left-[65px]">
                {index + 1}
              </div>

              {/* Content */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition duration-300 hover:border-[var(--accent)]">

                <span className="mb-3 inline-block rounded-full bg-[var(--accent)]/10 px-3 py-1 font-mono text-xs font-semibold text-[var(--accent)]">
                  {item.year}
                </span>

                <h3 className="mb-2 text-lg font-bold text-[var(--text)] sm:text-xl">
                  {item.degree}
                </h3>

                <p className="mb-3 text-sm text-[var(--muted)] sm:text-base">
                  {item.institute}
                </p>

                <strong className="text-sm text-[var(--accent)]">
                  {item.result}
                </strong>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;