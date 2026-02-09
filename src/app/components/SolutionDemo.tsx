import { useState } from 'react';
import { ShoppingBag, Send, CheckCircle2 } from 'lucide-react';

export default function SolutionDemo() {
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    quantity: 1,
    address: ''
  });

  const products = [
    { name: 'Sepatu Running', price: 450000 },
    { name: 'Tas Backpack', price: 280000 },
    { name: 'Kaos Premium', price: 150000 },
    { name: 'Jaket Hoodie', price: 350000 }
  ];

  const selectedProduct = products.find(p => p.name === formData.product);
  const total = selectedProduct ? selectedProduct.price * formData.quantity : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.product || !formData.address) {
      alert('Mohon lengkapi semua data!');
      return;
    }

    const message = `Halo! Saya mau order:\n\n*Nama:* ${formData.name}\n*Produk:* ${formData.product}\n*Jumlah:* ${formData.quantity}\n*Total:* Rp ${total.toLocaleString('id-ID')}\n*Alamat:* ${formData.address}\n\nTerima kasih! 🙏`;
    
    const whatsappUrl = `https://wa.me/6285291619898?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="demo" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#3D3B8E]/20 to-[#5D5BAE]/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
            <CheckCircle2 size={16} className="text-[#FFD700]" />
            <span className="text-sm text-white">Live Interactive Demo</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
            Coba Klik & Rasakan 
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mt-2">Bedanya! ✨</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ini contoh form buatan Emoon. Isi datanya dan lihat hasilnya langsung terkirim ke WhatsApp!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-[#3D3B8E] to-[#5D5BAE] rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-[22px] p-8 md:p-10">
              {/* Header Form */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-[#3D3B8E]" />
                </div>
                <h3 className="text-2xl text-[#3D3B8E] mb-2">
                  Form Order Toko Kamu
                </h3>
                <p className="text-gray-600">Isi data dengan lengkap ya! 😊</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama kamu"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3D3B8E] focus:outline-none transition-colors focus:ring-4 focus:ring-[#3D3B8E]/10"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Pilih Produk
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3D3B8E] focus:outline-none transition-colors focus:ring-4 focus:ring-[#3D3B8E]/10"
                  >
                    <option value="">-- Pilih Produk --</option>
                    {products.map((product) => (
                      <option key={product.name} value={product.name}>
                        {product.name} - Rp {product.price.toLocaleString('id-ID')}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Jumlah
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3D3B8E] focus:outline-none transition-colors focus:ring-4 focus:ring-[#3D3B8E]/10"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Alamat Pengiriman
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Tulis alamat lengkap"
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3D3B8E] focus:outline-none transition-colors resize-none focus:ring-4 focus:ring-[#3D3B8E]/10"
                  />
                </div>

                {/* Total Price */}
                {selectedProduct && (
                  <div className="bg-gradient-to-r from-[#3D3B8E]/10 to-[#5D5BAE]/10 rounded-xl p-4 border-2 border-[#3D3B8E]/20">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Pembayaran:</span>
                      <span className="text-2xl bg-gradient-to-r from-[#3D3B8E] to-[#5D5BAE] bg-clip-text text-transparent">
                        Rp {total.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFC700] hover:to-[#FF8C00] text-[#1E293B] py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-2xl hover:scale-105"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Kirim Order ke WhatsApp
                </button>
              </form>

              {/* Footer Note */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  🔒 Data kamu aman & langsung ke admin
                </p>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-white/5 backdrop-blur-md border-2 border-[#FFD700]/30 rounded-2xl p-6 text-center">
            <p className="text-white">
              <span className="text-xl">✨</span> Ini baru contoh! Form kamu bisa lebih keren lagi dengan branding sendiri, warna custom, dan fitur tambahan sesuai kebutuhan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}