import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import SolutionDemo from './components/SolutionDemo';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
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
}
