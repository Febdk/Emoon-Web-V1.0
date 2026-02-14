import { Check, Star, Sparkles } from "lucide-react";

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
      ],
      popular: false,
      buttonColor:
        "bg-gradient-to-r from-[#3D3B8E] to-[#5D5BAE] hover:from-[#2D2B6E] hover:to-[#4D4B9E] text-white",
    },
    {
      name: "Business",
      subtitle: "Paling Laris 🔥",
      price: "150K",
      period: "sekali bayar",
      description:
        "Best seller! Untuk bisnis yang sudah jalan dan pengen scale up",
      features: [
        "Semi-Custom Design",
        "Auto WhatsApp Integration",
        "Full Custom Design",
        "Analytics Dashboard",
        "Free Update 6 Bulan",
        "Priority Support 24/7",
        "Bonus: Template Promosi",
        "Bisa Tambah Katalog Produk",
        "Fitur Hitung Otomatis",
      ],
      popular: true,
      buttonColor:
        "bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFC700] hover:to-[#FF8C00] text-[#1E293B]",
    },
  ];

  return (
    <section
      id="harga"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3D3B8E]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-white font-bold">
            Pilih Paket
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mt-2">
              Sesuai Kebutuhanmu
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Investasi kecil, hasil maksimal. Semua paket sudah termasuk
            maintenance dan support!
          </p>
        </div>

        {/* Grid Adjusted to 2 Columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border-2 backdrop-blur-md flex flex-col ${
                pkg.popular
                  ? "bg-gradient-to-br from-white/10 to-white/5 border-[#FFD700] shadow-2xl shadow-[#FFD700]/20 scale-105 z-20"
                  : "bg-white/5 border-white/10 hover:border-white/20 z-10"
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#FFD700] text-[#3D3B8E] px-6 py-2 rounded-full flex items-center gap-2 shadow-lg font-bold">
                    <Star size={16} fill="#3D3B8E" />
                    <span className="text-xs">BEST SELLER</span>
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{pkg.subtitle}</p>

                <div className="mb-4">
                  <div className="text-4xl font-bold text-white">
                    Rp{" "}
                    <span className="text-5xl bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{pkg.period}</div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={`flex-shrink-0 mt-0.5 ${pkg.popular ? "text-[#FFD700]" : "text-gray-400"}`}
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
                className={`block w-full py-4 rounded-xl text-center font-bold transition-all ${pkg.buttonColor} shadow-lg hover:shadow-2xl active:scale-95`}
              >
                Pilih Paket {pkg.name}
              </a>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-[#3D3B8E] to-[#5D5BAE] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Masih Ragu? Yuk Konsultasi Gratis!
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Kita bantu pilih paket yang paling cocok buat bisnismu. Chat WA
            sekarang, gratis konsultasi & demo!
          </p>
          <a
            href="https://wa.me/6285291619898?text=Halo%20Emoon,%20saya%20mau%20konsultasi%20dan%20lihat%20demo%20dulu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-[#FFD700] text-[#1E293B] font-bold rounded-xl transition-all shadow-lg hover:bg-[#FFA500] hover:scale-105"
          >
            Chat Admin Sekarang
          </a>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-3xl mb-3">✅</div>
            <h4 className="text-white font-semibold mb-1">Garansi Revisi</h4>
            <p className="text-gray-400 text-sm">
              Sampai kamu puas dengan hasilnya
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="text-white font-semibold mb-1">Pengerjaan Cepat</h4>
            <p className="text-gray-400 text-sm">
              3-5 hari kerja langsung tayang
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-3xl mb-3">🎓</div>
            <h4 className="text-white font-semibold mb-1">Tutorial Lengkap</h4>
            <p className="text-gray-400 text-sm">
              Panduan video cara penggunaan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
