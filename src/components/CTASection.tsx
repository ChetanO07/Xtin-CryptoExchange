import { ShieldCheck, Wallet } from 'lucide-react'
import { useReveal } from '../hooks'
import { CTAButton } from './ui'

export default function CTASection() {
  const [ref, visible] = useReveal<HTMLElement>()

  return (
    <section id="connect" ref={ref} className={`py-18 sm:py-24 ${visible ? 'is-visible' : ''}`} aria-labelledby="cta-heading">
      <div className="section-shell">
        <div className="premium-border surface-card reveal-item rounded-lg px-6 py-12 text-center sm:px-10 sm:py-16">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-emerald">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 id="cta-heading" className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-offwhite sm:text-5xl">
            Start with your wallet. Trade with escrow confidence.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Connect your wallet to begin a direct crypto transaction with verified participants and transparent escrow protection.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href="#connect">
              <Wallet className="h-4 w-4" aria-hidden="true" />
              Connect Wallet
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
