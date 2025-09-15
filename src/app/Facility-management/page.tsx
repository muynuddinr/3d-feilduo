import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Facility from "./Facility-management";

export default function FacilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

        <Facility />

      <Footer />
    </div>
  );
}