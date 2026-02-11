/**
 * Content Strings Configuration
 *
 * @description
 * Configurable text content for various site sections.
 * Modify these to customize messaging without touching component code.
 */

import type { AnnouncementConfig, ContentStrings } from '../lib/types';

/** Announcement bar configuration */
export const announcement: AnnouncementConfig = {
  /** Show/hide the announcement bar */
  enabled: false,

  /** Unique ID - change this to reset dismissal for new announcements */
  id: 'rnq-qualiopi-2026',

  /** Announcement text */
  text: 'SODEVA est certifie Qualiopi',

  /** Optional link URL */
  href: '/#qualiopi',

  /** Optional link text */
  linkText: 'Voir le certificat',

  /** Visual style: 'primary' | 'secondary' | 'gradient' */
  variant: 'primary',

  /** Allow users to dismiss the announcement */
  dismissible: true,
};

/** Configurable content strings for various sections */
export const content: ContentStrings = {
  newsletter: {
    title: 'Recevoir nos informations',
    description: 'Restez informe des nouvelles sessions et des informations pratiques.',
    placeholder: 'Votre email',
    buttonText: 'Envoyer',
    successMessage: 'Merci, votre demande a bien ete prise en compte.',
    errorMessage: 'Une erreur est survenue. Merci de reessayer.',
    privacyNote: 'Vos donnees restent confidentielles.',
  },
};
