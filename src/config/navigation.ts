/**
 * Navigation Configuration
 *
 * @description
 * Centralized navigation configuration for header and footer.
 * All navigation items are defined here for consistency and easy maintenance.
 *
 * Items with a `feature` property will only be shown if that feature is enabled
 * in the site config's feature flags.
 */

import type { Navigation } from '../lib/types';

export const navigation: Navigation = {
  /**
   * Header Navigation
   * - main: Primary navigation links
   * - cta: Call-to-action buttons on the right
   */
  header: {
    main: [
      { label: 'Accueil', href: '/' },
      { label: 'Formations', href: '/formations' },
      { label: "L'organisme", href: '/organisme' },
      { label: 'Informations pratiques', href: '/informations-pratiques' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: [],
  },

  /**
   * Footer Navigation
   * Organized into 5 columns: Product, Solutions, Resources, Company, Legal
   */
  footer: {
    product: [
      { label: 'Catalogue des formations', href: '/formations' },
      { label: 'Formation administrative', href: '/formations' },
      { label: 'Formation communication', href: '/formations' },
    ],
    solutions: [
      { label: 'Resultats & indicateurs', href: '/informations-pratiques#resultats-indicateurs' },
      { label: 'Livret d accueil', href: '/informations-pratiques#livret-accueil' },
      { label: 'Reclamation', href: '/informations-pratiques#reclamation' },
      { label: 'Accessibilite handicap', href: '/informations-pratiques#accessibilite' },
    ],
    resources: [
      { label: 'Bloc Qualiopi', href: '/#qualiopi' },
      { label: 'Voir le certificat', href: 'https://api-sodeva.fr/certificat_qualiopi_sodeva.pdf' },
      { label: 'Mentions legales', href: '/information' },
    ],
    company: [
      { label: 'L organisme', href: '/organisme' },
      { label: 'Contact', href: '/contact' },
      { label: 'Horaires', href: '/contact' },
    ],
    legal: [
      { label: 'Mentions legales', href: '/information' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};
