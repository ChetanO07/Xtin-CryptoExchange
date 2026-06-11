import { DollarSign, Eye, ShieldCheck } from 'lucide-react'
import { useReveal } from '../hooks'
import { IconBadge, revealStyle } from './ui'

const feePrinciples = [
  {
    icon: DollarSign,
    label: 'One escrow fee',
    detail: 'Shown before either side accepts the order.',
  },
  {
    icon: Eye,
    label: 'No spread markup',
    detail: 'You agree terms peer-to-peer, not through an exchange order book.',
  },
  {
    icon: ShieldCheck,
    label: 'Release protection',
    detail: 'Fiat settlement waits for transaction verification.',
  },
]

export default function FeesSection() {
  const [ref, visible] = useReveal<HTMLElement>()

  return (
    <section id="fees" ref={ref} className={`py-8 sm:py-12 ${visible ? 'is-visible' : ''}`} aria-labelledby="fees-heading">
      <div className="section-shell">
        <div className="premium-border surface-card reveal-item rounded-lg p-5 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Fees</p>
              <h2 id="fees-heading" className="mt-3 text-2xl font-semibold tracking-tight text-offwhite sm:text-3xl">
                Simple escrow pricing, visible before commitment.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
                Buyers and sellers see the protected amount, escrow cost, and settlement status in one clean order summary.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {feePrinciples.map((principle, index) => (
                <div key={principle.label} className="reveal-item rounded-lg border border-white/10 bg-white/[0.035] p-4" style={revealStyle(120 + index * 90)}>
                  <IconBadge icon={principle.icon} tone={index === 0 ? 'gold' : 'emerald'} className="h-10 w-10" />
                  <h3 className="mt-4 text-sm font-semibold text-offwhite">{principle.label}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted">{principle.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
