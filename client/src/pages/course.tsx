import arduinoImage from "@assets/generated_images/Arduino_LED_programming_setup_de581e54.png";
import sensorsImage from "@assets/generated_images/Electronic_sensors_collection_display_9637bdd6.png";
import motorsImage from "@assets/generated_images/Robot_motors_and_movement_71007dfc.png";
import obstacleImage from "@assets/generated_images/Obstacle_avoiding_robot_c6d83d24.png";
import wirelessImage from "@assets/generated_images/Wireless_robot_smartphone_control_30dd5d29.png";

export default function Course() {
  const weeklyProgram = [
    {
      week: 1,
      title: "Tanışma ve Robotik Nedir?",
      description: "Kurs tanıtımı, robotik kavramı, güvenlik kuralları ve temel elektronik malzemelerle tanışma.",
      image: arduinoImage,
      tags: ["Tanışma", "Robotik", "Elektronik"]
    },
    {
      week: 2,
      title: "Basit Devre Kurma ve LED Yakma",
      description: "Pil, anahtar ve LED ile basit devre kurma, LED yakma uygulaması.",
      image: sensorsImage,
      tags: ["Devre", "LED", "Uygulama"]
    },
    {
      week: 3,
      title: "Buton ile LED Kontrolü",
      description: "Buton kullanarak LED açma-kapama, giriş/çıkış kavramı ve uygulama.",
      image: motorsImage,
      tags: ["Buton", "LED", "Kontrol"]
    },
    {
      week: 4,
      title: "Buzzer ile Sesli Uyarı",
      description: "Buzzer nedir, devreye eklenmesi ve sesli uyarı uygulaması.",
      image: obstacleImage,
      tags: ["Buzzer", "Ses", "Uygulama"]
    },
    {
      week: 5,
      title: "Işık Sensörü (LDR) ile Otomatik Lamba",
      description: "LDR ile ortam ışığına göre LED yakma uygulaması.",
      image: wirelessImage,
      tags: ["LDR", "Sensör", "Otomasyon"]
    },
    {
      week: 6,
      title: "Basit Motor Kontrolü",
      description: "DC motorun çalışma mantığı, motoru devreye bağlama ve çalıştırma.",
      image: arduinoImage,
      tags: ["Motor", "Devre", "Uygulama"]
    },
    {
      week: 7,
      title: "Servo Motor ile Hareket",
      description: "Servo motor nedir, temel hareket uygulamaları.",
      image: sensorsImage,
      tags: ["Servo", "Hareket", "Uygulama"]
    },
    {
      week: 8,
      title: "Temel Kodlama Alıştırmaları",
      description: "Döngüler, koşullar ve temel kodlama mantığı ile uygulamalar.",
      image: motorsImage,
      tags: ["Kodlama", "Döngü", "Koşul"]
    },
    {
      week: 9,
      title: "Mini Proje: Akıllı Lamba veya Basit Robot",
      description: "Öğrencilerle birlikte seçilecek basit bir proje uygulaması (ör. akıllı lamba, engelden kaçan robot vb.).",
      image: obstacleImage,
      tags: ["Proje", "Uygulama", "Takım Çalışması"]
    },
    {
      week: 10,
      title: "Kendi Projeni Tasarla ve Sergile",
      description: "Her kursiyer kendi seçtiği küçük bir projeyi tasarlayıp sınıfta sunar.",
      image: wirelessImage,
      tags: ["Sunum", "Proje", "Yaratıcılık"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-100 to-blue-100">
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
            <p className="text-2xl font-bold text-accent mb-2" data-testid="text-age-group">10-16 Yaş</p>
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
