import { Instagram, Send } from "lucide-react";
import logo from "@/assets/cb512b6998e6dcdac75c0af596d6f883a0f246e1.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0F172A] to-[#020617] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="Emoon Logo"
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              Solusi smart order form untuk pebisnis online. Buat formulir order
              yang profesional, custom branding, dan langsung terhubung ke
              WhatsApp.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/emoon_store.id?igsh=cjJyaWNya3R0aDVv&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-[#FFD700] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("fitur")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-[#FFD700] transition-colors"
                >
                  Fitur
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("harga")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-[#FFD700] transition-colors"
                >
                  Harga
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("demo")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-[#FFD700] transition-colors"
                >
                  Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4 text-white">Hubungi Kami</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://wa.me/6285291619898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  WhatsApp: +62 852-9161-9898
                </a>
              </li>
              <li>
                <a
                  href="mailto:duniaemoon@gmail.com"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  Email: duniaemoon@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <span className="text-sm text-gray-500">
                  Managed by @permata.foto
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Emoon Store. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#terms"
                className="text-gray-500 hover:text-[#FFD700] transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#privacy"
                className="text-gray-500 hover:text-[#FFD700] transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
