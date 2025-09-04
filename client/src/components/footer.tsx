import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-robot text-primary-foreground"></i>
              </div>
              <span className="text-xl font-bold text-primary">RobotikKod</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Geleceğin teknolojisini bugünden öğrenmek için en iyi robotik kodlama eğitimi platformu.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="link-facebook"
              >
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="link-twitter"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="link-instagram"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="link-linkedin"
              >
                <i className="fab fa-linkedin text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Hızlı Linkler</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="footer-link-anasayfa"
              >
                Anasayfa
              </Link>
              <Link
                href="/kurs"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="footer-link-kurs"
              >
                Kurs Programı
              </Link>
              <Link
                href="/iletisim"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="footer-link-iletisim"
              >
                İletişim
              </Link>
              <Link
                href="/kayit"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="footer-link-kayit"
              >
                Kayıt
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">İletişim</h4>
            <div className="space-y-2 text-muted-foreground">
              <p data-testid="text-phone">
                <i className="fas fa-phone mr-2 text-primary"></i> +90 (212) 555-0123
              </p>
              <p data-testid="text-email">
                <i className="fas fa-envelope mr-2 text-primary"></i> info@robotikkod.com
              </p>
              <p data-testid="text-address">
                <i className="fas fa-map-marker-alt mr-2 text-primary"></i> Maslak, İstanbul
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 RobotikKod. Tüm hakları saklıdır. |{" "}
            <a
              href="#"
              className="hover:text-primary transition-colors duration-200"
              data-testid="link-privacy"
            >
              Gizlilik Politikası
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="hover:text-primary transition-colors duration-200"
              data-testid="link-terms"
            >
              Kullanım Şartları
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
