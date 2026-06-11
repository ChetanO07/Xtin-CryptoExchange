import { CheckCircle, Landmark, Send, ShieldCheck, Wallet } from 'lucide-react'
import { useReveal } from '../hooks'
import { IconBadge, SectionHeading, revealStyle } from './ui'

const settlementSteps = [
  {
    icon: Landmark,
    title: 'Buyer deposits fiat',
    detail: 'Funds are held inside the escrow process while order terms stay locked.',
  },
  {
    icon: Send,
    title: 'Seller transfers BTC',
    detail: 'Crypto moves from seller wallet directly to the buyer wallet address.',
  },
  {
    icon: CheckCircle,
    title: 'Blockchain confirmation',
    detail: 'The transaction hash and confirmation state are verified before release.',
  },
  {
    icon: Wallet,
    title: 'Escrow releases funds',
    detail: 'Fiat is settled to the seller after the verified crypto delivery.',
  },
]

export default function SecuritySection() {
  const [ref, visible] = useReveal<HTMLElement>()

  return (
    <section id="security" ref={ref} className={`py-18 sm:py-24 ${visible ? 'is-visible' : ''}`} aria-labelledby="security-heading">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal-item">
            <SectionHeading
              eyebrow="Security"
              title="Protection for both sides of a direct crypto trade."
              description="The buyer gains confidence that fiat will not be released prematurely. The seller gains confidence that payment is reserved before sending crypto. Every settlement depends on blockchain evidence."
              align="left"
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Escrow-controlled fiat release', 'Shared transaction visibility', 'No pooled crypto custody', 'Verification before payout'].map((item, index) => (
                <div key={item} className="reveal-item flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-muted-strong" style={revealStyle(120 + index * 80)}>
                  <ShieldCheck className="h-4 w-4 text-emerald" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-item premium-border surface-card rounded-lg p-5 sm:p-7" style={revealStyle(120)}>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Settlement path</p>
                <h3 className="mt-2 text-2xl font-semibold text-offwhite">Verified release sequence</h3>
              </div>
              <span className="rounded-full border border-emerald/20 bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald">
                Live checks
              </span>
            </div>

            <div className="settlement-line relative space-y-4">
              {settlementSteps.map((step, index) => (
                <div key={step.title} className="relative z-10 grid grid-cols-[48px_1fr] gap-4 rounded-lg border border-white/10 bg-bg/55 p-4 backdrop-blur">
                  <IconBadge icon={step.icon} tone={index === 3 ? 'gold' : 'emerald'} className="h-12 w-12" />
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-semibold text-offwhite">{step.title}</h4>
                      <span className="text-xs font-semibold text-muted">0{index + 1}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
