import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  ChevronRight,
  Info,
  Camera,
  User,
  Link as LinkIcon,
  ClipboardList,
  ArrowLeft,
} from "lucide-react";

// --- CONFIGURATION ---
const ADMIN_WHATSAPP = "6285291619898"; // Nomor Admin Emoon Store
const PRIMARY_COLOR = "#3D3B8E"; // Warna Dominan

const OrderForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vendorName: "",
    vendorLogo: "",
    about: "",
    address: "",
    email: "",
    phone: "",
    instagram: "",
    orderFormat: "", // Field baru untuk format order/catatan
    images: ["", "", "", "", "", ""], // Max 6 foto
  });

  const [isLoading, setIsLoading] = useState(false);

  // Otomatis scroll ke atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData((prev) => ({ ...prev, images: newImages }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const validImages = formData.images.filter((img) => img.trim() !== "");

    const message =
      `*FORM ORDER - EMOON STORE*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n\n` +
      `👑 *IDENTITAS VENDOR*\n` +
      `• Nama Vendor: ${formData.vendorName}\n` +
      `• Link Logo: ${formData.vendorLogo || "-"}\n\n` +
      `📖 *TENTANG VENDOR*\n` +
      `${formData.about}\n\n` +
      `📍 *DETAIL KONTAK*\n` +
      `• Alamat: ${formData.address}\n` +
      `• Email: ${formData.email}\n` +
      `• No. HP: ${formData.phone}\n` +
      `• Instagram: ${formData.instagram}\n\n` +
      `📋 *FORMAT & CATATAN ORDER*\n` +
      `${formData.orderFormat || "-"}\n\n` +
      `🖼️ *GALLERY ASET* (${validImages.length} Foto)\n` +
      (validImages.length > 0
        ? validImages.map((url, i) => `   ${i + 1}. ${url}`).join("\n")
        : "   - Tidak ada link foto -") +
      `\n\n━━━━━━━━━━━━━━━━━━━━\n` +
      `_Mohon segera diproses untuk pembuatan form order saya. Terima kasih!_`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(waUrl, "_blank");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#3D3B8E] selection:text-white pb-20">
      {/* Glow Effect Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-gradient-to-b from-[#3D3B8E]/30 to-transparent blur-[120px] -z-10 pointer-events-none"></div>

      {/* Header Section */}
      <header className="pt-12 pb-12 px-6 text-center">
        {/* Tombol Kembali */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 mx-auto text-zinc-500 hover:text-[#3D3B8E] transition-colors text-xs font-bold uppercase tracking-[0.2em]"
        >
          <ArrowLeft size={14} /> Kembali ke Beranda
        </button>

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#3D3B8E] rounded-2xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform shadow-[0_0_40px_rgba(61,59,142,0.4)]">
            <ShoppingBag className="text-white w-8 h-8" />
          </div>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2 uppercase">
          Emoon <span className="text-[#3D3B8E]">Store</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
          Silahkan lengkapi data vendor Anda di bawah ini untuk memulai
          pembuatan sistem Form Order.
        </p>
      </header>

      <main className="max-w-2xl mx-auto px-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Brand Identity */}
          <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 text-[#3D3B8E] mb-2 font-bold uppercase tracking-widest text-sm">
              <User size={20} className="shrink-0" />
              Identitas Brand
            </div>

            <div className="grid gap-6">
              <div className="group">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-[#3D3B8E] transition-colors">
                  Nama Vendor / Nama Toko
                </label>
                <input
                  required
                  type="text"
                  name="vendorName"
                  value={formData.vendorName}
                  onChange={handleInputChange}
                  placeholder="Contoh: Permata Foto Studio"
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#3D3B8E] focus:ring-1 focus:ring-[#3D3B8E]/40 transition-all placeholder:text-zinc-800"
                />
              </div>

              <div className="group">
                <label className="Block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-[#3D3B8E] transition-colors flex items-center gap-2">
                  <LinkIcon size={14} /> Link Logo Vendor (Drive/Imgur/Web)
                </label>
                <input
                  type="text"
                  name="vendorLogo"
                  value={formData.vendorLogo}
                  onChange={handleInputChange}
                  placeholder="Paste tautan logo di sini..."
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#3D3B8E] focus:ring-1 focus:ring-[#3D3B8E]/40 transition-all placeholder:text-zinc-800 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Section 2: About & Contact */}
          <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 text-[#3D3B8E] mb-2 font-bold uppercase tracking-widest text-sm">
              <Info size={20} className="shrink-0" />
              Tentang & Kontak
            </div>

            <div className="space-y-5">
              <div className="group">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-[#3D3B8E] transition-colors">
                  Tentang Vendor
                </label>
                <textarea
                  required
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Ceritakan sejarah singkat atau spesialisasi bisnis Anda..."
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#3D3B8E] focus:ring-1 focus:ring-[#3D3B8E]/40 transition-all resize-none placeholder:text-zinc-800 text-sm"
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase mb-2 group-focus-within:text-[#3D3B8E]">
                    <MapPin size={14} /> Alamat Lengkap
                  </label>
                  <input
                    required
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Kota, Kecamatan..."
                    className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3D3B8E] transition-all text-sm"
                  />
                </div>
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase mb-2 group-focus-within:text-[#3D3B8E]">
                    <Mail size={14} /> Email Aktif
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="toko@gmail.com"
                    className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3D3B8E] transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase mb-2 group-focus-within:text-[#3D3B8E]">
                    <Phone size={14} /> No. WhatsApp
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0812xxxx"
                    className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3D3B8E] transition-all text-sm"
                  />
                </div>
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase mb-2 group-focus-within:text-[#3D3B8E]">
                    <Instagram size={14} /> Instagram
                  </label>
                  <input
                    required
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleInputChange}
                    placeholder="@username"
                    className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3D3B8E] transition-all text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Format Form Order & Notes */}
          <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 text-[#3D3B8E] mb-2 font-bold uppercase tracking-widest text-sm">
              <ClipboardList size={20} className="shrink-0" />
              Format & Catatan Khusus
            </div>

            <div className="group">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-[#3D3B8E] transition-colors leading-relaxed">
                Tentukan input data apa saja yang ingin ada di form order lo
                nanti (Misal: Nama, Alamat, Size, Warna, Jumlah, dll)
              </label>
              <textarea
                required
                name="orderFormat"
                value={formData.orderFormat}
                onChange={handleInputChange}
                rows="4"
                placeholder="Contoh: Saya butuh field Nama, No HP, Alamat Lengkap, Pilihan Paket, dan Metode Pembayaran."
                className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#3D3B8E] focus:ring-1 focus:ring-[#3D3B8E]/40 transition-all resize-none placeholder:text-zinc-800 text-sm"
              ></textarea>
            </div>
          </div>

          {/* Section 4: Gallery Assets */}
          <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 text-[#3D3B8E] mb-2 font-bold uppercase tracking-widest text-sm">
              <Camera size={20} className="shrink-0" />
              Galeri (Maks 6 Foto)
            </div>

            <div className="p-4 bg-[#3D3B8E]/5 border border-[#3D3B8E]/20 rounded-2xl mb-4">
              <p className="text-[10px] md:text-xs text-[#7c78e6] leading-relaxed italic text-left">
                * Lampirkan Link Google Drive atau Link Gambar publik yang dapat
                diakses tim desainer kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.images.map((img, idx) => (
                <div key={idx} className="relative group">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-zinc-700 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800 group-focus-within:text-[#3D3B8E] group-focus-within:border-[#3D3B8E]/50 transition-colors">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    value={img}
                    onChange={(e) => handleImageChange(idx, e.target.value)}
                    placeholder="Paste link foto di sini..."
                    className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-[#3D3B8E] transition-all text-[13px] placeholder:text-zinc-800"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-5 rounded-2xl font-black text-white text-lg uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_10px_40px_-10px_rgba(61,59,142,0.5)] ${
                isLoading
                  ? "bg-zinc-800 cursor-not-allowed text-zinc-500"
                  : "bg-[#3D3B8E] hover:scale-[1.01] active:scale-95 hover:bg-[#4d4ac2]"
              }`}
            >
              {isLoading ? (
                <>Sedang Mengirim...</>
              ) : (
                <>
                  Kirim Data Sekarang <ChevronRight size={20} />
                </>
              )}
            </button>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 text-zinc-700">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-zinc-900"></span>
                <p className="text-[10px] font-medium uppercase tracking-tighter">
                  Emoon Store System
                </p>
                <span className="h-px w-8 bg-zinc-900"></span>
              </div>
            </div>
          </div>
        </form>
      </main>

      {/* Footer Branding */}
      <footer className="mt-20 text-center">
        <p className="text-zinc-700 text-[10px] font-medium tracking-widest uppercase mb-4">
          Managed by @permata.foto
        </p>
        <div className="flex justify-center gap-6 text-zinc-800">
          <Instagram
            size={18}
            className="hover:text-[#3D3B8E] cursor-pointer transition-colors"
          />
          <ShoppingBag
            size={18}
            className="hover:text-[#3D3B8E] cursor-pointer transition-colors"
          />
          <Send
            size={18}
            className="hover:text-[#3D3B8E] cursor-pointer transition-colors"
          />
        </div>
      </footer>
    </div>
  );
};

export default OrderForm;
