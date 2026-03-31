/**
 * Contact Page Configuration
 *
 * @description
 * Contact information, methods, and FAQ data for the contact page.
 * Modify these values to customize your contact page content.
 */

import type { ContactInfo, ContactMethod, ContactFAQ } from '../lib/types';

/** Contact information used across contact page and legal pages */
export const contact: ContactInfo = {
  email: 'contact@sodeva.fr',
  phone: '+33467793752',
  supportEmail: 'contact@sodeva.fr',
  salesEmail: 'contact@sodeva.fr',
  address: {
    street: '534 Rue Marius Petipa',
    city: 'Montpellier',
    state: 'Occitanie',
    zip: '34080',
    country: 'France',
  },
};

/** Contact methods displayed on the contact page */
export const contactMethods: ContactMethod[] = [
  {
    icon: 'lucide:mail',
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: 'lucide:phone',
    label: 'Téléphone',
    value: '04 67 79 37 52',
    href: `tel:${contact.phone}`,
  },
  {
    icon: 'lucide:map-pin',
    label: 'Adresse',
    value: '534 Rue Marius Petipa, 34080 Montpellier',
    href: 'https://maps.google.com/?q=534+Rue+Marius+Petipa+34080+Montpellier',
  },
];

/** FAQ items displayed on the contact page */
export const contactFAQs: ContactFAQ[] = [
  {
    question: 'Sous quel délai recevez-vous une réponse ?',
    answer: 'Nous vous répondons généralement sous 48 heures ouvrées.',
  },
  {
    question: 'Comment faire une réclamation ?',
    answer:
      'Envoyez votre demande à contact@sodeva.fr avec "Réclamation" dans l\'objet. Un accusé de réception vous est transmis.',
  },
  {
    question: 'Proposez-vous un accompagnement handicap ?',
    answer:
      'Oui. Nous étudions chaque besoin avec notre référent handicap pour adapter le parcours de formation.',
  },
];
