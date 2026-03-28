import React, { lazy, Suspense } from "react"; // import lazy & Suspense
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainSection from "./components/PainSection";
import SolutionDemo from "./components/SolutionDemo";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const OrderForm = lazy(() => import("./components/OrderForm"));

// Komponen untuk menampung Landing Page asli
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

// 3. Bungkus Routes dengan Suspense
export default function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
          <div className="animate-pulse font-bold tracking-widest uppercase text-sm">
            Loading Emoon Store...
          </div>
        </div>
      }
    >
      <Routes>
        {/* Halaman Utama / Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Halaman Form Order */}
        <Route path="/OrderForm" element={<OrderForm />} />
      </Routes>
    </Suspense>
  );
}
