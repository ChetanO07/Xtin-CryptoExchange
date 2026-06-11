import { CheckCircle, Link2, Receipt, ShieldCheck } from 'lucide-react'
import { useReveal } from '../hooks'
import { IconBadge, SectionHeading, revealStyle } from './ui'

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Escrow Protected',
    description: 'Fiat is held by the platform until the matching crypto transfer is verified on-chain.',
  },
  {
    icon: Link2,
    title: 'Wallet-to-Wallet Transfers',
    description: 'Crypto moves directly from seller wallet to buyer wallet, without pooled exchange custody.',
  },
  {
    icon: Receipt,
    title: 'Transparent Fees',
    description: 'Clear escrow pricing, visible trade terms, and no hidden exchange spread at checkout.',
  },
  {
    icon: CheckCircle,
    title: 'Blockchain Verification',
    description: 'Every release is tied to observable network confirmation and transaction status.',
  },
]

export default function TrustSection() {
  const [ref, visible] = useReveal<HTMLElement>()

  return (
    <section ref={ref} className={`py-16 sm:py-20 ${visible ? 'is-visible' : ''}`} aria-labelledby="trust-heading">
      <div className="section-shell">
        <div className="reveal-item">
          <SectionHeading
            eyebrow="Trust architecture"
            title="Built for people who want safety without giving up direct ownership."
            description="XtinTrade sits between buyer and seller only where trust is needed: fiat escrow, verification, and settlement control."
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <article key={item.title} className="reveal-item surface-card rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald/30" style={revealStyle(index * 90)}>
              <IconBadge icon={item.icon} tone={index === 2 ? 'gold' : 'emerald'} />
              <h3 className="mt-5 text-lg font-semibold text-offwhite">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
