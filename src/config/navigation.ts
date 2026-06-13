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
      { label: 'Collections', href: '/formations' },
      { label: 'Maison', href: '/organisme' },
      { label: 'Informations', href: '/informations-pratiques' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: [{ label: 'Nous contacter', href: '/contact', variant: 'primary' }],
  },

  /**
   * Footer Navigation
   * Organized into 5 columns: Product, Solutions, Resources, Company, Legal
   */
  footer: {
    product: [
      { label: 'Catalogue des collections', href: '/formations' },
      { label: 'Techniques regard', href: '/formations' },
      { label: 'Protocoles visage', href: '/formations' },
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
      { label: 'La maison', href: '/organisme' },
      { label: 'Contact', href: '/contact' },
      { label: 'Accompagnement', href: '/contact' },
    ],
    legal: [
      { label: 'Mentions légales', href: '/information' },
      { label: 'Confidentialité', href: '/politique-confidentialite' },
      { label: 'Médiation et réclamation', href: '/rnq/reclamation' },
      { label: 'CGV', href: '/rnq/cgv' },
    ],
  },
};
