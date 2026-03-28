import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/e-moon-store.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img src={logo} alt="Emoon Logo" className="h-8 md:h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[#3D3B8E] transition-colors relative group font-medium"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3D3B8E] group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("fitur")}
              className="text-gray-700 hover:text-[#3D3B8E] transition-colors relative group font-medium"
            >
              Fitur
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3D3B8E] group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("harga")}
              className="text-gray-700 hover:text-[#3D3B8E] transition-colors relative group font-medium"
            >
              Harga
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3D3B8E] group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("galery")}
              className="text-gray-700 hover:text-[#3D3B8E] transition-colors relative group font-medium"
            >
              Galery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3D3B8E] group-hover:w-full transition-all"></span>
            </button>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6285291619898?text=Halo%20Emoon,%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFC700] hover:to-[#FF8C00] text-[#3D3B8E] rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 font-bold"
            >
              Konsultasi WA
            </a>
          </div>

          {/* Mobile Menu Button - PREMIUM VERSION */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm active:scale-90 transition-all shadow-sm hover:border-[#3D3B8E]/30"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#3D3B8E]">
              {isOpen ? "Close" : "Menu"}
            </span>
            <div className="p-1 bg-[#3D3B8E] rounded-full text-white">
              {isOpen ? (
                <X size={14} strokeWidth={3} />
              ) : (
                <Menu size={14} strokeWidth={3} />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-2 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#3D3B8E]/5 hover:text-[#3D3B8E] rounded-xl font-medium transition-all"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("fitur")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#3D3B8E]/5 hover:text-[#3D3B8E] rounded-xl font-medium transition-all"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection("galery")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#3D3B8E]/5 hover:text-[#3D3B8E] rounded-xl font-medium transition-all"
            >
              Galery
            </button>
            <button
              onClick={() => scrollToSection("harga")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#3D3B8E]/5 hover:text-[#3D3B8E] rounded-xl font-medium transition-all"
            >
              Harga
            </button>

            <div className="px-4 pt-4">
              <a
                href="https://wa.me/6285291619898?text=Halo%20Emoon,%20saya%20ingin%20konsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-[#3D3B8E] text-white rounded-2xl font-bold shadow-lg shadow-indigo-100"
              >
                Konsultasi WA
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
