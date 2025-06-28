
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
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
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="bg-primary text-white py-16 text-center">
          <div className="content-container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Contactez-nous pour toute question ou demande d'information
            </p>
          </div>
        </section>

        {/* Success Message */}
        <section className="section-padding">
          <div className="content-container max-w-2xl text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
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
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-primary text-white py-16 text-center">
        <div className="content-container">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Contactez-nous pour toute question ou demande d'information
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="content-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-semibold mb-4">Parlons de votre projet</h2>
                <p className="text-muted-foreground mb-6">
                  Notre équipe d'experts est là pour répondre à toutes vos questions et vous accompagner dans vos projets.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">contact@proservices.fr</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adresse</h4>
                    <p className="text-muted-foreground">
                      123 Avenue Professionnelle<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horaires</h4>
                    <p className="text-muted-foreground">
                      Lun-Ven: 9h-18h<br />
                      Sam: 9h-12h
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Temps de réponse
                </h4>
                <p className="text-sm text-muted-foreground">
                  Nous nous engageons à répondre à votre message dans les 24 heures ouvrées.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">Prénom *</label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Votre prénom"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Nom *</label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Votre nom"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">E-mail *</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Téléphone</label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Entreprise</label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Nom de votre entreprise"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Sujet *</label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Objet de votre message"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Décrivez votre demande ou vos questions..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Envoyer le message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Champs obligatoires
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
