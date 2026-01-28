const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Storybook'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express', 'REST', 'GraphQL'],
  },
  {
    category: 'Tools & Delivery',
    items: ['Git', 'Playwright', 'Figma', 'VS Code', 'npm'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="px-4 pb-20 pt-12 sm:pt-16"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Core capabilities
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-text)]">
            A balanced toolkit for shipping quality experiences.
          </h2>
          <p className="text-[var(--color-muted)]">
            Each category mixes creative direction with production rigor so the
            work stands up to real users and strict timelines.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="space-y-4 rounded-3xl border border-white/5 bg-[var(--color-card)]/80 p-5 shadow shadow-[rgba(0,0,0,0.5)]"
            >
              <h3 className="text-lg font-semibold tracking-wide text-[var(--color-text)]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
