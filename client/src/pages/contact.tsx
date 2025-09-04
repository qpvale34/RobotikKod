import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Hata",
        description: "Lütfen tüm zorunlu alanları doldurun.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Hata",
        description: "Geçerli bir e-posta adresi girin.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mesaj Gönderildi",
      description: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sorularınız için bize ulaşın. Uzman ekibimiz size yardımcı olmaya hazır.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                    <i className="fas fa-phone text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground">Telefon</h4>
                    <p className="text-muted-foreground" data-testid="text-contact-phone">+90 (212) 555-0123</p>
                    <p className="text-muted-foreground text-sm">Pazartesi - Cuma: 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mt-1">
                    <i className="fas fa-envelope text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground">E-posta</h4>
                    <p className="text-muted-foreground" data-testid="text-contact-email">info@robotikkod.com</p>
                    <p className="text-muted-foreground text-sm">24 saat içinde yanıtlıyoruz</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <i className="fas fa-map-marker-alt text-accent"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground">Adres</h4>
                    <p className="text-muted-foreground" data-testid="text-contact-address">
                      Teknoloji Merkezi, Maslak<br/>Sarıyer, İstanbul
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Sık Sorulan Sorular</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Ön koşul bilgi gerekli mi?</h4>
                  <p className="text-muted-foreground text-sm">Hayır, hiçbir programlama deneyimi gerekmez. Temellerden başlıyoruz.</p>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Kurs materyalleri dahil mi?</h4>
                  <p className="text-muted-foreground text-sm">Evet, tüm Arduino kitleri ve elektronik bileşenler dahildir.</p>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Online destek var mı?</h4>
                  <p className="text-muted-foreground text-sm">Evet, kurs boyunca online forum ve mentor desteği sağlanır.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">Bize Mesaj Gönderin</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-card-foreground mb-2">
                    Ad
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                    data-testid="input-contact-firstname"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-card-foreground mb-2">
                    Soyad
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                    data-testid="input-contact-lastname"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                  data-testid="input-contact-email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                  data-testid="input-contact-phone"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                  placeholder="Kurs hakkında sorularınızı yazın..."
                  data-testid="textarea-contact-message"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                data-testid="button-contact-submit"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
