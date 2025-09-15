import Navbar from './Components/Navbar'
import Home from './Components/Home'
import WhyChooseFielduo from './Components/WhyChooseFielduo'
import CompetitorComparison from './Components/CompetitorComparison'
import FAQSection from './Components/FAQSection'
import Footer from './Components/Footer'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <WhyChooseFielduo />
      <CompetitorComparison />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default HomePage