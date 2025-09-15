import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hvac from "./Hvac";

export default function HvacPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

        <Hvac />

      <Footer />
    </div>
  );
}