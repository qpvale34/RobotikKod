import { Link } from "wouter";
import heroBackground from "@assets/hero-background.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
        {/* Logo Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: '800px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.08
          }}
        ></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Robotik
                </span>
                <br />
                <span className="text-gray-800">Programlama</span>
                <br />
                <span className="text-4xl lg:text-5xl font-semibold text-gray-600">Kursu</span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                <strong className="text-gray-800">10 haftalık</strong> kapsamlı robotik programlama eğitimi ile 
                kodlama dünyasına profesyonel bir giriş yapın
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-bold text-gray-800 mb-2">Uygulamalı Eğitim</h3>
                <p className="text-sm text-gray-600">Gerçek robotlarla çalışma deneyimi</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-gray-800 mb-2">Uzman Eğitmenler</h3>
                <p className="text-sm text-gray-600">Alanında deneyimli mentorlar</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="font-bold text-gray-800 mb-2">Sertifika</h3>
                <p className="text-sm text-gray-600">Geçerli eğitim sertifikası</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/registration" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                data-testid="button-main-register"
              >
                🚀 Hemen Kayıt Ol
              </Link>
              <Link 
                to="/course" 
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 border-2 border-gray-200 hover:border-blue-300 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                data-testid="button-course-details"
              >
                📋 Kurs Detayları
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* What You'll Learn Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Neler <span className="text-blue-600">Öğreneceksiniz?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              10 haftalık süreçte robotik programlamanın temellerinden ileri seviye uygulamalara kadar her şey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Robotik Temelleri</h3>
              <p className="text-gray-700 leading-relaxed">
                Robotik sistemlerin temel prensipleri, sensörler ve aktüatörlerle çalışma teknikleri
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Programlama</h3>
              <p className="text-gray-700 leading-relaxed">
                C++ ve Python ile robotik programlama, algoritma geliştirme ve kod optimizasyonu
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proje Geliştirme</h3>
              <p className="text-gray-700 leading-relaxed">
                Gerçek robotik projeler ile pratik deneyim kazanma ve portföy oluşturma
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Highlights */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Neden Bu Kursu <span className="text-blue-600">Seçmelisiniz?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">10 Haftalık Yoğun Program</h4>
                    <p className="text-gray-600">Hızlı ve etkili öğrenme ile kısa sürede uzman olun</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Uygulamalı Eğitim</h4>
                    <p className="text-gray-600">Gerçek robotlarla çalışarak pratik deneyim kazanın</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Uzman Eğitmenler</h4>
                    <p className="text-gray-600">Alanında deneyimli mentorlardan birebir destek alın</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Geçerli Sertifika</h4>
                    <p className="text-gray-600">Kariyer fırsatlarınızı artıran resmi sertifika</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-10 rounded-3xl shadow-2xl text-white text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold mb-4">Hemen Başlayın!</h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Robotik programlama yolculuğunuza bugün adım atın ve geleceğin teknolojilerinde uzmanlaşın
              </p>
              <Link 
                to="/registration" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                data-testid="button-secondary-register"
              >
                🚀 Kayıt Ol
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}