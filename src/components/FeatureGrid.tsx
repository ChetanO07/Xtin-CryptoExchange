import type { LucideIcon } from 'lucide-react'
import { Activity, Clock, Link2, Lock } from 'lucide-react'
import { useReveal } from '../hooks'
import { IconBadge, SectionHeading, revealStyle } from './ui'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
  tone?: 'emerald' | 'gold'
}

const features: Feature[] = [
  {
    icon: Link2,
    title: 'Non-Custodial Trading',
    description: 'Crypto travels directly between participants, keeping wallet ownership clear throughout the transaction.',
  },
  {
    icon: Lock,
    title: 'Secure Fiat Escrow',
    description: 'Fiat is held and released only when the expected on-chain transfer meets verification rules.',
  },
  {
    icon: Clock,
    title: 'Fast Settlement',
    description: 'Structured status checks reduce uncertainty from order acceptance through final release.',
    tone: 'gold',
  },
  {
    icon: Activity,
    title: 'Real-Time Status Tracking',
    description: 'Both parties see the same order state, confirmation status, and settlement progress.',
  },
]

export default function FeatureGrid() {
  const [ref, visible] = useReveal<HTMLElement>()

  return (
    <section ref={ref} className={`py-16 sm:py-20 ${visible ? 'is-visible' : ''}`} aria-labelledby="features-heading">
      <div className="section-shell">
        <div className="reveal-item">
          <SectionHeading
            eyebrow="Product advantages"
            title="All the trust layer you need, none of the exchange complexity."
            description="The platform is designed for direct deals where both sides want clarity, protection, and a premium transaction experience."
            align="left"
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {features.map((feature, index) => (
            <article key={feature.title} className="reveal-item surface-card rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald/30" style={revealStyle(index * 90)}>
              <div className="flex items-start gap-4">
                <IconBadge icon={feature.icon} tone={feature.tone ?? 'emerald'} />
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-offwhite">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{feature.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
