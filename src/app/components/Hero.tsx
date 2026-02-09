import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#3D3B8E]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#3D3B8E]/10 to-[#5D5BAE]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <Sparkles size={16} className="text-[#FFD700]" />
              <span className="text-sm text-white">Smart Order Form Solution</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              Tinggalkan Google Form Kaku.
              <span className="block bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mt-2">
                Beralih ke Smart Order Form.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Buat formulir order yang <span className="text-[#FFD700]">branding banget</span>, 
              hitung otomatis, dan langsung terhubung ke WhatsApp Admin. 
              Tanpa coding, <span className="text-[#FFD700]">kami yang kerjakan</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('demo')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#3D3B8E] rounded-xl transition-all group hover:shadow-2xl hover:scale-105"
              >
                Lihat Demo Form
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('harga')}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1E293B] rounded-xl transition-all hover:shadow-2xl hover:scale-105"
              >
                Pilih Paket
              </button>
            </div>
          </div>

          {/* Right Visual - Split Screen Mockup */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Form Biasa */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border-2 border-white/10 relative">
                <div className="absolute -top-3 -left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                  Form Biasa ❌
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 h-8 rounded backdrop-blur"></div>
                  <div className="bg-white/10 h-8 rounded backdrop-blur"></div>
                  <div className="bg-white/10 h-8 rounded backdrop-blur"></div>
                  <div className="bg-white/10 h-16 rounded backdrop-blur"></div>
                  <div className="bg-white/20 h-10 rounded backdrop-blur"></div>
                </div>
                <div className="mt-4 text-xs text-gray-400 space-y-1">
                  <p>• Tampilan membosankan</p>
                  <p>• Tidak ada branding</p>
                  <p>• Hitung manual</p>
                </div>
              </div>

              {/* Form Emoon */}
              <div className="bg-gradient-to-br from-[#3D3B8E] to-[#5D5BAE] rounded-2xl p-6 border-2 border-[#FFD700] relative shadow-2xl">
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1E293B] text-xs px-3 py-1 rounded-full shadow-lg">
                  Form Emoon ✨
                </div>
                <div className="space-y-3">
                  <div className="bg-white/20 h-8 rounded backdrop-blur"></div>
                  <div className="bg-white/20 h-8 rounded backdrop-blur"></div>
                  <div className="bg-white/20 h-8 rounded backdrop-blur"></div>
                  <div className="bg-white/20 h-16 rounded backdrop-blur"></div>
                  <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] h-10 rounded flex items-center justify-center text-[#1E293B] text-xs shadow-lg">
                    Pesan via WhatsApp
                  </div>
                </div>
                <div className="mt-4 text-xs text-white space-y-1">
                  <p>✨ Custom branding</p>
                  <p>✨ Auto calculate</p>
                  <p>✨ Langsung ke WA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}