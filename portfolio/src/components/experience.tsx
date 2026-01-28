const experiences = [
  {
    role: 'Product Design Intern',
    company: 'Aurora Labs',
    timeframe: '2023 · Remote',
    detail:
      'Led the handoff between research and engineering teams by documenting states, accessibility needs, and animation guidance.',
  },
  {
    role: 'Frontend Fellow',
    company: 'Studio Brushstroke',
    timeframe: '2022 · Hybrid',
    detail:
      'Crafted responsive marketing components that shipped across six international campaigns while keeping bundle sizes light.',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-4 pb-20 pt-12 sm:pt-16"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Experience
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-text)]">
            Impactful contributions, regardless of title.
          </h2>
          <p className="text-[var(--color-muted)]">
            A mix of freelance and collaborative projects where clarity, strategy,
            and execution mattered the most.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((entry) => (
            <article
              key={entry.role}
              className="rounded-3xl border border-white/5 bg-[var(--color-card)]/80 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <div className="flex flex-col gap-1">
                <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  {entry.timeframe}
                </span>
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  {entry.role}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  {entry.company}
                </p>
                <p className="mt-3 text-[var(--color-text)]">{entry.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
