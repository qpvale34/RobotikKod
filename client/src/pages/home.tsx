import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-secondary py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Temel Robotik Kodlama Kursuna Hoş Geldiniz
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                10 haftalık kapsamlı programımızla robotik kodlamanın temellerini öğrenin. 
                Uygulamalı projeler ve uzman eğitmenlerle geleceğin teknolojisine adım atın.
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
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-200 text-center"
                  data-testid="button-view-course"
                >
                  Kursu İncele
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://pixabay.com/get/g3d7e28ee51ed16760f2712fab31473d239c4b39f89a5274479537d6c8a5d6d2412e2a639630c0a2d793a3648a5dd68378a41230cf9a2d181366cbf6f883f9084_1280.jpg"
                alt="Modern robotics and coding workspace"
                className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Neden Bizim Kursumuz?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern eğitim yöntemleri ve uygulamalı projelerle robotik kodlamanın temellerini öğrenin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-graduation-cap text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Uzman Eğitmenler
              </h3>
              <p className="text-muted-foreground">
                Alanında deneyimli, sertifikalı eğitmenlerden robotik kodlamanın temellerini öğrenin.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-cogs text-secondary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Uygulamalı Projeler
              </h3>
              <p className="text-muted-foreground">
                Her hafta gerçek robotik projeler üzerinde çalışarak teorik bilgiyi pratiğe dökün.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-certificate text-accent text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Sertifika Programı
              </h3>
              <p className="text-muted-foreground">
                Kurs sonunda geçerli sertifikanızı alın ve becerilerinizi kanıtlayın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
