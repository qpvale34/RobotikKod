import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Registration() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    studentAge: "",
    school: "",
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    parentPhone: "",
    experience: "",
    expectations: "",
    terms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    const requiredFields = ['studentFirstName', 'studentLastName', 'studentAge', 'parentFirstName', 'parentLastName', 'parentEmail', 'parentPhone'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Hata",
        description: "Lütfen tüm zorunlu alanları doldurun.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.terms) {
      toast({
        title: "Hata",
        description: "Kullanım şartlarını kabul etmelisiniz.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.parentEmail)) {
      toast({
        title: "Hata",
        description: "Geçerli bir e-posta adresi girin.",
        variant: "destructive",
      });
      return;
    }

    // Simulate successful registration
    toast({
      title: "Kayıt Başarılı",
      description: "Kayıt işleminiz başarıyla tamamlandı. Size e-posta ile onay gönderilecektir.",
    });

    // Reset form
    setFormData({
      studentFirstName: "",
      studentLastName: "",
      studentAge: "",
      school: "",
      parentFirstName: "",
      parentLastName: "",
      parentEmail: "",
      parentPhone: "",
      experience: "",
      expectations: "",
      terms: false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <div className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Kursa Kayıt Olun
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Robotik kodlama serüveninize bugün başlayın. Sadece birkaç adımda kayıt işleminizi tamamlayın.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pricing Card */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border sticky top-24">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Kurs Ücreti</h3>
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="text-course-price">₺2.499</div>
                  <p className="text-muted-foreground">10 haftalık program</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-sm text-card-foreground">
                    <i className="fas fa-check text-primary mr-3"></i>
                    <span>Tüm Arduino kitleri dahil</span>
                  </div>
                  <div className="flex items-center text-sm text-card-foreground">
                    <i className="fas fa-check text-primary mr-3"></i>
                    <span>Online platform erişimi</span>
                  </div>
                  <div className="flex items-center text-sm text-card-foreground">
                    <i className="fas fa-check text-primary mr-3"></i>
                    <span>Sertifika programı</span>
                  </div>
                  <div className="flex items-center text-sm text-card-foreground">
                    <i className="fas fa-check text-primary mr-3"></i>
                    <span>1 yıl mentor desteği</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-4">
                    <i className="fas fa-calendar mr-2"></i>
                    Bir sonraki grup: 15 Ocak 2024
                  </div>
                  <div className="text-sm text-accent font-medium">
                    <i className="fas fa-users mr-2"></i>
                    Sadece 6 kişilik yer kaldı!
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
                <h3 className="text-2xl font-bold text-card-foreground mb-8">Kayıt Formu</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Student Information */}
                  <div className="border-b border-border pb-8">
                    <h4 className="text-lg font-semibold text-card-foreground mb-6">Öğrenci Bilgileri</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="studentFirstName" className="block text-sm font-medium text-card-foreground mb-2">
                          Öğrenci Adı *
                        </label>
                        <input
                          type="text"
                          id="studentFirstName"
                          name="studentFirstName"
                          value={formData.studentFirstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                          data-testid="input-student-firstname"
                        />
                      </div>
                      <div>
                        <label htmlFor="studentLastName" className="block text-sm font-medium text-card-foreground mb-2">
                          Öğrenci Soyadı *
                        </label>
                        <input
                          type="text"
                          id="studentLastName"
                          name="studentLastName"
                          value={formData.studentLastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                          data-testid="input-student-lastname"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="studentAge" className="block text-sm font-medium text-card-foreground mb-2">
                          Yaş *
                        </label>
                        <select
                          id="studentAge"
                          name="studentAge"
                          value={formData.studentAge}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                          data-testid="select-student-age"
                        >
                          <option value="">Yaş seçin</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="school" className="block text-sm font-medium text-card-foreground mb-2">
                          Okul
                        </label>
                        <input
                          type="text"
                          id="school"
                          name="school"
                          value={formData.school}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                          data-testid="input-school"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Parent/Guardian Information */}
                  <div className="border-b border-border pb-8">
                    <h4 className="text-lg font-semibold text-card-foreground mb-6">Veli Bilgileri</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="parentFirstName" className="block text-sm font-medium text-card-foreground mb-2">
                          Veli Adı *
                        </label>
                        <input
                          type="text"
                          id="parentFirstName"
                          name="parentFirstName"
                          value={formData.parentFirstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                          data-testid="input-parent-firstname"
                        />
                      </div>
                      <div>
                        <label htmlFor="parentLastName" className="block text-sm font-medium text-card-foreground mb-2">
                          Veli Soyadı *
                        </label>
                        <input
                          type="text"
                          id="parentLastName"
                          name="parentLastName"
                          value={formData.parentLastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                          data-testid="input-parent-lastname"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="parentEmail" className="block text-sm font-medium text-card-foreground mb-2">
                          E-posta *
                        </label>
                        <input
                          type="email"
                          id="parentEmail"
                          name="parentEmail"
                          value={formData.parentEmail}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                          data-testid="input-parent-email"
                        />
                      </div>
                      <div>
                        <label htmlFor="parentPhone" className="block text-sm font-medium text-card-foreground mb-2">
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          id="parentPhone"
                          name="parentPhone"
                          value={formData.parentPhone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                          data-testid="input-parent-phone"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="pb-8">
                    <h4 className="text-lg font-semibold text-card-foreground mb-6">Ek Bilgiler</h4>
                    
                    <div className="mb-6">
                      <label htmlFor="experience" className="block text-sm font-medium text-card-foreground mb-2">
                        Programlama Deneyimi
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                        data-testid="select-experience"
                      >
                        <option value="">Deneyim seviyesi seçin</option>
                        <option value="none">Hiç yok</option>
                        <option value="beginner">Başlangıç seviyesi</option>
                        <option value="intermediate">Orta seviye</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="expectations" className="block text-sm font-medium text-card-foreground mb-2">
                        Kurstan Beklentileriniz
                      </label>
                      <textarea
                        id="expectations"
                        name="expectations"
                        rows={4}
                        value={formData.expectations}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                        placeholder="Kurstan ne öğrenmek istiyorsunuz?"
                        data-testid="textarea-expectations"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                        required
                        className="w-5 h-5 text-primary bg-input border border-border rounded focus:ring-2 focus:ring-ring mt-0.5"
                        data-testid="checkbox-terms"
                      />
                      <label htmlFor="terms" className="text-sm text-card-foreground">
                        <span className="font-medium">Kullanım şartlarını</span> ve{" "}
                        <span className="font-medium">gizlilik politikasını</span> okudum ve kabul ediyorum. *
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 text-lg"
                    data-testid="button-registration-submit"
                  >
                    <i className="fas fa-user-plus mr-2"></i>
                    Kayıt Ol
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
