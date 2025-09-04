import { Link } from "wouter";
import heroBackground from "@assets/hero-background.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-10 lg:py-16 relative bg-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: '1200px',
            backgroundPosition: 'center top 280px',
            backgroundRepeat: 'no-repeat',
            opacity: 0.5
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Temel Robotik Kodlama Kursuna Hoş Geldiniz
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
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
                  className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-center"
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

    </div>
  );
}
