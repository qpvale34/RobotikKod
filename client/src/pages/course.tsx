import arduinoImage from "@assets/generated_images/Arduino_LED_programming_setup_de581e54.png";
import sensorsImage from "@assets/generated_images/Electronic_sensors_collection_display_9637bdd6.png";
import motorsImage from "@assets/generated_images/Robot_motors_and_movement_71007dfc.png";
import obstacleImage from "@assets/generated_images/Obstacle_avoiding_robot_c6d83d24.png";
import wirelessImage from "@assets/generated_images/Wireless_robot_smartphone_control_30dd5d29.png";

export default function Course() {
  const weeklyProgram = [
    {
      week: 1,
      title: "Robotik ve Kodlamaya Giriş",
      description: "Robotik nedir? Arduino platformu tanıtımı, temel elektronik bileşenler ve ilk LED yakma projesi. Kodlama mantığının temelleri.",
      image: arduinoImage,
      tags: ["Arduino", "Temel Elektronik", "LED Projesi"]
    },
    {
      week: 2,
      title: "Sensörler ve Çevre Algılama",
      description: "Farklı sensör türleri (sıcaklık, ışık, ses), analog ve dijital veri okuma, sensör kalibrasyonu ve veri işleme teknikleri.",
      image: sensorsImage,
      tags: ["Sensörler", "Veri Okuma", "Analog/Dijital"]
    },
    {
      week: 3,
      title: "Motor Kontrolü ve Robot Hareketi",
      description: "Servo motorlar, DC motorlar, step motorlar. PWM sinyalleri, motor sürücü devreler ve hareket kontrol algoritmaları.",
      image: motorsImage,
      tags: ["Motorlar", "PWM", "Hareket Kontrolü"]
    },
    {
      week: 4,
      title: "Otonom Navigasyon ve Engel Algılama",
      description: "Ultrasonik mesafe sensörleri, IR sensörler, engel algılama algoritmaları ve otonom hareket eden robot tasarımı.",
      image: obstacleImage,
      tags: ["Ultrasonik", "Otonom Robot", "Algoritma"]
    },
    {
      week: 5,
      title: "Kablosuz İletişim ve Uzaktan Kontrol",
      description: "Bluetooth ve WiFi modülleri, kablosuz veri iletimi, mobil uygulama entegrasyonu ve uzaktan robot kontrolü.",
      image: wirelessImage,
      tags: ["Bluetooth", "WiFi", "Mobil Kontrol"]
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            10 Haftalık Kurs Programı
          </h2>
          
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
            <h3 className="text-2xl font-bold text-foreground mb-6">Hafta 6-10: İleri Seviye Robotik Uygulamaları</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">6. Hafta: Programlama ve Algoritmalar</h4>
                <p className="text-muted-foreground text-sm mb-4">Döngüler, koşullar, fonksiyonlar ve robot davranış programlama</p>
                
                <h4 className="font-semibold text-foreground mb-2">7. Hafta: Çoklu Sensör Entegrasyonu</h4>
                <p className="text-muted-foreground text-sm mb-4">Birden fazla sensör kullanarak akıllı karar verme sistemleri</p>
                
                <h4 className="font-semibold text-foreground mb-2">8. Hafta: Robot Kol ve Manipülatör</h4>
                <p className="text-muted-foreground text-sm">Servo motorlarla robot kol tasarımı ve nesne tutma</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">9. Hafta: Çizgi İzleyen Robot</h4>
                <p className="text-muted-foreground text-sm mb-4">IR sensörlerle çizgi takip algoritmaları ve PID kontrolü</p>
                
                <h4 className="font-semibold text-foreground mb-2">10. Hafta: Final Projesi ve Sunum</h4>
                <p className="text-muted-foreground text-sm mb-4">Kişisel robot projesi tasarımı, yapımı ve grup sunumu</p>
                
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
