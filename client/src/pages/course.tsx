export default function Course() {
  const weeklyProgram = [
    {
      week: 1,
      title: "Robotik ve Kodlamaya Giriş",
      description: "Robotik nedir? Kodlama temelleri ve Arduino platformu tanıtımı. İlk LED yakma projesi.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      tags: ["Arduino", "C++", "LED"]
    },
    {
      week: 2,
      title: "Sensörler ve Veri Okuma",
      description: "Farklı sensör türleri, analog ve dijital veri okuma. Sıcaklık sensörü ile ilk projemiz.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      tags: ["Sensörler", "Analog/Dijital", "Seri İletişim"]
    },
    {
      week: 3,
      title: "Motor Kontrolü ve Hareket",
      description: "Servo ve step motorlar, PWM kontrolü, ilk hareket eden robot projesi.",
      image: "https://pixabay.com/get/g3f3661fdfab31a3780f1c346d40167659991a12c220553950110d50821349130e00a35c0b5b81377f18e27127b73a2190ab7b20d1e9e9c477b67f02781144797_1280.jpg",
      tags: ["Motor Kontrolü", "PWM", "Hareket"]
    },
    {
      week: 4,
      title: "Mesafe Ölçümü ve Engel Algılama",
      description: "Ultrasonik sensörler, mesafe ölçümü, engelleri algılayıp kaçınan robot yapımı.",
      image: "https://pixabay.com/get/g2a36d39e1eca278559a9c2e38198533f71f14a5bab7a6ed1050d5f33cb1f5aa2da7a6ed15cf6becfde045a2531fcf1b1e24f95ecdacaebaf17329ee681c54c61_1280.jpg",
      tags: ["Ultrasonik", "Engel Algılama", "Otonom Robot"]
    },
    {
      week: 5,
      title: "Kablosuz İletişim ve Kontrol",
      description: "Bluetooth modülleri, kablosuz veri iletimi, telefon ile robot kontrolü.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      tags: ["Bluetooth", "Kablosuz", "Uzaktan Kontrol"]
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            10 Haftalık Kurs Programı
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kapsamlı müfredatımızla robotik kodlamanın temellerinden ileri seviyeye kadar tüm konuları öğrenin
          </p>
        </div>

        {/* Course Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-clock text-primary-foreground text-sm"></i>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Kurs Süresi</h3>
            </div>
            <p className="text-2xl font-bold text-primary mb-2" data-testid="text-course-duration">10 Hafta</p>
            <p className="text-muted-foreground">Haftada 2 ders, toplamda 20 oturum</p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-users text-primary-foreground text-sm"></i>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Sınıf Mevcudu</h3>
            </div>
            <p className="text-2xl font-bold text-secondary mb-2" data-testid="text-class-size">Max 15 Kişi</p>
            <p className="text-muted-foreground">Bireysel ilgilenme için küçük gruplar</p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-laptop-code text-primary-foreground text-sm"></i>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Yaş Grubu</h3>
            </div>
            <p className="text-2xl font-bold text-accent mb-2" data-testid="text-age-group">12-16 Yaş</p>
            <p className="text-muted-foreground">Orta ve lise öğrencilerine uygun</p>
          </div>
        </div>

        {/* Weekly Curriculum */}
        <div className="space-y-6 mb-16">
          {weeklyProgram.map((week, index) => (
            <div
              key={week.week}
              className="bg-card rounded-xl shadow-sm border border-border overflow-hidden"
              data-testid={`card-week-${week.week}`}
            >
              <div className="p-6 lg:p-8">
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <img
                      src={week.image}
                      alt={week.title}
                      className="w-full h-48 lg:h-32 object-cover rounded-lg"
                      data-testid={`img-week-${week.week}`}
                    />
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex items-center mb-3">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mr-4">
                        Hafta {week.week}
                      </span>
                      <h3 className="text-xl font-semibold text-card-foreground">{week.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{week.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {week.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                          data-testid={`tag-${tag.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Week 6-10 Summary */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">Hafta 6-10: İleri Seviye Projeler</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">6. Hafta: Görüntü İşleme</h4>
                <p className="text-muted-foreground text-sm mb-4">Kamera modülleri ve temel görüntü işleme teknikleri</p>
                
                <h4 className="font-semibold text-foreground mb-2">7. Hafta: Ses Kontrolü</h4>
                <p className="text-muted-foreground text-sm mb-4">Mikrofonlar, ses algılama ve sesle kontrol edilen robot</p>
                
                <h4 className="font-semibold text-foreground mb-2">8. Hafta: IoT Entegrasyonu</h4>
                <p className="text-muted-foreground text-sm">WiFi modülleri ve internet bağlantılı robot sistemleri</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">9. Hafta: Çok Sensörlü Sistem</h4>
                <p className="text-muted-foreground text-sm mb-4">Birden fazla sensör kullanarak akıllı robot tasarımı</p>
                
                <h4 className="font-semibold text-foreground mb-2">10. Hafta: Final Projesi</h4>
                <p className="text-muted-foreground text-sm mb-4">Öğrenilen tüm konuları birleştiren kapsamlı proje</p>
                
                <div className="mt-6">
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium">
                    <i className="fas fa-trophy mr-2"></i>Sertifika Töreni
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Materials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Kurs Materyalleri</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-microchip text-primary text-xl"></i>
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Arduino Kit</h4>
              <p className="text-muted-foreground text-sm">Tüm projeler için gerekli Arduino ve sensörler</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-book text-secondary text-xl"></i>
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Eğitim Kitabı</h4>
              <p className="text-muted-foreground text-sm">Türkçe robotik kodlama rehberi ve proje örnekleri</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-video text-accent text-xl"></i>
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Video İçerikler</h4>
              <p className="text-muted-foreground text-sm">Online platform üzerinden erişilebilir ders videoları</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tools text-primary text-xl"></i>
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Yazılım Araçları</h4>
              <p className="text-muted-foreground text-sm">Arduino IDE ve online simülatör erişimi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
