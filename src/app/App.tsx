import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainSection from "./components/PainSection";
import SolutionDemo from "./components/SolutionDemo";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

const OrderForm = lazy(() => import("./components/OrderForm"));

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* id="home" di sini karena Hero tidak punya id internalnya sendiri */}
        <section id="home">
          <Hero />
        </section>

        {/* PainSection tidak punya link di navbar, tidak perlu id wrapper */}
        <PainSection />

        {/* SolutionDemo sudah punya id="galery" di dalamnya */}
        <SolutionDemo />

        {/* Features sudah punya id="fitur" di dalamnya — tidak perlu wrapper */}
        <Features />

        {/* Pricing sudah punya id="harga" di dalamnya — tidak perlu wrapper */}
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

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
        <Route path="/" element={<Home />} />
        <Route path="/OrderForm" element={<OrderForm />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Suspense>
  );
}