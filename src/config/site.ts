/**
 * Site Configuration
 *
 * @description
 * Core site metadata and branding settings.
 * These values can be customized via environment variables or by editing the defaults below.
 */

import type { SocialLinks, LegalConfig } from '../lib/types';

/** Site name displayed in header, footer, and meta tags */
export const name = import.meta.env.SITE_NAME || 'BBA School';

/** Site description for SEO and meta tags */
export const description =
  import.meta.env.SITE_DESCRIPTION ||
  'Centre de formation esthétique certifié Qualiopi. 39 formations à distance — Hydrofacial, Plasma pen, Microblading, Massage — éligibles CPF avec kit offert.';

/** Production URL of your site (used for sitemap, RSS, canonical URLs) */
export const url = import.meta.env.SITE_URL || 'https://sodeva.fr';

/** Author name for meta tags and copyright */
export const author = import.meta.env.SITE_AUTHOR || 'BBA School';

/** Path to logo file (relative to /public) */
export const logo = '/logo.svg';

/** Path to Open Graph image (relative to /public) */
export const ogImage = '/images/og-image.jpg';

/** Social media links */
export const social: SocialLinks = {
  twitter: '',
  github: '',
  discord: '',
};

/** Legal configuration for privacy policy and terms pages */
export const legal: LegalConfig = {
  privacyEmail: 'contact@sodeva.fr',
  legalEmail: 'contact@sodeva.fr',
  lastUpdated: '20 mars 2026',
};
