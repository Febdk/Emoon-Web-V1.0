import { Check, Star, Sparkles } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: "Starter",
      subtitle: "Untuk Pemula",
      price: "95K",
      period: "sekali bayar",
      description: "Cocok buat kamu yang baru mulai bisnis online",
      features: [
        "1 Form Order Custom (Template Basic)",
        "Auto WhatsApp Integration",
        "Custom Warna & Logo",
        "Subdomain emoon.id/namamu",
        "Free Update 3 Bulan",
        "Auto WhatsApp Integration"
      ],
      popular: false,
      gradient: "from-gray-50 to-gray-100",
      buttonColor: "bg-gradient-to-r from-[#3D3B8E] to-[#5D5BAE] hover:from-[#2D2B6E] hover:to-[#4D4B9E] text-white"
    },
    {
      name: "Business",
      subtitle: "Paling Laris 🔥",
      price: "150K",
      period: "sekali bayar",
      description: "Best seller! Untuk bisnis yang sudah jalan dan pengen scale up",
      features: [
        "Semi-Custom Design",
        "Auto WhatsApp Integration",
        "Full Custom Design",
        "Analytics Dashboard",
        "Free Update 6 Bulan",
        "Priority Support 24/7",
        "Bonus: Template Promosi",
        "Bisa di Tambahkan Katalog Produk/Foto",
        "Fitur Hitung Otomatis"
      ],
      popular: true,
      gradient: "from-[#3D3B8E] to-[#5D5BAE]",
      buttonColor: "bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFC700] hover:to-[#FF8C00] text-[#1E293B]"
    },
    {
      name: "Exclusive",
      subtitle: "Sultan / Custom",
      price: "230K",
      period: "harga custom",
      description: "Untuk bisnis besar dengan kebutuhan khusus",
      features: [
        "Includes All Business Features",
        "Unlimited Forms",
        "Full Custom Development",
        "Free Consultation"
      ],
      popular: false,
      gradient: "from-[#FFD700] to-[#FFA500]",
      buttonColor: "bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-[#1E293B]"
    }
  ];

  return (
    <section id="harga" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3D3B8E]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
            Pilih Paket
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mt-2">Sesuai Kebutuhanmu</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Investasi kecil, hasil maksimal. Semua paket sudah termasuk maintenance dan support!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border-2 backdrop-blur-md ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border-[#FFD700] shadow-2xl shadow-[#FFD700]/20 scale-105' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              } transition-all hover:scale-105`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#FFD700] text-[#3D3B8E] px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star size={16} fill="#3D3B8E" />
                    <span className="text-sm">BEST SELLER</span>
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{pkg.subtitle}</p>
                
                <div className="mb-4">
                  {pkg.price === "Contact" ? (
                    <div className="text-3xl text-white">Contact Us</div>
                  ) : (
                    <>
                      <div className="text-4xl text-white">
                        Rp <span className="text-5xl bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">{pkg.price}</span>
                      </div>
                      <div className="text-sm text-gray-400">{pkg.period}</div>
                    </>
                  )}
                </div>

                <p className="text-sm text-gray-300">{pkg.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check 
                      size={20} 
                      className={`flex-shrink-0 mt-0.5 ${
                        pkg.popular ? 'text-[#FFD700]' : 'text-[#FFD700]/70'
                      }`} 
                    />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={`https://wa.me/6285291619898?text=Halo%20Emoon,%20saya%20tertarik%20dengan%20paket%20${pkg.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 rounded-xl text-center transition-all ${pkg.buttonColor} shadow-lg hover:shadow-2xl hover:scale-105`}
              >
                Pilih {pkg.name}
              </a>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-[#3D3B8E] to-[#5D5BAE] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
          <h3 className="text-2xl md:text-3xl mb-4">
            Masih Ragu? Yuk Konsultasi Gratis Dulu!
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Kita bantu pilih paket yang paling cocok buat bisnismu. Chat WA sekarang, gratis konsultasi & demo!
          </p>
          <a
            href="https://wa.me/6285291619898?text=Halo%20Emoon,%20saya%20mau%20konsultasi%20dan%20lihat%20demo%20dulu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1E293B] rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Chat Admin Sekarang
          </a>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-md rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all hover:scale-105">
            <div className="text-3xl mb-2">✅</div>
            <h4 className="text-lg mb-2 text-white">Garansi Revisi</h4>
            <p className="text-gray-300 text-sm">Revisi sampai kamu puas dengan hasilnya</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-105">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="text-lg mb-2 text-white">Pengerjaan Cepat</h4>
            <p className="text-gray-300 text-sm">3-5 hari kerja form kamu sudah jadi</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
            <div className="text-3xl mb-2">🎓</div>
            <h4 className="text-lg mb-2 text-white">Tutorial Lengkap</h4>
            <p className="text-gray-300 text-sm">Video panduan cara pakai & customize</p>
          </div>
        </div>
      </div>
    </section>
  );
}