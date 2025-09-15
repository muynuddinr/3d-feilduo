import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Electrical from "./Electrical";

export default function ElectricalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

        <Electrical />

      <Footer />
    </div>
  );
}