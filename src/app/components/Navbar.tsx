import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/cb512b6998e6dcdac75c0af596d6f883a0f246e1.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Emoon Logo" className="h-8 md:h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#3D3B8E] transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3D3B8E] group-hover:w-full transition-all"></span>
            </button>
            <button 
              onClick={() => scrollToSection('fitur')}
              className="text-gray-700 hover:text-[#3D3B8E] transition-colors relative group"
            >
              Fitur
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3D3B8E] group-hover:w-full transition-all"></span>
            </button>
            <button 
              onClick={() => scrollToSection('harga')}
              className="text-gray-700 hover:text-[#3D3B8E] transition-colors relative group"
            >
              Harga
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3D3B8E] group-hover:w-full transition-all"></span>
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="text-gray-700 hover:text-[#3D3B8E] transition-colors relative group"
            >
              Demo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3D3B8E] group-hover:w-full transition-all"></span>
            </button>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6285291619898?text=Halo%20Emoon,%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFC700] hover:to-[#FF8C00] text-[#3D3B8E] rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Konsultasi WA
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('fitur')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Fitur
            </button>
            <button 
              onClick={() => scrollToSection('harga')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Harga
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Demo
            </button>
            <a
              href="https://wa.me/6285291619898?text=Halo%20Emoon,%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 bg-[#FFD700] hover:bg-[#FFC700] text-[#3D3B8E] rounded-lg transition-colors"
            >
              Konsultasi WA
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}