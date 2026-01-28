const projects = [
  {
    title: 'Aurora Design System',
    description:
      'A theme-aware UI kit that keeps every component consistent with the brand palette and accessibility needs.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/',
    tech: ['React', 'Tailwind', 'Radix UI'],
  },
  {
    title: 'Focus Study Tracker',
    description:
      'A lightweight productivity tool that charts attention spans and provides calm notifications to reset focus.',
    image:
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/',
    tech: ['Vite', 'TypeScript', 'Playwright'],
  },
  {
    title: 'Perspective Gallery',
    description:
      'An immersive storytelling site that blends curated photography, subtle motion, and responsive grids.',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="px-4 pb-20 pt-12 sm:pt-16"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-text)]">
            Projects that balance craft, clarity, and sustainability.
          </h2>
          <p className="text-[var(--color-muted)]">
            Every build has a reason: performance, accessibility, and joyful
            interaction.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-3xl border border-white/5 bg-[var(--color-card)]/80 p-5 transition hover:-translate-y-1 hover:border-[var(--color-accent)]"
            >
              <div className="mb-4 h-40 w-full overflow-hidden rounded-2xl bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
