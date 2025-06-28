
import { useState } from 'react';
import { Clock, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

export default function RendezVous() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: '',
    consent: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Rendez-vous confirmé !",
      description: "Notre équipe vous contactera dans les prochaines 24 heures.",
    });
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="bg-primary text-white py-16 text-center">
          <div className="content-container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Prenez rendez-vous</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Planifiez une consultation avec nos experts pour discuter de vos besoins et objectifs.
            </p>
          </div>
        </section>

        {/* Success Message */}
        <section className="section-padding">
          <div className="content-container max-w-2xl text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="font-display text-2xl font-semibold mb-4">Rendez-vous confirmé !</h3>
              <p className="text-muted-foreground mb-6">
                Nous avons bien reçu votre demande de rendez-vous. Notre équipe vous contactera dans les prochaines 24 heures pour confirmer votre créneau.
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
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Prenez rendez-vous</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Planifiez une consultation avec nos experts pour discuter de vos besoins et objectifs.
          </p>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="section-padding">
        <div className="content-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-3xl font-semibold mb-4">Réservez votre consultation</h2>
                <p className="text-muted-foreground">
                  Remplissez le formulaire ci-contre pour planifier votre rendez-vous. Notre équipe vous contactera dans les plus brefs délais pour confirmer votre créneau.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Disponibilité</h4>
                    <p className="text-sm text-muted-foreground">
                      Lun-Ven: 9h-18h<br />Sam: 9h-12h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Contact Direct</h4>
                    <p className="text-sm text-muted-foreground">
                      +33 1 23 45 67 89<br />contact@proservices.fr
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Adresse</h4>
                    <p className="text-sm text-muted-foreground">
                      123 Avenue Professionnelle<br />75001 Paris
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                  <label htmlFor="phone" className="text-sm font-medium">Téléphone *</label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium">Date *</label>
                    <Input
                      type="date"
                      id="date"
                      name="date"
                      required
                      min={today}
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-medium">Heure *</label>
                    <select
                      id="time"
                      name="time"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      value={formData.time}
                      onChange={handleInputChange}
                    >
                      <option value="">Choisir un créneau</option>
                      <option value="09:00">9:00</option>
                      <option value="09:30">9:30</option>
                      <option value="10:00">10:00</option>
                      <option value="10:30">10:30</option>
                      <option value="11:00">11:00</option>
                      <option value="11:30">11:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                      <option value="15:00">15:00</option>
                      <option value="15:30">15:30</option>
                      <option value="16:00">16:00</option>
                      <option value="16:30">16:30</option>
                      <option value="17:00">17:00</option>
                      <option value="17:30">17:30</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">Service souhaité</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Sélectionner un service</option>
                    <option value="conseil">Conseil Stratégique</option>
                    <option value="securite">Sécurité & Conformité</option>
                    <option value="gestion">Gestion de Projet</option>
                    <option value="support">Support Dédié</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message (optionnel)</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Décrivez brièvement vos besoins ou questions..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked as boolean }))}
                  />
                  <label htmlFor="consent" className="text-sm leading-relaxed">
                    J'accepte que mes données soient utilisées pour traiter ma demande de rendez-vous *
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Confirmer le rendez-vous
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
