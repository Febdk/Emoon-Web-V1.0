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
        <section id="home"><Hero /></section>
        <section id="fitur"><PainSection /></section>
        <SolutionDemo />
        <Features />
        <section id="harga"><Pricing /></section>
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
        {/* Rute Halaman Utama */}
        <Route path="/" element={<Home />} />

        {/* Rute Form Order */}
        <Route path="/OrderForm" element={<OrderForm />} />

        {/* Rute Privacy Policy Baru */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Suspense>
  );
}