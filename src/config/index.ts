// Re-export site config (primary config lives in src/site.config.ts)
export { siteOwner, siteConfig, githubUsername, heroSocialIcons, navItems } from '../site.config'

// Theme config
export {
  terminalPalette,
  buildCategoryThemes,
  articleCategoryLabels,
  articleCategoryColors,
  publicationVenueColors,
} from './theme'
export type { CatTheme } from './theme'
