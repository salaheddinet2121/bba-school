/**
 * Documents Configuration
 *
 * Paths are served from `public/documents/*`.
 * Keep this map as the single source of truth for downloadable files.
 */

export const documents = {
  certificatQualiopi: '/documents/certificat-qualiopi.pdf',
  livretAccueil: '/documents/livret-accueil.pdf',
  reglementInterieur: '/documents/reglement-interieur.pdf',
  cgv: '/documents/cgv.pdf',
  engagementsDeontologiques: '/documents/engagements-deontologiques.pdf',
  programmeCertificationIaGenerative: '/documents/programme-formation-certification-ia-generative-rs6776.pdf',
} as const;
