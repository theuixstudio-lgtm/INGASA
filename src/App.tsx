import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Differences } from './components/Differences'
import { Services } from './components/Services'
import { VisionMission } from './components/VisionMission'
import { ContactCTA } from './components/ContactCTA'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <Stats />
        <About />
        <Differences />
        <Services />
        <VisionMission />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
