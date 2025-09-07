import { Link } from "wouter";
import okulLogo from "../../../attached_assets/okuLLOGO.png";
import anasayfaImg from "../../../attached_assets/anasayfa.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-100 to-blue-100">
      {/* Ana Başlık */}

      <div className="w-full flex items-center justify-center py-8">
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200 overflow-hidden">
            <img
              src={okulLogo}
              alt="Okul Logo"
              className="w-21 h-21 object-contain"
            />
          </div>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
            Dudullu Amanetoğlu Anadolu İmam Hatip Lisesi
          </span>
        </div>
      </div>
      {/* Hero Section */}
      <div className="py-10 lg:py-16 relative bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left col-span-2">
              <div className="bg-gradient-to-br from-white/95 to-gray-50/90 rounded-2xl p-8 border border-gray-200/50 transition-transform duration-300 hover:scale-105 hover:-translate-y-1 shadow-[0_24px_80px_0_rgba(16,38,74,0.40),0_4px_16px_0_rgba(16,38,74,0.10)] bg-white/90 antialiased">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Robotik Kodlama Kursuna Hoş Geldiniz
                </h1>
                <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                  10 haftalık kapsamlı programımızla robotik kodlamanın temellerini
                  öğrenin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/kayit"
                    className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200 text-center"
                    data-testid="button-register-now"
                  >
                    Hemen Kayıt Ol
                  </Link>
                  <Link
                    href="/kurs"
                    className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-center"
                    data-testid="button-view-course"
                  >
                    Kursu İncele
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Anasayfa Görseli */}
      <div className="w-full flex justify-center mt-8 mb-8">
        <img
          src={anasayfaImg}
          alt="Robotik Kodlama Sınıfı"
          className="rounded-xl shadow-lg max-w-3xl w-full h-auto object-cover"
        />
      </div>
    </div>
      
  );
}
