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
import { documents } from './documents';

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
    cta: [{ label: 'Contacter', href: '/contact', variant: 'primary' }],
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
      { label: 'Médiation et réclamation', href: '/rnq/reclamation' },
      { label: "Livret d'accueil", href: '/rnq/livret-accueil' },
      { label: 'Règlement intérieur', href: '/rnq/reglement-interieur' },
      { label: 'Engagements déontologiques', href: '/rnq/engagements-deontologiques' },
      { label: 'CGV', href: '/rnq/cgv' },
    ],
    resources: [
      { label: 'Bloc Qualiopi', href: '/#qualiopi' },
      { label: 'Voir le certificat', href: documents.certificatQualiopi },
      { label: 'Mentions légales', href: '/information' },
      { label: 'Confidentialité', href: '/politique-confidentialite' },
    ],
    company: [
      { label: "L'organisme", href: '/organisme' },
      { label: 'Contact', href: '/contact' },
      { label: 'Horaires', href: '/contact' },
    ],
    legal: [
      { label: 'Mentions légales', href: '/information' },
      { label: 'Confidentialité', href: '/politique-confidentialite' },
      { label: 'Médiation et réclamation', href: '/rnq/reclamation' },
      { label: 'CGV', href: '/rnq/cgv' },
    ],
  },
};
