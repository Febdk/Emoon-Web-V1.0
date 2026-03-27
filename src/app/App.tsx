import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainSection from "./components/PainSection";
import SolutionDemo from "./components/SolutionDemo";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import OrderForm from "./components/OrderForm"; // Pastikan import ini ada

// 1. Komponen Home untuk menampung semua section Landing Page
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <SolutionDemo />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

// 2. App Component sebagai pengatur rute (Routing)
export default function App() {
  return (
    <Routes>
      {/* Halaman Utama / Landing Page */}
      <Route path="/" element={<Home />} />

      {/* Halaman Form Order */}
      <Route path="/OrderForm" element={<OrderForm />} />
    </Routes>
  );
}
