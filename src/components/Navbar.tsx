import { useCallback, useEffect, useState } from 'react'
import { Lock, Menu, Wallet, X } from 'lucide-react'

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Security', href: '#security' },
  { label: 'Fees', href: '#fees' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-bg/88 shadow-2xl shadow-black/25 backdrop-blur-xl'
          : 'border-b border-transparent bg-bg/25 backdrop-blur-sm'
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <a href="#" className="group flex shrink-0 items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-emerald/25 bg-emerald/10 text-emerald transition duration-300 group-hover:bg-emerald group-hover:text-emerald-ink">
            <Lock className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-offwhite">
            Xtin<span className="text-emerald">Trade</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition duration-300 hover:bg-white/[0.06] hover:text-offwhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#connect"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-emerald px-5 text-sm font-semibold text-emerald-ink shadow-[0_18px_45px_rgba(16,185,129,0.2)] transition duration-300 hover:bg-emerald-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:inline-flex"
          >
            <Wallet className="h-4 w-4" aria-hidden="true" />
            Connect Wallet
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-offwhite transition duration-300 hover:border-emerald/40 hover:text-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald lg:hidden"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden border-white/10 bg-bg/96 backdrop-blur-xl transition-all duration-300 lg:hidden ${open ? 'max-h-96 border-y' : 'max-h-0 border-y-0'}`}>
        <div className="section-shell space-y-2 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-muted transition duration-300 hover:bg-white/[0.05] hover:text-offwhite"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={close}
            className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald px-5 text-sm font-semibold text-emerald-ink"
          >
            <Wallet className="h-4 w-4" aria-hidden="true" />
            Connect Wallet
          </a>
        </div>
      </div>
    </header>
  )
}
