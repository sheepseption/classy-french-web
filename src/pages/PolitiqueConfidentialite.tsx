
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="content-container relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Comment nous protégeons et utilisons vos données personnelles
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="content-container max-w-4xl">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200/50">
            <p className="text-muted-foreground text-lg text-center">
              Cette page sera bientôt complétée avec notre politique de confidentialité.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="content-container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">IAssist</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Préservation du savoir d'entreprise depuis 2010. Votre continuité est notre priorité.
              </p>
              <p className="text-yellow-400 font-medium">
                Vous dépendez d'une personne clé ? Discutons-en.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Préservation du Savoir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Assistant IA Conversationnel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Réduction des Dépendances</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transmission Interne</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@iassist.fr</li>
                <li>Tél: +33 1 23 45 67 89</li>
                <li>Lun-Ven: 9h-18h</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IAssist. Tous droits réservés. | <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link> | <Link to="/politique-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
