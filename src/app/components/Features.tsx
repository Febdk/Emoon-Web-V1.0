import { MessageCircle, Palette, Calculator, Globe } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "Auto-WhatsApp Generator",
      description: "Orderan langsung terformat rapi dan otomatis terkirim ke WhatsApp admin. Gak perlu copy-paste manual lagi!",
      gradient: "from-[#25D366] to-[#128C7E]",
      size: "large" // Bento Grid: Large
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: "Custom Branding",
      description: "Logo, warna, font - semuanya bisa disesuaikan dengan brand kamu. Bikin customer percaya!",
      gradient: "from-[#3D3B8E] to-[#5D5BAE]",
      size: "regular"
    },
    {
      icon: <Calculator className="w-8 h-8 text-white" />,
      title: "Auto Calculator",
      description: "Hitung total harga otomatis termasuk ongkir, diskon, dan berbagai variasi produk.",
      gradient: "from-[#FFD700] to-[#FFA500]",
      size: "regular"
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Subdomain Keren",
      description: "Dapatkan link eksklusif: webform.id/namamu atau custom domain sendiri!",
      gradient: "from-[#667EEA] to-[#764BA2]",
      size: "wide" // Bento Grid: Wide
    }
  ];

  return (
    <section id="fitur" className="py-16 md:py-25 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3D3B8E]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-white px-4">
            Fitur Unggulan
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mt-2 px-2 text-2xl md:text-3xl lg:text-4xl leading-relaxed">Yang Bikin Bisnis Makin Gampang</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-7xl mx-auto">
            Semua fitur dirancang khusus untuk pebisnis online yang pengen tampil profesional tanpa ribet
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* Large Feature - Spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className={`bg-gradient-to-br ${features[0].gradient} rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between hover:shadow-2xl transition-shadow`}>
              <div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                  {features[0].icon}
                </div>
                <h3 className="text-2xl md:text-3xl mb-4 text-white">
                  {features[0].title}
                </h3>
                <p className="text-white/90 text-lg">
                  {features[0].description}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex-1 bg-white/20 backdrop-blur rounded-lg p-4">
                  <p className="text-white text-sm">Format pesan rapi & profesional</p>
                </div>
                <div className="flex-1 bg-white/20 backdrop-blur rounded-lg p-4">
                  <p className="text-white text-sm">Langsung klik, langsung kirim</p>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Feature 1 */}
          <div className="lg:row-span-1">
            <div className={`bg-gradient-to-br ${features[1].gradient} rounded-3xl p-8 h-full flex flex-col hover:shadow-2xl transition-shadow`}>
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                {features[1].icon}
              </div>
              <h3 className="text-2xl mb-4 text-white">
                {features[1].title}
              </h3>
              <p className="text-white/90">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Regular Feature 2 */}
          <div className="lg:row-span-1">
            <div className={`bg-gradient-to-br ${features[2].gradient} rounded-3xl p-8 h-full flex flex-col hover:shadow-2xl transition-shadow`}>
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                {features[2].icon}
              </div>
              <h3 className="text-2xl mb-4 text-[#3D3B8E]">
                {features[2].title}
              </h3>
              <p className="text-[#3D3B8E]/90">
                {features[2].description}
              </p>
            </div>
          </div>

          {/* Wide Feature - Spans 2 columns */}
          <div className="lg:col-span-2">
            <div className={`bg-gradient-to-br ${features[3].gradient} rounded-3xl p-8 h-full flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition-shadow`}>
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center flex-shrink-0">
                {features[3].icon}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl mb-3 text-white">
                  {features[3].title}
                </h3>
                <p className="text-white/90">
                  {features[3].description}
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3 flex-shrink-0">
                <p className="text-white text-sm">webform.id/tokoku</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:scale-105">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="text-lg mb-2 text-white">Tanpa Coding</h4>
            <p className="text-gray-300 text-sm">Kamu fokus jualan, kami yang urus teknisnya</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:scale-105">
            <div className="text-3xl mb-2">📱</div>
            <h4 className="text-lg mb-2 text-white">Mobile Friendly</h4>
            <p className="text-gray-300 text-sm">90% pelanggan order dari HP, kami tau itu!</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:scale-105">
            <div className="text-3xl mb-2">🚀</div>
            <h4 className="text-lg mb-2 text-white">Fast Support</h4>
            <p className="text-gray-300 text-sm">Ada masalah? Chat WA langsung dibalas!</p>
          </div>
        </div>
      </div>
    </section>
  );
}