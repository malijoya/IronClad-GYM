import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import Programs from './components/Programs'
import FacilityGallery from './components/FacilityGallery'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import CTABand from './components/CTABand'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-bg text-chalk font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsStrip />
      <Programs />
      <FacilityGallery />
      <Pricing />
      <Testimonial />
      <CTABand />
      <Footer />
    </div>
  )
}

export default App