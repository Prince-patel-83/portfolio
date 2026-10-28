import { certifications } from "../data/portfolioData";

function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 border-b border-[var(--border)] bg-[var(--section-bg)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-12 flex items-start gap-5 sm:mb-16">


          <div>
            <p className="mb-3 text-xl font-bold tracking-[0.25em] text-[var(--accent)]">
              ACHIEVEMENTS
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
              Certifications &
              <span className="text-[var(--accent)]">
                {" "}achievements.
              </span>
            </h2>
          </div>

        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {certifications.map((certificate) =>{
            const Icon = certificate.icon;
            return(

            <div
              key={certificate.title}
              className="group flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-lg text-[var(--accent)] transition group-hover:text-2xl] group-hover:text-white">
                <Icon />
              </div>

              <div>
                <h3 className="mb-2 text-base font-bold leading-snug text-[var(--text)]">
                  {certificate.title}
                </h3>

                {certificate.subtitle && (
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {certificate.subtitle}
                  </p>
                )}
              </div>

            </div>

          )})}

        </div>

      </div>
    </section>
  );
}

export default Certifications;