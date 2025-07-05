
import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
        <Header />
        
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="content-container relative z-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Contactez-nous pour toute question ou demande d'information
            </p>
          </div>
        </section>

        {/* Success Message */}
        <section className="section-padding">
          <div className="content-container max-w-2xl text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200/50">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="font-display text-2xl font-semibold mb-4">Message envoyé !</h3>
              <p className="text-muted-foreground mb-6">
                Nous avons bien reçu votre message. Notre équipe vous répondra dans les plus brefs délais.
              </p>
              <Button variant="secondary" onClick={() => window.location.href = '/'}>
                Retour à l'accueil
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="content-container relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Contactez-nous pour toute question ou demande d'information
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="content-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Contact Form */}
            <div className="space-y-8">
              <div>
                <p className="text-muted-foreground mb-8 text-lg">
                  Vous avez une question ? Besoin d'un conseil rapide ? Écrivez-nous directement ici :
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200/50 h-fit">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Nom *</label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Votre nom"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-slate-700">Prénom *</label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Votre prénom"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Adresse e-mail *</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-700">Nom de l'entreprise (facultatif)</label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Nom de votre entreprise"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">Message libre *</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Décrivez votre demande ou vos questions..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Envoyer le message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Champs obligatoires
                  </p>
                </form>
              </div>
            </div>

            {/* Right Column - Calendly Integration */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="font-display text-3xl font-semibold mb-4">Planifiez un appel en un clic</h2>
                <p className="text-muted-foreground text-lg">
                  Choisissez le créneau qui vous convient pour discuter de vos enjeux.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-slate-200/50 overflow-hidden h-fit">
                {/* Calendly Embed */}
                <div className="h-[600px] w-full">
                  <iframe
                    src="https://calendly.com/votre-lien-calendly"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Planifier un rendez-vous"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/50">
                <h4 className="font-semibold mb-4 text-slate-900">Autres moyens de nous contacter</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">contact@proservices.fr</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Téléphone</p>
                      <p className="text-sm text-muted-foreground">+33 1 23 45 67 89</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Adresse</p>
                      <p className="text-sm text-muted-foreground">
                        123 Avenue Professionnelle<br />
                        75001 Paris, France
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Block */}
          <div className="mt-16 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/50 max-w-2xl mx-auto">
              <p className="text-slate-700 font-medium">
                Nous répondons sous 24h. Vos données restent confidentielles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
