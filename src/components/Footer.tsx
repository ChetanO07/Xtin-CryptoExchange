import { Lock } from 'lucide-react'

const links = [
  { label: 'Terms', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Security', href: '#security' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="section-shell flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
        <a href="#" className="flex shrink-0 items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-emerald">
            <Lock className="h-4 w-4" aria-hidden="true" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-offwhite">
            Xtin<span className="text-emerald">Trade</span>
          </span>
        </a>

        <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-muted transition duration-300 hover:text-emerald">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-muted">© 2026 XtinTrade. All rights reserved.</p>
      </div>
    </footer>
  )
}
