export default function Registration() {
  const whatsappNumber = "905551234567"; // Türkiye telefon numarası
  const message = encodeURIComponent(
    `Merhaba! 🤖\n\nTemel Robotik Kodlama kursuna kayıt olmak istiyorum.\n\n📚 Kurs Bilgileri:\n• 10 haftalık program\n• Yaş grubu: 12-16\n• Kurs ücreti: ₺2.499\n• Tüm Arduino kitleri dahil\n• Sertifika programı\n\nLütfen kayıt işlemim için benimle iletişime geçin.\n\nTeşekkürler! 🙏`
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Kursa Kayıt Olun
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            WhatsApp üzerinden hızlı ve kolay kayıt! Sadece bir tıkla bizimle iletişime geçin.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Kurs Bilgileri */}
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Kurs Bilgileri</h3>
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-course-price">₺2.499</div>
                <p className="text-muted-foreground">10 haftalık kapsamlı program</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-sm text-card-foreground">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span>Tüm Arduino kitleri ve malzemeler dahil</span>
                </div>
                <div className="flex items-center text-sm text-card-foreground">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span>Online platform ve video içerikler</span>
                </div>
                <div className="flex items-center text-sm text-card-foreground">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span>Sertifika programı</span>
                </div>
                <div className="flex items-center text-sm text-card-foreground">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span>1 yıl mentor desteği</span>
                </div>
                <div className="flex items-center text-sm text-card-foreground">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span>Max 15 kişilik küçük gruplar</span>
                </div>
                <div className="flex items-center text-sm text-card-foreground">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span>12-16 yaş grubu öğrenciler için</span>
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="text-sm text-muted-foreground">
                  <i className="fas fa-calendar mr-2"></i>
                  Bir sonraki grup başlangıcı: 15 Ocak 2025
                </div>
                <div className="text-sm text-accent font-medium">
                  <i className="fas fa-users mr-2"></i>
                  Sadece 6 kişilik yer kaldı!
                </div>
              </div>
            </div>

            {/* WhatsApp Kayıt */}
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
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
                    +90 (555) 123-45-67
                  </p>
                  <p className="text-xs">
                    Mesaj gönderdikten sonra en kısa sürede size dönüş yapacağız
                  </p>
                </div>
              </div>

              {/* Kayıt Süreci */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold text-card-foreground mb-4 text-center">Kayıt Süreci</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold mt-1">
                      1
                    </div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">WhatsApp Mesajı</p>
                      <p className="text-xs text-muted-foreground">Yukarıdaki butona tıklayarak mesaj gönderin</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold mt-1">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">Bilgi Alışverişi</p>
                      <p className="text-xs text-muted-foreground">Uzmanımız sizinle iletişime geçecek</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold mt-1">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">Kayıt Tamamlama</p>
                      <p className="text-xs text-muted-foreground">Ödeme ve kayıt işlemlerinizi tamamlayın</p>
                    </div>
                  </div>
                </div>
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
                  Kurs 12-16 yaş grubu öğrenciler için tasarlanmıştır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}