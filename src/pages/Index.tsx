
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Shield, Clock, Users, ArrowRight, Quote, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Conseil Stratégique",
      description: "Analyse approfondie et recommandations personnalisées pour optimiser votre performance immobilière."
    },
    {
      icon: Shield,
      title: "Sécurité & Conformité",
      description: "Protection de vos données et mise en conformité avec les réglementations immobilières en vigueur."
    },
    {
      icon: Clock,
      title: "Gestion Automatisée",
      description: "Suivi rigoureux et traitement automatique de tous vos dossiers et rendez-vous clients."
    },
    {
      icon: Users,
      title: "Support Dédié",
      description: "Une intelligence artificielle disponible 24h/24 pour répondre à toutes vos questions."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation Initiale",
      description: "Nous analysons vos besoins spécifiques en immobilier et définissons ensemble vos objectifs."
    },
    {
      number: "02",
      title: "Configuration IA",
      description: "Paramétrage de votre assistant virtuel selon vos processus et votre clientèle."
    },
    {
      number: "03",
      title: "Intégration",
      description: "Mise en place fluide avec vos outils existants et formation de votre équipe."
    },
    {
      number: "04",
      title: "Optimisation",
      description: "Suivi continu des performances et ajustements pour maximiser votre efficacité."
    }
  ];

  const testimonials = [
    {
      text: "Cette IA a révolutionné notre façon de travailler. Nos clients sont plus satisfaits et notre équipe plus efficace.",
      author: "Marie Dubois",
      role: "Directrice d'Agence, Immobilier Prestige"
    },
    {
      text: "Un gain de temps considérable sur la gestion administrative. L'IA comprend parfaitement le secteur immobilier.",
      author: "Jean Martin",
      role: "Agent Commercial, Century 21"
    },
    {
      text: "Interface intuitive et résultats impressionnants. Nos ventes ont augmenté de 30% depuis l'implémentation.",
      author: "Sophie Bernard",
      role: "Responsable Équipe, Orpi"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#547db4] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IA</span>
              </div>
              <span className="text-xl font-semibold text-foreground">IAssist</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-[#547db4] transition-colors font-medium">Services</a>
              <a href="#process" className="text-muted-foreground hover:text-[#547db4] transition-colors font-medium">Processus</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-[#547db4] transition-colors font-medium">Témoignages</a>
              <Button className="bg-[#547db4] hover:bg-[#3d5a82] text-white">
                Prendre Rendez-vous
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#547db4] via-[#3d5a82] to-[#547db4] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Intelligence Artificielle pour l'Immobilier
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Votre Secrétaire IA
              <span className="block text-white/90">Dédiée à l'Immobilier</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Révolutionnez votre agence immobilière avec une intelligence artificielle qui comprend vos besoins, 
              gère vos rendez-vous et optimise votre relation client.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#547db4] hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                Découvrir nos Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#547db4] font-semibold px-8 py-4 text-lg">
                Demander une Démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Nos Services Spécialisés
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Des solutions d'intelligence artificielle conçues spécifiquement pour les professionnels de l'immobilier
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#547db4]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#547db4] transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-[#547db4] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Notre Processus d'Intégration
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Une approche méthodique pour une intégration parfaite dans votre agence immobilière
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#547db4] to-[#3d5a82] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-[#dee2e3]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ils Nous Font Confiance
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez comment notre IA transforme le quotidien des professionnels de l'immobilier
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-[#547db4] mb-4 opacity-50" />
                  <p className="text-lg mb-6 leading-relaxed italic text-muted-foreground">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#547db4] to-[#3d5a82] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Transformer Votre Agence ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Rejoignez les centaines d'agences immobilières qui ont déjà adopté notre solution d'IA
          </p>
          <Button size="lg" className="bg-white text-[#547db4] hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
            Planifier une Consultation Gratuite
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#547db4] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">IA</span>
                </div>
                <span className="text-xl font-semibold">IAssist</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                L'intelligence artificielle au service de l'immobilier français depuis 2024.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Processus</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Témoignages</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gestion de Rendez-vous</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Relation Client</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Analyses Prédictives</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-[#547db4]" />
                  <span className="text-gray-400">contact@iassist.fr</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-[#547db4]" />
                  <span className="text-gray-400">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-[#547db4]" />
                  <span className="text-gray-400">Lun-Ven: 9h-18h</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 IAssist. Tous droits réservés. | 
              <a href="#" className="hover:text-white transition-colors ml-1">Mentions Légales</a> | 
              <a href="#" className="hover:text-white transition-colors ml-1">Politique de Confidentialité</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
