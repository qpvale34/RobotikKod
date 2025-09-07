export default function Registration() {
  const whatsappNumber = "905065508830"; // Türkiye telefon numarası
  const message = encodeURIComponent(
    `Merhaba! 🤖\n\nTemel Robotik Kodlama kursuna kayıt olmak için cumartesi günü saat 09:00 ile 12:30 saatleri arasında okulumuzdaki kurslarla çakışmaması gerektiğini unutmayın.\n\n📚 İstenen Bilgiler:\n• İsim-Soyisim:\n• Sınıfı ve numarası:\n• Anne veya baba telefon numarası:\n• Devamsızlık yapmama şartı onayı:\n• Diğer kurslarla çakışıyor mu ?:\n\nLütfen bilgilerinizi tek mesaj olacak şekilde yazınız.\n\nTeşekkürler! 🙏`
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-100 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Kursa Kayıt Olun
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            WhatsApp üzerinden hızlı ve kolay kayıt! Sadece bir tıkla bizimle iletişime geçin.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* WhatsApp Kayıt */}
          <div className="bg-gradient-to-br from-white/95 to-gray-50/90 backdrop-blur-sm rounded-2xl p-8 shadow-3xl border border-gray-200/50">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fab fa-whatsapp text-white text-3xl"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  WhatsApp ile Kayıt
                </h3>
                
                <p className="text-muted-foreground mb-8">
                  Hızlı ve kolay kayıt için WhatsApp üzerinden bizimle iletişime geçin. 
                  Kurs hakkında tüm detayları öğrenin ve kayıt işleminizi tamamlayın.
                </p>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 text-lg flex items-center justify-center space-x-3 mb-6"
                  data-testid="button-whatsapp-register"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                  <span>WhatsApp'dan Kayıt Ol</span>
                </button>

                <div className="text-sm text-muted-foreground space-y-2">
                  <p className="flex items-center justify-center">
                    <i className="fas fa-phone mr-2 text-primary"></i>
                     sadece mesaj lütfen - arama yapılmaz
                  </p>
                  <p className="text-xs">
                    Mesaj gönderdikten sonra en kısa sürede size dönüş yapacağız
                  </p>
                </div>
              </div>
            </div>

          {/* FAQ Section */}
          <div className="mt-12 bg-card rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-card-foreground mb-6 text-center">
              Sık Sorulan Sorular
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-card-foreground mb-2">Ön koşul bilgi gerekli mi?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Hayır, hiçbir programlama deneyimi gerekmez. Temellerden başlıyoruz.
                </p>
                
                <h4 className="font-medium text-card-foreground mb-2">Kurs materyalleri dahil mi?</h4>
                <p className="text-muted-foreground text-sm">
                  Evet, tüm Arduino kitleri ve elektronik bileşenler dahildir.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-card-foreground mb-2">Online destek var mı?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Evet, kurs boyunca WhatsApp grubu ve mentor desteği sağlanır.
                </p>
                
                <h4 className="font-medium text-card-foreground mb-2">Yaş sınırı var mı?</h4>
                <p className="text-muted-foreground text-sm">
                  Kurs 10-16 yaş grubu öğrenciler için tasarlanmıştır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}