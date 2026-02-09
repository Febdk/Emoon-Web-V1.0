import { MessageSquareX, Calculator, Frown } from 'lucide-react';

export default function PainSection() {
  const problems = [
    {
      icon: <MessageSquareX className="w-12 h-12 text-red-500" />,
      title: "Chat WA Numpuk & Berantakan",
      description: "Pelanggan kirim orderan lewat chat pribadi, admin kewalahan nyari data yang mana, screenshot yang mana.",
      gradient: "from-red-50 to-red-100"
    },
    {
      icon: <Calculator className="w-12 h-12 text-orange-500" />,
      title: "Admin Sering Salah Hitung Total",
      description: "Hitung manual total harga, ongkir, diskon? Ribet! Sering ada kesalahan yang bikin rugi atau komplain customer.",
      gradient: "from-orange-50 to-orange-100"
    },
    {
      icon: <Frown className="w-12 h-12 text-yellow-600" />,
      title: "Tampilan Form Bawaan Membosankan",
      description: "Google Form? Typeform? Tampilannya gitu-gitu aja. Gak ada branding, gak profesional, customer jadi males order.",
      gradient: "from-yellow-50 to-yellow-100"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#334155] to-[#1E293B] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3D3B8E]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
            Masalah yang Sering Dialami
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mt-2">Pebisnis</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Kamu pasti pernah ngalamin salah satu (atau bahkan semua) masalah ini:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl mb-3 text-white">
                {problem.title}
              </h3>
              <p className="text-gray-300">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl md:text-2xl text-white">
            Tenang, <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">Emoon</span> punya solusinya! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}