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
  supportEmail: 'contact@sodeva.fr',
  salesEmail: 'contact@sodeva.fr',
  address: {
    street: '1900 Avenue des Moulins',
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
    label: 'Telephone',
    value: '04 65 84 77 00',
    href: 'tel:+33465847700',
  },
  {
    icon: 'lucide:map-pin',
    label: 'Adresse',
    value: '1900 Avenue des Moulins, 34080 Montpellier',
    href: 'https://maps.google.com/?q=1900+Avenue+des+Moulins+34080+Montpellier',
  },
];

/** FAQ items displayed on the contact page */
export const contactFAQs: ContactFAQ[] = [
  {
    question: 'Sous quel delai recevez-vous une reponse ?',
    answer: 'Nous vous repondons generalement sous 48 heures ouvrees.',
  },
  {
    question: 'Comment faire une reclamation ?',
    answer:
      'Envoyez votre demande a contact@sodeva.fr avec "Reclamation" dans l objet. Un accuse de reception vous est transmis.',
  },
  {
    question: 'Proposez-vous un accompagnement handicap ?',
    answer:
      'Oui. Nous etudions chaque besoin avec notre referent handicap pour adapter le parcours de formation.',
  },
];
