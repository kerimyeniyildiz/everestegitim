import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  FileCheck, 
  Globe2, 
  BookOpen, 
  Languages, 
  Home, 
  Plane, 
  MapPin, 
  Mail,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  ShieldCheck,
  Phone,
  MessageSquare
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">Everest<span className="text-rose-600">Eğitim</span></span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#neden-arjantin" className="text-slate-600 hover:text-rose-600 font-medium transition-colors">Neden Arjantin?</a>
              <a href="#hizmetlerimiz" className="text-slate-600 hover:text-rose-600 font-medium transition-colors">Hizmetlerimiz</a>
              <a href="#yol-haritasi" className="text-slate-600 hover:text-rose-600 font-medium transition-colors">Yol Haritası</a>
              <a href="#iletisim" className="bg-rose-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-rose-700 transition-colors shadow-sm hover:shadow-md">
                Ücretsiz Danışmanlık
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
            <a href="#neden-arjantin" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-rose-600 hover:bg-slate-50 rounded-md">Neden Arjantin?</a>
            <a href="#hizmetlerimiz" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-rose-600 hover:bg-slate-50 rounded-md">Hizmetlerimiz</a>
            <a href="#yol-haritasi" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-rose-600 hover:bg-slate-50 rounded-md">Yol Haritası</a>
            <a href="#iletisim" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-rose-600 hover:bg-rose-50 rounded-md">İletişim</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2000&auto=format&fit=crop" 
            alt="Buenos Aires" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
              <span className="flex h-2 w-2 rounded-full bg-rose-500"></span>
              <span className="text-sm font-medium tracking-wide uppercase">Arjantin'de Eğitim Fırsatı</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Sadece Bir Diploma Değil, <span className="text-rose-500">Dünya Vatandaşı</span> Olma Fırsatı.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
              Güney Amerika'nın eğitim başkenti Buenos Aires'te sınavsız üniversite eğitimi alın, İspanyolcayı ana diliniz gibi öğrenin ve 2 yıllık eğitimin ardından Avrupa'ya vizesiz giriş sağlayan Arjantin Pasaportu alma hakkı kazanın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#hizmetlerimiz" className="inline-flex justify-center items-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition-all shadow-lg hover:shadow-rose-600/30">
                Eğitim Programlarını İncele
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#neden-arjantin" className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all">
                Vatandaşlık Avantajını Keşfet
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neden Arjantin? */}
      <section id="neden-arjantin" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dünyanın En Avantajlı Eğitim Rotası</h2>
            <p className="text-lg text-slate-600">Arjantin sadece kaliteli eğitimiyle değil, sunduğu yasal haklarla da eşsizdir. Geleceğinizin sınırlarını kaldırın!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Sınavsız ve Ekonomik Eğitim</h3>
              <p className="text-slate-600 leading-relaxed">
                Lise diplomanızla, dünya sıralamasında ilk 100'de yer alan UBA (Buenos Aires Üniversitesi) gibi kurumlara sınavsız kayıt imkanı.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-bl-full -z-10 opacity-50"></div>
              <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">2 Yılda Vatandaşlık Hakkı</h3>
              <p className="text-slate-600 leading-relaxed">
                Arjantin yasalarına göre, öğrenci oturumuyla ülkede kesintisiz 2 yıl yaşayan herkes Arjantin vatandaşlığına başvurma hakkı kazanır.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Globe2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">164 Ülkeye Vizesiz Seyahat</h3>
              <p className="text-slate-600 leading-relaxed">
                Alacağınız Arjantin pasaportu ile İngiltere ve tüm Avrupa Birliği (Schengen) ülkeleri dahil 164'ten fazla ülkeye vizesiz, serbestçe seyahat edebilirsiniz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section id="hizmetlerimiz" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Eğitim ve Yaşam Çözümleri</h2>
              <p className="text-lg text-slate-600">İhtiyacınıza uygun programı seçin, gerisini uzman ekibimize bırakın.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" alt="Üniversite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                  <BookOpen className="w-6 h-6 text-rose-600" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Üniversite Yerleştirme</h3>
                <p className="text-slate-600 mb-6 flex-1">
                  Buenos Aires'in en prestijli devlet ve özel üniversitelerinde yerinizi ayırıyoruz. Evrak çevirilerinden, "Convalidación" (lise diploması denklik) işlemlerine ve kesin kayda kadar tüm bürokratik süreci sizin adınıza yönetiyoruz.
                </p>
                <a href="#iletisim" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700">
                  Detaylı Bilgi Al <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=800&auto=format&fit=crop" alt="Dil Kursu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                  <Languages className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Yerel İspanyolca Dil Kursları</h3>
                <p className="text-slate-600 mb-6 flex-1">
                  Dünyanın en çok konuşulan ikinci dilini yerinde öğrenin! İster üniversiteye hazırlık, ister kişisel gelişim için... Sizi Buenos Aires'in en köklü ve pratik odaklı dil okullarına yerleştiriyoruz.
                </p>
                <a href="#iletisim" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700">
                  Detaylı Bilgi Al <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop" alt="Konaklama" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                  <Home className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Aile Yanı Konaklama</h3>
                <p className="text-slate-600 mb-6 flex-1">
                  "Sadece bir turist veya öğrenci değil, Arjantinli bir ailenin parçası olun." Öğrencilerimizin güvenliği ve İspanyolca pratiğini hızlandırmak için özenle seçilmiş, referanslı Arjantinli ailelerin yanında konaklama sağlıyoruz.
                </p>
                <a href="#iletisim" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700">
                  Detaylı Bilgi Al <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Güvence */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium">Everest Eğitim Güvencesiyle</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Arjantin'deki İlk Adımınızdan İtibaren Yanınızdayız</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Arjantin Eğitim, 14 yıllık uluslararası operasyon tecrübesine sahip <strong className="text-white">Everest Eğitim</strong>'in tescilli bir kuruluşudur. Süreciniz Türkiye'de başlar, Buenos Aires'teki yerel ekibimizin sıcak karşılamasıyla devam eder.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Göçmenlik ve DNI Başvurusu</h4>
                    <p className="text-slate-400">Arjantin ulusal kimliğinizin (DNI) ve oturum izninizin sorunsuz çıkarılması.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Plane className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Havalimanı Karşılama ve Oryantasyon</h4>
                    <p className="text-slate-400">Buenos Aires'e indiğiniz an sizi biz karşılıyor ve evinize yerleştiriyoruz.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">7/24 Yerel Destek</h4>
                    <p className="text-slate-400">İhtiyaç duyduğunuz her an Buenos Aires ofisimiz ve rehberlerimiz yanınızda.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-orange-400 rounded-3xl transform rotate-3 opacity-20 blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
                alt="Öğrenciler" 
                className="relative rounded-3xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="text-4xl font-black text-rose-600">14</div>
                <div className="text-sm font-bold leading-tight uppercase">Yıllık<br/>Tecrübe</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yol Haritası */}
      <section id="yol-haritasi" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Öğrenci Yol Haritası</h2>
            <p className="text-lg text-slate-600">Hayallerinize giden yolu 5 basit adıma böldük.</p>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {[
                { step: 1, title: "Ücretsiz Danışmanlık", desc: "Hedeflerinizi (Dil kursu veya Üniversite) belirliyoruz." },
                { step: 2, title: "Kayıt ve Evrak", desc: "Denklik ve çeviri işlemlerini Türkiye'de tamamlıyoruz." },
                { step: 3, title: "Konaklama", desc: "Size en uygun Arjantinli aileyi (veya yurt/evi) ayarlıyoruz." },
                { step: 4, title: "Vize ve Uçuş", desc: "Seyahat planınızı yapıyor ve yola çıkmanızı sağlıyoruz." },
                { step: 5, title: "Buenos Aires'e Varış", desc: "Havalimanında karşılıyor, kimlik ve okul kaydınızı tamamlıyoruz." }
              ].map((item, index) => (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-xl font-bold text-slate-400 mb-6 group-hover:border-rose-500 group-hover:text-rose-600 group-hover:scale-110 transition-all shadow-sm">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Contact */}
      <footer id="iletisim" className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            
            {/* Lead Form */}
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-2">Geleceğiniz için ilk adımı atın.</h3>
              <p className="text-slate-400 mb-8">Ücretsiz bilgilendirme randevusu oluşturun, uzmanlarımız sizi arasın.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Adınız Soyadınız</label>
                    <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors" placeholder="Ad Soyad" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Telefon Numaranız</label>
                    <input type="tel" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors" placeholder="+90 5XX XXX XX XX" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">E-posta Adresiniz</label>
                  <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors" placeholder="ornek@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">İlgilendiğiniz Program</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors appearance-none">
                    <option>Üniversite Eğitimi (Lisans)</option>
                    <option>Yüksek Lisans</option>
                    <option>İspanyolca Dil Kursu</option>
                    <option>Sadece Vatandaşlık/Oturum Bilgisi</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-xl transition-colors mt-4">
                  Ücretsiz Randevu Oluştur
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-white w-6 h-6" />
                  </div>
                  <span className="font-bold text-3xl tracking-tight text-white">Everest<span className="text-rose-600">Eğitim</span></span>
                </div>
                <p className="text-slate-400 text-lg">Arjantin'de eğitim ve yaşam konusunda 14 yıllık tecrübemizle yanınızdayız.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Hızlı Bağlantılar</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="hover:text-rose-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> UBA Kayıt Şartları</a></li>
                    <li><a href="#" className="hover:text-rose-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Aile Yanı Konaklama</a></li>
                    <li><a href="#" className="hover:text-rose-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> 2 Yılda Vatandaşlık</a></li>
                    <li><a href="#" className="hover:text-rose-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> İspanyolca Dil Okulları</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Bize Ulaşın</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">WhatsApp Destek</div>
                        <a href="https://wa.me/905515304136" className="hover:text-rose-400 transition-colors">+90 551 530 41 36</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">E-posta</div>
                        <a href="mailto:berkan@everestegitim.com" className="hover:text-rose-400 transition-colors">berkan@everestegitim.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Buenos Aires Ofisi</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Presidente Luis Sáenz Peña 819 4D,<br/>
                      Buenos Aires C1110, Arjantin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">© 2026 Everest Eğitim. Tüm hakları saklıdır.</p>
            <div className="flex gap-4 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Buttons */}
      <AnimatePresence>
        {showSticky && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden fixed bottom-6 left-4 right-4 z-50 flex gap-3"
          >
            <a 
              href="#iletisim" 
              className="flex-1 bg-white text-slate-900 border border-slate-200 shadow-xl rounded-full py-3.5 px-4 flex items-center justify-center gap-2 font-semibold text-sm active:scale-95 transition-transform"
            >
              <MessageSquare className="w-5 h-5 text-rose-600" />
              Bilgi Al
            </a>
            <a 
              href="https://wa.me/905515304136" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] text-white shadow-xl rounded-full py-3.5 px-4 flex items-center justify-center gap-2 font-semibold text-sm active:scale-95 transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
