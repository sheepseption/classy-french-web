
import { Button } from "@/components/ui/button";
import { BarChart3, Shield, Clock, Users, Star, ArrowRight, CheckCircle, Sparkles, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200/50">
        <nav className="content-container">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h2 className="text-2xl font-display font-bold text-primary">IAssist</h2>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={scrollToTop}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium cursor-pointer hover:scale-105"
              >
                Accueil
              </button>
              <a href="#services" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105">
                Services
              </a>
              <a href="#process" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105">
                Processus
              </a>
              <Button asChild variant="default" className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
        {/* Hero Section with Visual Enhancement */}
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/80 to-purple-900/90"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative content-container flex items-center min-h-screen pt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left Content */}
              <div className="text-white space-y-8 animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-sm font-medium">Intelligence Artificielle de Nouvelle Génération</span>
                </div>
                
                <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
                  Transformez Votre
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Entreprise
                  </span>
                  avec l'IA
                </h1>
                
                <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
                  Découvrez des solutions d'intelligence artificielle sur mesure qui révolutionnent votre façon de travailler et multiplient votre efficacité.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
                    <a href="#services" className="flex items-center">
                      Découvrir nos Services
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                    <Link to="/rendez-vous">Prendre Rendez-vous</Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-sm text-blue-200">Clients Satisfaits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-sm text-blue-200">Taux de Réussite</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-blue-200">Support Dédié</div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Intelligence Artificielle"
                    className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
                  
                  {/* Floating Cards */}
                  <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-2xl animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-800">IA Active</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-800">Performance +40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section Enhanced */}
        <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="content-container">
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Target className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm font-medium text-primary">Nos Solutions IA</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Des Services qui Transforment
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Découvrez comment notre intelligence artificielle révolutionne chaque aspect de votre activité
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Conseil Stratégique IA",
                  description: "Analyse prédictive et recommandations personnalisées powered by AI pour optimiser votre performance.",
                  image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Sécurité Intelligente",
                  description: "Protection avancée avec détection automatique des menaces et conformité intelligente.",
                  image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Automation Intelligente",
                  description: "Automatisation des processus avec IA pour une gestion de projet optimisée et prédictive.",
                  image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Support IA 24/7",
                  description: "Assistant virtuel intelligent disponible en permanence pour répondre à vos besoins.",
                  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                  color: "from-orange-500 to-red-500"
                }
              ].map((service, index) => (
                <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 animate-slide-in-left" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                    <div className="absolute top-4 left-4 text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section with Visual Timeline */}
        <section id="process" className="py-24 bg-gradient-to-r from-slate-900 to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative content-container">
            <div className="text-center mb-20 animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Notre Méthodologie
                <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  Éprouvée
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Un processus structuré et transparent pour garantir votre succès
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>
              
              <div className="space-y-12 lg:space-y-24">
                {[
                  {
                    number: "1",
                    title: "Consultation & Analyse IA",
                    description: "Audit intelligent de vos besoins avec notre IA propriétaire pour identifier les opportunités d'optimisation.",
                    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    position: "left"
                  },
                  {
                    number: "2",
                    title: "Stratégie Personnalisée",
                    description: "Conception d'une roadmap sur mesure avec solutions IA adaptées à votre secteur et vos objectifs.",
                    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    position: "right"
                  },
                  {
                    number: "3",
                    title: "Implémentation Intelligente",
                    description: "Déploiement progressif avec monitoring en temps réel et ajustements automatiques.",
                    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    position: "left"
                  },
                  {
                    number: "4",
                    title: "Optimisation Continue",
                    description: "Amélioration permanente grâce à l'apprentissage automatique et l'analyse prédictive.",
                    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    position: "right"
                  }
                ].map((step, index) => (
                  <div key={index} className={`flex items-center gap-8 lg:gap-16 ${step.position === 'right' ? 'lg:flex-row-reverse' : ''} animate-fade-in`} style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="flex-1 max-w-lg">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                            {step.number}
                          </div>
                          <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">{step.description}</p>
                      </div>
                    </div>
                    <div className="flex-1 max-w-lg">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Trust Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="content-container">
            <div className="text-center mb-20 animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Ils Transforment leur Business avec Nous
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Découvrez comment nos clients révolutionnent leur activité
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  text: "Grâce à l'IA d'IAssist, nous avons automatisé 80% de nos processus et multiplié notre productivité par 3. Une révolution !",
                  author: "Marie Dubois",
                  role: "CEO, TechCorp",
                  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                  rating: 5,
                  highlight: "+300% productivité"
                },
                {
                  text: "L'intelligence artificielle personnalisée a transformé notre prise de décision. Nous anticipons maintenant les tendances du marché.",
                  author: "Jean Martin",
                  role: "Directeur Innovation, InnovateSolutions",
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                  rating: 5,
                  highlight: "Prédictions à 95%"
                },
                {
                  text: "Un partenaire technologique exceptionnel. Leur IA sur mesure nous donne un avantage concurrentiel décisif.",
                  author: "Sophie Bernard",
                  role: "CTO, GlobalFinance",
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                  rating: 5,
                  highlight: "ROI +250%"
                }
              ].map((testimonial, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border hover:border-primary/20 relative overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                      {testimonial.highlight}
                    </div>
                    
                    <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">"{testimonial.text}"</p>
                    
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              {["TechCorp", "InnovateSolutions", "GlobalFinance", "FutureAI"].map((company, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground mb-2">{company}</div>
                  <div className="text-sm text-muted-foreground">Partenaire depuis 2023</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative content-container text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="font-medium">Rejoignez la Révolution IA</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Prêt à Multiplier
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Votre Performance ?
                </span>
              </h2>
              
              <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Découvrez comment notre IA sur mesure peut transformer votre entreprise dès aujourd'hui. 
                Consultation gratuite et sans engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-black font-semibold shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 group px-8 py-4 text-lg">
                  <Link to="/rendez-vous" className="flex items-center">
                    Démarrer Maintenant
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <div className="text-center sm:text-left">
                  <div className="text-sm text-gray-300 mb-1">🚀 Résultats garantis sous 30 jours</div>
                  <div className="text-sm text-gray-300">💡 Consultation gratuite offerte</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-black text-white py-20">
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
