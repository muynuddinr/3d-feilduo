import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Pest from "./Pest-control";

export default function PestPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

        <Pest />

      <Footer />
    </div>
  );
}