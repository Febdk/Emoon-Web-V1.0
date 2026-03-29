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
  CheckCircle2, // Ikon baru untuk modal sukses
} from "lucide-react";

// --- CONFIGURATION ---
const ADMIN_WHATSAPP = "6285291619898";
const PRIMARY_COLOR = "#3D3B8E";
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzkKlinosEvZ8tKFJCP51hrnLB4Y69QH6vPf9BxGW9k0Udp6nJdxSx4yG1Rcw_RRPkm/exec";

// Initial state untuk mempermudah reset form
const initialFormState = {
  vendorName: "",
  vendorLogo: "",
  about: "",
  address: "",
  email: "",
  phone: "",
  instagram: "",
  orderFormat: "",
  images: ["", "", "", "", "", ""],
};

const OrderForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // State untuk modal sukses

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const validImages = formData.images.filter((img) => img.trim() !== "");

    try {
      // 1. KIRIM DATA KE GOOGLE SPREADSHEET
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // 2. SIAPKAN PESAN WHATSAPP
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
        `_Data otomatis tersinkron ke Spreadsheet Emoon System._`;

      const encodedMessage = encodeURIComponent(message);
      const waUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodedMessage}`;

      // Buka WA di tab baru
      window.open(waUrl, "_blank");

      // 3. RESET FORM & TAMPILKAN MODAL SUKSES
      setFormData(initialFormState);
      setIsSuccess(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Gagal mengirim data:", error);
      setIsLoading(false);
      alert(
        "Terjadi masalah jaringan, namun Anda tetap bisa mengirim via WhatsApp.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#3D3B8E] selection:text-white pb-20 relative">
      {/* MODAL SUKSES OVERLAY */}
      {isSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsSuccess(false)}
          ></div>
          <div className="bg-zinc-900 border border-[#3D3B8E]/50 p-8 rounded-3xl max-w-sm w-full text-center relative z-10 animate-in zoom-in-95 duration-300 shadow-[0_0_50px_rgba(61,59,142,0.2)]">
            <div className="w-20 h-20 bg-[#3D3B8E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} className="text-[#3D3B8E]" />
            </div>
            <h2 className="text-2xl font-black mb-2 uppercase tracking-tight">
              Berhasil Terkirim!
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Data Anda sudah masuk ke sistem kami. Tim Emoon akan segera
              memproses pembuatan form order Anda.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="w-full py-4 bg-[#3D3B8E] hover:bg-[#4d4ac2] rounded-xl font-bold transition-all uppercase tracking-widest text-xs active:scale-95"
            >
              Tutup & Buat Baru
            </button>
          </div>
        </div>
      )}

      {/* Glow Effect Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-gradient-to-b from-[#3D3B8E]/30 to-transparent blur-[120px] -z-10 pointer-events-none"></div>

      <header className="pt-12 pb-12 px-6 text-center">
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
          Lengkapi data vendor Anda. Data otomatis tersinkron ke{" "}
          <span className="text-white font-bold italic">Spreadsheet</span> dan
          WhatsApp admin.
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
                  <LinkIcon size={14} /> Link Logo (Drive/Imgur/Web)
                </label>
                <input
                  type="text"
                  name="vendorLogo"
                  value={formData.vendorLogo}
                  onChange={handleInputChange}
                  placeholder="Paste tautan logo di sini..."
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#3D3B8E] transition-all placeholder:text-zinc-800 text-sm"
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
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-[#3D3B8E]">
                  Tentang Vendor
                </label>
                <textarea
                  required
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Ceritakan sejarah singkat atau spesialisasi bisnis Anda..."
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#3D3B8E] transition-all resize-none text-sm"
                ></textarea>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Alamat Lengkap"
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3D3B8E] transition-all text-sm"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Aktif"
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3D3B8E] transition-all text-sm"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="No. WhatsApp"
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3D3B8E] transition-all text-sm"
                />
                <input
                  required
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  placeholder="Instagram @username"
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3D3B8E] transition-all text-sm"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Format Order */}
          <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 text-[#3D3B8E] mb-2 font-bold uppercase tracking-widest text-sm">
              <ClipboardList size={20} className="shrink-0" />
              Format & Catatan Khusus
            </div>
            <textarea
              required
              name="orderFormat"
              value={formData.orderFormat}
              onChange={handleInputChange}
              rows="4"
              placeholder="Contoh: Nama, Alamat, Size, Warna, Jumlah, dll."
              className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#3D3B8E] transition-all resize-none text-sm"
            ></textarea>
          </div>

          {/* Section 4: Gallery */}
          <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 text-[#3D3B8E] mb-2 font-bold uppercase tracking-widest text-sm">
              <Camera size={20} className="shrink-0" />
              Galeri (Maks 6 Foto)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.images.map((img, idx) => (
                <div key={idx} className="relative group">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-zinc-700 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
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
                <p className="text-[10px] font-medium uppercase tracking-tighter text-center">
                  Emoon Store System • Auto Sync Spreadsheet
                </p>
                <span className="h-px w-8 bg-zinc-900"></span>
              </div>
            </div>
          </div>
        </form>
      </main>

      <footer className="mt-20 text-center opacity-50">
        <p className="text-zinc-700 text-[10px] font-medium tracking-widest uppercase mb-4">
          Managed by @permata.foto
        </p>
      </footer>
    </div>
  );
};

export default OrderForm;
