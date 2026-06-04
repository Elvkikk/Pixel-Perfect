import { Footer } from './components/Footer'
import { MarketingIntro } from './components/MarketingIntro'
import { OpenSourceSection } from './components/OpenSourceSection'
import { SiteHeader } from './components/SiteHeader'

function App() {
  return (
    <main className="min-h-screen bg-white text-[#231f20]">
      <SiteHeader />
      <MarketingIntro />
      <OpenSourceSection />
      <Footer />
    </main>
  )
}

export default App
