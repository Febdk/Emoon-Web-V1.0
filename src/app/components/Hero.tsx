import { ArrowRight, Sparkles, XCircle, CheckCircle2, Zap } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#3D3B8E]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#3D3B8E]/10 to-[#5D5BAE]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <span className="text-sm text-white">
                Pilihan Terbaik Untuk mu!
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-7xl mb-6 text-white font-bold leading-tight">
              Ubah{" "}
              <span className="text-[#FFD700]">Chat Ruwet Dengan Klienmu</span>
              <span className="block bg-gradient-to-r from-[#eeedeb] to-[#f3f2f0] bg-clip-text text-transparent mt-2">
                Menjadi Simple dan Keren.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Stop menghabisakan waktuk{" "}
              <span className="text-[#FFD700]">
                membalas pertanyan yang berulang-ulang
              </span>
              , dan buat calon klien semakin yakin dengan produkmu dengan form
              yang rapi dan profesional. Tanpa coding,{" "}
              <span className="text-[#FFD700]">kami yang kerjakan</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("harga")}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#3D3B8E] rounded-xl font-bold transition-all group hover:shadow-2xl hover:scale-105"
              >
                Lihat Paketnya
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Right Visual - Professional Comparison with Image Support */}
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3D3B8E]/30 to-[#FFD700]/10 rounded-[2rem] blur-2xl group-hover:opacity-75 transition duration-1000"></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              {/* Kartu 1: Form Biasa */}
              <div className="bg-[#1E293B]/60 backdrop-blur-xl rounded-[2rem] p-5 border border-white/5 shadow-2xl transform hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-2 mb-4 text-red-400/80">
                  <XCircle size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Form Biasa ❌</span>
                </div>
                
                {/* Container Gambar Form Biasa */}
                <div className="aspect-[3/4] bg-slate-900 rounded-2xl border border-white/5 mb-5 overflow-hidden relative group/img shadow-inner">
                   <img 
                     src="src/assets/sample-ss-biasa.png" 
                     alt="Tampilan Form Biasa" 
                     className="absolute inset-0 w-full h-full object-cover object-top grayscale-[50%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                     onError={(e) => (e.currentTarget.style.display = 'none')}
                   />
                   
                   {/* Placeholder Visual jika gambar kosong */}
                   <div className="absolute inset-0 flex items-center justify-center bg-slate-800/20 pointer-events-none">
                      <span className="text-slate-600 text-[10px] italic text-center px-4">Screenshot Form Biasa Di Sini</span>
                   </div>
                </div>

                <div className="space-y-2 px-1 text-left">
                  <h3 className="text-white font-semibold text-sm">• Tampilan membosankan</h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    • Tidak ada branding yang maksimal<br/>
                    • kurang fleksibel 
                  </p>
                </div>
              </div>

              {/* Kartu 2: Form Emoon */}
              <div className="bg-gradient-to-b from-[#3D3B8E] to-[#1E293B] rounded-[2rem] p-5 border-2 border-[#FFD700]/40 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform lg:translate-y-10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group/card">
                
                {/* Badge Zap */}
                <div className="absolute top-2 right-2 z-20">
                  <div className="bg-[#FFD700] text-[#0F172A] p-1.5 rounded-lg shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                    <Zap size={14} fill="currentColor" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-[#FFD700]">
                  <CheckCircle2 size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Form Emoon ✨</span>
                </div>
                
                {/* Container Gambar Form Emoon */}
                <div className="aspect-[3/4] bg-[#2D2B7E] rounded-2xl border border-white/20 mb-5 overflow-hidden shadow-2xl relative group-hover/card:scale-[1.03] transition-transform duration-700">
                   <img 
                     src="src\assets\sample-ss-emoon.png" 
                     alt="Tampilan Form Emoon" 
                     className="absolute inset-0 w-full h-full object-cover object-top z-10"
                     onError={(e) => (e.currentTarget.style.opacity = '0')}
                   />

                   <div className="absolute inset-0 flex items-center justify-center bg-[#3D3B8E] z-0">
                      <span className="text-blue-300 text-[10px] italic text-center px-4">Screenshot Form Emoon Di Sini</span>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none"></div>
                </div>

                <div className="space-y-2 px-1 text-left">
                  <h3 className="text-[#FFD700] font-bold text-sm">✨ Custom branding sesukamu</h3>
                  <p className="text-[11px] text-blue-50 leading-relaxed opacity-90">
                    ✨ Langsung konek ke WA admin<br/>
                    ✨ Konek juga ke excle
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}