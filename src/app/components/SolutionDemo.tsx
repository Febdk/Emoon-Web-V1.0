import React, { useState } from "react";
import { ExternalLink, Heart, Layout, CheckCircle2 } from "lucide-react";

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("Semua Karya");

  // Data kategori
  const categories = ["Semua Karya"];

  // Data Mock Portofolio
  const portfolioItems = [
    {
      id: 1,
      title: "Kagumi.Studio",
      category: "Studio Foto",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
      link: "https://formulironline.permatawedding.online/boking-studio-foto",
    },
    {
      id: 2,
      title: "Permata-Makeup",
      category: "MUA",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
      link: "https://formulironline.permatawedding.online/permata-mackup",
    },
    {
      id: 3,
      title: "Permata Photography",
      category: "Fotografer",
      image:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
      link: "https://formulironline.permatawedding.online/permata-photography",
    },
  ];

  const filteredItems =
    activeCategory === "Semua Karya"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="galery"
      className="py-20 px-4 min-h-screen bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3D3B8E]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
            <CheckCircle2 size={16} className="text-[#FFD700]" />
            <span className="text-xs font-medium text-white uppercase tracking-wider">
              Portfolio Kami
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Demo
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent ml-3">
              Karya Terbaik Kami
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Lihat koleksi form order terbaik yang telah kami buat. Klik pada
            kartu untuk melihat demo langsung.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-xl transition-all duration-300 font-semibold border-2 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500] border-transparent text-[#1E293B] shadow-lg shadow-yellow-500/20 scale-105"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-[#1E293B] border border-white/10 aspect-[4/3] cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD700]/50"
              onClick={() => window.open(item.link, "_blank")}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/800x600?text=Portofolio";
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] mb-2 text-[#FFD700] font-bold">
                  {item.category}
                </span>

                <h3 className="text-2xl font-bold mb-6 group-hover:text-[#FFD700] transition-colors">
                  {item.title}
                </h3>

                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1E293B] px-6 py-2.5 rounded-xl flex items-center gap-2 font-bold shadow-xl hover:brightness-110">
                    Lihat Demo
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              {/* Top Right Decoration */}
              <div className="absolute top-6 right-6 text-white/30 group-hover:text-[#FFD700] transition-colors">
                <Heart size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-24 bg-white/5 backdrop-blur-sm rounded-[2.5rem] border-2 border-dashed border-white/10">
            <Layout className="mx-auto text-gray-500 mb-4" size={48} />
            <p className="text-gray-400 text-lg">
              Belum ada hasil karya di kategori ini.
            </p>
          </div>
        )}

        {/* Footer Info Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-[#FFD700]/30 rounded-3xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-white/80 text-lg">
            Ingin memiliki website pernikahan seperti contoh di atas?
            <span className="block mt-2 font-bold text-[#FFD700]">
              Hubungi admin kami untuk konsultasi gratis!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
