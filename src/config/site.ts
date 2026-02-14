/**
 * Site Configuration
 *
 * @description
 * Core site metadata and branding settings.
 * These values can be customized via environment variables or by editing the defaults below.
 */

import type { SocialLinks, LegalConfig } from '../lib/types';

/** Site name displayed in header, footer, and meta tags */
export const name = import.meta.env.SITE_NAME || 'SODEVA';

/** Site description for SEO and meta tags */
export const description =
  import.meta.env.SITE_DESCRIPTION ||
  'Centre de formation certifié Qualiopi pour le développement des compétences professionnelles';

/** Production URL of your site (used for sitemap, RSS, canonical URLs) */
export const url = import.meta.env.SITE_URL || 'https://sodeva.fr';

/** Author name for meta tags and copyright */
export const author = import.meta.env.SITE_AUTHOR || 'SODEVA';

/** Path to logo file (relative to /public) */
export const logo = '/logo.webp';

/** Path to Open Graph image (relative to /public) */
export const ogImage = '/images/og-image.png';

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
  lastUpdated: 'December 1, 2025',
};
