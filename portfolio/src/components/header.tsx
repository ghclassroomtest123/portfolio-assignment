const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
]

export default function Header() {
  return (
    <header
      data-testid="header-section"
      className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(2,6,23,0.9)] backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#hero"
          className="text-lg font-semibold tracking-widest text-[var(--color-text)] uppercase"
        >
          Portfolio
        </a>

        <nav>
          <ul className="flex items-center gap-5 text-sm text-[var(--color-muted)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition hover:text-[var(--color-text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          Resume
        </a>
      </div>
    </header>
  )
}
