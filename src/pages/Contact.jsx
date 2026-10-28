import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import { IoLocation } from "react-icons/io5";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-b border-[var(--border)] bg-[var(--section-bg)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-12 flex items-start gap-5 sm:mb-16">

          <div>
            <p className="mb-3 text-xl font-bold tracking-[0.25em] text-[var(--accent)]">
              CONTACT
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
              Let's build
              <span className="text-[var(--accent)]">
                {" "}something.
              </span>
            </h2>
          </div>

        </div>

        {/* Contact Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Contact Information */}
          <div>

            <p className="max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Have a project, internship opportunity,
              or just want to connect? Feel free to
              reach out.
            </p>

            <div className="mt-8 space-y-4">

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition hover:border-[var(--accent)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <FaEnvelope/>
                </div>

                <div className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Email
                  </span>

                  <strong className="block truncate text-sm text-[var(--text)] sm:text-base">
                    {personalInfo.email}
                  </strong>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition hover:border-[var(--accent)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <FaPhoneAlt/>
                </div>

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Phone
                  </span>

                  <strong className="block text-sm text-[var(--text)] sm:text-base">
                    {personalInfo.phone}
                  </strong>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <IoLocation className="text-xl"/>
                </div>

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Location
                  </span>

                  <strong className="block text-sm text-[var(--text)] sm:text-base">
                    {personalInfo.location}
                  </strong>
                </div>
              </div>

            </div>

            {/* Socials */}
            <div className="mt-7 flex gap-3">

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaGithub/>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaLinkedin/> 
              </a>

            </div>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8"
          >

            <div className="mb-5">

              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-[var(--text)]"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              />

            </div>

            <div className="mb-5">

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[var(--text)]"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              />

            </div>

            <div className="mb-6">

              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-[var(--text)]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
                className="w-full resize-y rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              ></textarea>

            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Send Message
              <i className="fa-solid fa-paper-plane"></i>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;