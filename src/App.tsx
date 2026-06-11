import CTASection from './components/CTASection'
import FAQSection from './components/FAQSection'
import FeatureGrid from './components/FeatureGrid'
import FeesSection from './components/FeesSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import MetricsSection from './components/MetricsSection'
import Navbar from './components/Navbar'
import SecuritySection from './components/SecuritySection'
import Testimonials from './components/Testimonials'
import TrustSection from './components/TrustSection'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <FeesSection />
        <HowItWorks />
        <FeatureGrid />
        <SecuritySection />
        <MetricsSection />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
