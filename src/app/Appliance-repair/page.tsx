import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Appliance from './Appliance-repair'

export default function AppliancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

        <Appliance />

      <Footer />
    </div>
  )
}