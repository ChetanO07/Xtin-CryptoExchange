import { ChevronDown } from 'lucide-react'
import { useReveal } from '../hooks'
import { SectionHeading, revealStyle } from './ui'

const faqs = [
  {
    question: 'Is XtinTrade a crypto exchange?',
    answer: 'No. It is a crypto escrow marketplace. Participants agree to direct trades while the platform protects fiat settlement and verifies the blockchain transfer.',
  },
  {
    question: 'Who holds the crypto during the trade?',
    answer: 'The seller sends crypto directly from their wallet to the buyer wallet. XtinTrade does not need pooled exchange custody to coordinate settlement.',
  },
  {
    question: 'When is fiat released to the seller?',
    answer: 'Fiat is released after the platform verifies that the expected blockchain transaction has reached the required confirmation state.',
  },
]

export default function FAQSection() {
  const [ref, visible] = useReveal<HTMLElement>()

  return (
    <section id="faq" ref={ref} className={`py-16 sm:py-20 ${visible ? 'is-visible' : ''}`} aria-labelledby="faq-heading">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal-item">
            <SectionHeading
              eyebrow="FAQ"
              title="The important trust questions, answered quickly."
              description="Designed to make the difference between escrow marketplace and traditional exchange immediately clear."
              align="left"
            />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="reveal-item group rounded-lg border border-white/10 bg-white/[0.035] p-5 open:border-emerald/30" style={revealStyle(index * 90)}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-offwhite">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted transition duration-300 group-open:rotate-180 group-open:text-emerald" aria-hidden="true" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
