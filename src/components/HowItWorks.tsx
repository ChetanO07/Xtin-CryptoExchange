import { CheckCircle, Landmark, Users, Wallet } from 'lucide-react'
import { useReveal } from '../hooks'
import { IconBadge, SectionHeading, revealStyle } from './ui'

const steps = [
  {
    step: '01',
    icon: Wallet,
    title: 'Connect your wallet.',
    description: 'Start from your own wallet. XtinTrade coordinates the order without taking custody of your crypto.',
  },
  {
    step: '02',
    icon: Users,
    title: 'Get matched with a buyer or seller.',
    description: 'Verified participants agree on the amount, payment route, and settlement conditions before escrow begins.',
  },
  {
    step: '03',
    icon: Landmark,
    title: 'Escrow verifies and settles securely.',
    description: 'The platform confirms the blockchain transfer, then releases fiat to the seller with an auditable trail.',
  },
]

export default function HowItWorks() {
  const [ref, visible] = useReveal<HTMLElement>()

  return (
    <section id="how-it-works" ref={ref} className={`py-18 sm:py-24 ${visible ? 'is-visible' : ''}`} aria-labelledby="how-heading">
      <div className="section-shell">
        <div className="reveal-item">
          <SectionHeading
            eyebrow="How it works"
            title="Three clear steps from wallet connection to verified settlement."
            description="The experience is intentionally quiet: connect, agree, verify, and settle without an exchange-style trading screen."
          />
        </div>

        <div className="relative mt-12 grid gap-4 lg:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-14 hidden h-px bg-gradient-to-r from-emerald/0 via-emerald/55 to-gold/0 lg:block" />
          {steps.map((item, index) => (
            <article key={item.step} className="reveal-item surface-card relative rounded-lg p-6 lg:min-h-[300px]" style={revealStyle(index * 120)}>
              <div className="flex items-center justify-between">
                <IconBadge icon={item.icon} tone={index === 2 ? 'gold' : 'emerald'} />
                <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs font-semibold text-muted">
                  {item.step}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-offwhite">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
              <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald">
                <CheckCircle className="h-4 w-4" aria-hidden="true" />
                Protected step
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
