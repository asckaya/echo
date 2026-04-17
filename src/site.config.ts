/**
 * Site configuration — imports from content/site.json
 *
 * Users edit content/site.json (pure JSON, no code needed).
 * This file computes derived values used by components.
 */

import siteJson from '@content/site.json'
import siteJsonZh from '@content/zh/site.json'

// ═══════════════════════════════════════════════════════════════
// The config object — mirrors content/site.json
// ═══════════════════════════════════════════════════════════════

export const siteConfig = siteJson
export const siteConfigZh = siteJsonZh

/** Get site config for a given language */
export function getLocalizedSiteConfig(lang: string) {
  return lang === 'zh' ? siteConfigZh : siteJson
}

// ═══════════════════════════════════════════════════════════════
// Derived values — computed automatically, do NOT edit
// ═══════════════════════════════════════════════════════════════

/** Get GitHub username for a specific language */
export function getLocalizedGithubUsername(lang: string) {
  const cfg = getLocalizedSiteConfig(lang)
  return cfg.social.github.split('/').pop() ?? ''
}

/** GitHub username extracted from URL (static English default) */
export const githubUsername = getLocalizedGithubUsername('en')

/** Selected publication IDs as a Set for fast lookup */
export const selectedPublicationIds = new Set<string>(siteConfig.selectedPublicationIds)

/** Get navigation items for a specific language */
export function getLocalizedNavItems(lang: string) {
  const cfg = getLocalizedSiteConfig(lang)
  return [
    { path: '/', labelKey: 'nav.home' },
    ...(cfg.features.publications ? [{ path: '/publications', labelKey: 'nav.publications' }] : []),
    ...(cfg.features.experience ? [{ path: '/experience', labelKey: 'nav.experience' }] : []),
    ...(cfg.features.projects ? [{ path: '/projects', labelKey: 'nav.projects' }] : []),
    ...(cfg.features.articles ? [{ path: '/articles', labelKey: 'nav.articles' }] : []),
    ...(cfg.features.guide !== false ? [{ path: '/guide', labelKey: 'nav.guide' }] : []),
    ...((cfg.features as Record<string, boolean>).about
      ? [{ path: '/about', labelKey: 'nav.about' }]
      : []),
  ] as const
}

/** Auto-generated navigation from enabled features (static English default) */
export const navItems = getLocalizedNavItems('en')

/** Get hero social icons for a specific language */
export function getLocalizedHeroSocialIcons(lang: string) {
  const cfg = getLocalizedSiteConfig(lang)
  return (cfg.heroSocialIcons ?? []).map((item) => ({
    icon: item.icon,
    label: item.label,
    color: item.color,
    href: (cfg.social as Record<string, string>)[item.platform] ?? '',
  }))
}

/** Hero social icons with resolved URLs (static English default) */
export const heroSocialIcons = getLocalizedHeroSocialIcons('en')

/** Build a siteOwner-like object for a given language */
export function getLocalizedSiteOwner(lang: string) {
  const cfg = getLocalizedSiteConfig(lang)
  return {
    name: cfg.name,
    terminalUsername: cfg.terminal.username,
    rotatingSubtitles: cfg.terminal.rotatingSubtitles,
    contact: {
      email: cfg.contact.email,
      academicEmail: cfg.contact.academicEmail,
      hiringEmail: cfg.contact.hiringEmail,
      location: cfg.contact.location,
      linkedin: cfg.social.linkedin,
    },
    social: cfg.social,
    timezone: cfg.terminal.timezone,
    skills: cfg.terminal.skills,
    pets: (cfg.pets ?? []) as {
      name: string
      emoji: string
      image: string
      title: string
      description: string
    }[],
  }
}

/**
 * Backward-compatible `siteOwner` (static English default).
 * Components should prefer using getLocalizedSiteOwner(lang).
 */
export const siteOwner = getLocalizedSiteOwner('en')
