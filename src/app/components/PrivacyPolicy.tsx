import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Globe,
  FileText,
  UserCheck,
  LucideIcon,
  Server,
  Smartphone,
} from "lucide-react";

// --- INTERFACES ---
interface PolicyCardProps {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

interface PrivacyPolicyProps {
  onBack?: () => void;
}

// --- SUB-COMPONENTS ---
const PolicyCard = ({ Icon, title, desc }: PolicyCardProps) => (
  <div className="bg-zinc-900/20 border border-zinc-800/30 p-6 rounded-2xl hover:border-[#3D3B8E]/30 transition-all group text-left">
    <div className="flex items-center gap-4 mb-3">
      <div className="text-[#3D3B8E] group-hover:scale-110 transition-transform">
        <Icon size={20} />
      </div>
      <h3 className="text-zinc-200 font-bold uppercase tracking-wider text-xs leading-none">
        {title}
      </h3>
    </div>
    <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

const PrivacyPolicy = ({ onBack }: PrivacyPolicyProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#3D3B8E] pb-20 relative overflow-hidden">
      {/* Efek Cahaya Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-gradient-to-b from-[#3D3B8E]/20 to-transparent blur-[120px] -z-10 pointer-events-none"></div>

      {/* Header */}
      <header className="pt-16 pb-12 px-6 text-center">
        <button
          onClick={() => (onBack ? onBack() : navigate("/"))}
          className="mb-8 flex items-center gap-2 mx-auto text-zinc-500 hover:text-[#3D3B8E] transition-colors text-xs font-bold uppercase tracking-[0.2em]"
        >
          <ArrowLeft size={14} /> Kembali ke Beranda
        </button>

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#3D3B8E]/20 rounded-2xl flex items-center justify-center border border-[#3D3B8E]/50 shadow-[0_0_30px_rgba(61,59,142,0.3)]">
            <ShieldCheck className="text-[#3D3B8E] w-8 h-8" />
          </div>
        </div>

        <h1 className="text-3xl font-black tracking-tighter uppercase mb-2 leading-none">
          Kebijakan <span className="text-[#3D3B8E]">Privasi</span>
        </h1>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">
          Terakhir Diperbarui: 12 April 2026
        </p>
      </header>

      {/* Konten Utama */}
      <main className="max-w-3xl mx-auto px-6 space-y-12">
        {/* Intro Section */}
        <section className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-white font-bold mb-4 uppercase tracking-widest text-sm flex items-center gap-2">
            <Eye size={16} className="text-[#3D3B8E]" /> Komitmen Kami
          </h2>
          <p className="text-zinc-400 leading-relaxed text-sm text-left">
            Selamat datang di{" "}
            <span className="text-white font-bold">Emoon Store</span>. Kami
            menyadari bahwa data bisnis Anda adalah aset berharga. Kebijakan
            Privasi ini dirancang untuk menjelaskan secara transparan bagaimana
            kami mengelola, menyimpan, dan melindungi data yang Anda percayakan
            kepada kami selama proses pembuatan sistem Form Order WhatsApp.
          </p>
        </section>

        {/* Detail Kebijakan Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <PolicyCard
            Icon={Database}
            title="Data Yang Kami Ambil"
            desc="Kami mengumpulkan identitas brand (Nama, Logo), kontak operasional (WhatsApp, Email, Instagram), serta detail teknis format order yang Anda inginkan."
          />
          <PolicyCard
            Icon={Server}
            title="Sinkronisasi Backup"
            desc="Data Anda secara otomatis disinkronkan ke sistem Google Spreadsheet melalui Google Apps Script untuk memastikan Anda memiliki basis data cadangan yang rapi."
          />
          <PolicyCard
            Icon={Lock}
            title="Keamanan Aset"
            desc="Link gambar atau logo yang Anda lampirkan hanya digunakan oleh tim desainer kami selama proses pengerjaan dan tidak akan dipublikasikan tanpa izin."
          />
          <PolicyCard
            Icon={Smartphone}
            title="WhatsApp Integration"
            desc="Sistem kami meneruskan data pesanan langsung ke API WhatsApp. Kami tidak menyimpan isi pesan pribadi antara Anda dan pelanggan Anda."
          />
        </div>

        {/* Pasal Detil */}
        <section className="space-y-6 text-left">
          <div className="p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl">
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <FileText size={18} className="text-[#3D3B8E]" /> Penggunaan
              Informasi
            </h3>
            <ul className="text-zinc-500 text-xs space-y-3 list-disc pl-5 leading-relaxed">
              <li>
                Pemrosesan pesanan jasa pembuatan formulir order profesional.
              </li>
              <li>
                Penyediaan fitur backup otomatis ke{" "}
                <span className="text-white font-medium">
                  Google Spreadsheet
                </span>{" "}
                secara gratis.
              </li>
              <li>
                Komunikasi antara tim{" "}
                <span className="text-white font-medium">@permata.foto</span>{" "}
                dan vendor terkait revisi atau detail teknis.
              </li>
              <li>
                Menganalisis tren penggunaan untuk meningkatkan fitur
                fungsionalitas formulir Emoon Store di masa depan.
              </li>
            </ul>
          </div>

          <div className="p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl">
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <UserCheck size={18} className="text-[#3D3B8E]" /> Persetujuan &
              Tanggung Jawab
            </h3>
            <ul className="text-zinc-500 text-xs space-y-3 list-disc pl-5 leading-relaxed">
              <li>
                Dengan mengisi form order, Anda memberikan izin kepada kami
                untuk mengakses dan mengolah data tersebut demi kelancaran
                pembuatan sistem.
              </li>
              <li>
                Vendor bertanggung jawab penuh atas keabsahan produk atau jasa
                yang ditawarkan melalui sistem form order Emoon Store.
              </li>
              <li>
                Layanan ini bersifat{" "}
                <span className="text-white font-medium">
                  Sekali Bayar (One-Time Payment)
                </span>{" "}
                sesuai paket yang disepakati.
              </li>
            </ul>
          </div>
        </section>

        {/* Footer Info */}
        <footer className="text-center pt-10 border-t border-zinc-900/50">
          <p className="text-zinc-700 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
            Emoon Store System • Managed by @permata.foto
          </p>
          <p className="text-zinc-800 text-[9px]">
            © 2026 Emoon Store. Hak Cipta Dilindungi Undang-Undang.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
