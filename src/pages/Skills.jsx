import { skills } from "../data/portfolioData";
import { FaCode, FaLaptopCode, FaDatabase, FaBrain, FaTools } from "react-icons/fa";
import { HiServer } from "react-icons/hi";

function SkillGroup({ Icon, title, items }) {

  return (
    <div className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl">

      <div key={Icon} className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-xl text-[var(--accent)]">
        <Icon />
      </div>

      <h3 className="mb-5 text-lg font-bold text-[var(--text)]">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-b border-[var(--border)] bg-[var(--section-bg)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-12 flex items-start gap-5 sm:mb-16">

         

          <div>
            <p className="mb-3 text-xl font-bold tracking-[0.25em] text-[var(--accent)]">
              MY SKILLS
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
              Technologies I
              <span className="text-[var(--accent)]"> work with.</span>
            </h2>
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <SkillGroup
            Icon = {FaCode}
            title="Languages"
            items={skills.languages}
          />

          <SkillGroup
            Icon ={FaLaptopCode}
            title="Frontend"
            items={skills.frontend}
          />

          <SkillGroup
            Icon ={HiServer}
            title="Backend"
            items={skills.backend}
          />

          <SkillGroup
            Icon ={FaDatabase}
            title="Databases"
            items={skills.databases}
          />

          <SkillGroup
            Icon ={FaBrain}
            title="Core Concepts"
            items={skills.core}
          />

          <SkillGroup
            Icon= {FaTools}
            title="Tools"
            items={skills.tools}
          />

        </div>

      </div>
    </section>
  );
}

export default Skills;