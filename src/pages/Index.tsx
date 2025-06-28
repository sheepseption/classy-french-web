
import { Button } from "@/components/ui/button";
import { BarChart3, Shield, Clock, Users, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
        <nav className="content-container">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h2 className="font-display text-2xl font-bold text-primary">IAssist</h2>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={scrollToTop}
                className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
              >
                Accueil
              </button>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#process" className="text-foreground hover:text-primary transition-colors font-medium">
                Processus
              </a>
              <Button asChild variant="outline" className="bg-primary text-white hover:bg-primary-dark border-primary">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="w-4 h-0.5 bg-foreground mb-1"></span>
                <span className="w-4 h-0.5 bg-foreground mb-1"></span>
                <span className="w-4 h-0.5 bg-foreground"></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary elegant-gradient py-24 md:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative content-container text-center text-white">
            <div className="animate-fade-in">
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
                Une Intelligence Artificielle à Votre Service
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
                Nous offrons des solutions sur mesure pour répondre à tous vos besoins professionnels avec efficacité et intégrité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="secondary" asChild className="hover-lift">
                  <a href="#services">Découvrir nos Services</a>
                </Button>
                <Button size="lg" asChild className="hover-lift">
                  <Link to="/rendez-vous">Prendre Rendez-vous</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-gray-50">
          <div className="content-container">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des solutions complètes adaptées à vos besoins spécifiques
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Conseil Stratégique",
                  description: "Analyse approfondie et recommandations personnalisées pour optimiser votre performance."
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Sécurité & Conformité",
                  description: "Protection de vos données et mise en conformité avec les réglementations en vigueur."
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Gestion de Projet",
                  description: "Suivi rigoureux et livraison dans les délais de tous vos projets critiques."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Support Dédié",
                  description: "Une équipe d'experts disponible pour répondre à toutes vos questions."
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover-lift transition-all duration-300 animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="section-padding">
          <div className="content-container">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Notre Processus</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une approche structurée pour garantir votre succès
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  number: "1",
                  title: "Consultation Initiale",
                  description: "Nous analysons vos besoins et définissons ensemble vos objectifs."
                },
                {
                  number: "2",
                  title: "Planification",
                  description: "Élaboration d'une stratégie sur mesure avec des jalons clairs."
                },
                {
                  number: "3",
                  title: "Mise en Œuvre",
                  description: "Exécution professionnelle avec suivi régulier de l'avancement."
                },
                {
                  number: "4",
                  title: "Résultats",
                  description: "Livraison de solutions efficaces et mesure de la performance."
                }
              ].map((step, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="section-padding bg-gray-50">
          <div className="content-container">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ils Nous Font Confiance</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  text: "Un service exceptionnel qui a dépassé toutes nos attentes. L'équipe est professionnelle, réactive et très compétente.",
                  author: "Marie Dubois",
                  role: "Directrice Générale, TechCorp"
                },
                {
                  text: "Leur expertise nous a permis d'optimiser nos processus et d'augmenter notre efficacité de 40%.",
                  author: "Jean Martin",
                  role: "PDG, InnovateSolutions"
                },
                {
                  text: "Un partenaire de confiance sur qui nous pouvons compter pour tous nos projets stratégiques.",
                  author: "Sophie Bernard",
                  role: "Responsable IT, GlobalFinance"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover-lift animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-8 opacity-60">
              {["Enterprise+", "TechLeader", "InnovateCo", "GlobalTrust"].map((company, index) => (
                <div key={index} className="text-lg font-semibold text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="content-container text-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Prêt à Transformer Votre Entreprise ?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour une consultation gratuite
              </p>
              <Button size="lg" variant="secondary" asChild className="hover-lift">
                <Link to="/rendez-vous">
                  Planifier une Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="content-container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">IAssist</h3>
              <p className="text-gray-400 leading-relaxed">
                Excellence et professionnalisme depuis 2010. Votre succès est notre priorité.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">Accueil</button></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Conseil Stratégique</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sécurité & Conformité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gestion de Projet</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support Dédié</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@proservices.fr</li>
                <li>Tél: +33 1 23 45 67 89</li>
                <li>Lun-Ven: 9h-18h</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IAssist. Tous droits réservés. | <a href="#" className="hover:text-white transition-colors">Mentions Légales</a> | <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
