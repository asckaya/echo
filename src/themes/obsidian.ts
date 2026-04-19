import { type TerminalColors, type ThemeDefinition } from './types'

const obsidianDarkColors: TerminalColors = {
  bg: '#09090b', // zinc-950
  border: '#27272a', // zinc-800
  command: '#a1a1aa', // zinc-400
  error: '#f43f5e', // rose-500
  header: '#18181b', // zinc-900
  highlight: '#fafafa', // zinc-50
  info: '#3f3f46', // zinc-700
  muted: '#52525b', // zinc-600
  param: '#d4d4d8', // zinc-300
  prompt: '#71717a', // zinc-500
  secondary: '#a1a1aa', // zinc-400
  success: '#10b981', // emerald-500
  tabBar: '#09090b',
  text: '#e4e4e7', // zinc-200
  touchBar: '#18181b',
  warning: '#f59e0b', // amber-500
}

const obsidianLightColors: TerminalColors = {
  bg: '#ffffff',
  border: '#e4e4e7', // zinc-200
  command: '#18181b', // zinc-900
  error: '#e11d48', // rose-600
  header: '#f4f4f5', // zinc-100
  highlight: '#09090b', // zinc-950
  info: '#71717a', // zinc-500
  muted: '#a1a1aa', // zinc-400
  param: '#3f3f46', // zinc-700
  prompt: '#52525b', // zinc-600
  secondary: '#71717a', // zinc-500
  success: '#059669', // emerald-600
  tabBar: '#ffffff',
  text: '#09090b', // zinc-950
  touchBar: '#f4f4f5', // zinc-100
  warning: '#d97706', // amber-600
}

export const obsidianTheme: ThemeDefinition = {
  articleCategoryColors: {
    data: { bg: () => '#27272a', fg: () => '#fafafa' },
    healthcare: { bg: () => '#27272a', fg: () => '#fafafa' },
    nlp: { bg: () => '#27272a', fg: () => '#fafafa' },
    robotics: { bg: () => '#27272a', fg: () => '#fafafa' },
    tooling: { bg: () => '#27272a', fg: () => '#fafafa' },
    'web-app': { bg: () => '#27272a', fg: () => '#fafafa' },
  },
  categoryThemes: () => ({
    data: {
      bg: '#09090b',
      border: '#27272a',
      cmd: 'grep',
      color: '#71717a',
      glow: 'rgba(113, 113, 122, 0.2)',
      icon: () => null,
      label: 'DATA',
      stripe: '#27272a',
    },
    healthcare: {
      bg: '#09090b',
      border: '#27272a',
      cmd: 'stats',
      color: '#71717a',
      glow: 'rgba(113, 113, 122, 0.2)',
      icon: () => null,
      label: 'HEALTH',
      stripe: '#27272a',
    },
    nlp: {
      bg: '#09090b',
      border: '#27272a',
      cmd: 'parse',
      color: '#71717a',
      glow: 'rgba(113, 113, 122, 0.2)',
      icon: () => null,
      label: 'NLP',
      stripe: '#27272a',
    },
    robotics: {
      bg: '#09090b',
      border: '#27272a',
      cmd: 'move',
      color: '#71717a',
      glow: 'rgba(113, 113, 122, 0.2)',
      icon: () => null,
      label: 'ROBOT',
      stripe: '#27272a',
    },
    tooling: {
      bg: '#09090b',
      border: '#27272a',
      cmd: 'build',
      color: '#71717a',
      glow: 'rgba(113, 113, 122, 0.2)',
      icon: () => null,
      label: 'TOOL',
      stripe: '#27272a',
    },
    'web-app': {
      bg: '#09090b',
      border: '#27272a',
      cmd: 'serve',
      color: '#71717a',
      glow: 'rgba(113, 113, 122, 0.2)',
      icon: () => null,
      label: 'WEB',
      stripe: '#27272a',
    },
  }),
  cssVars: {
    dark: {
      '--accent-color': '#fafafa',
      '--accent-light': '#71717a',
      '--bg-color': '#09090b',
      '--border-color': '#27272a',
      '--card-bg': '#09090b',
      '--header-bg': '#18181b',
      '--hover-color': '#18181b',
      '--secondary-text': '#a1a1aa',
      '--text-color': '#e4e4e7',
    },
    light: {
      // Obsidian is primarily a dark theme, but we provide a high-contrast light fallback
      '--accent-color': '#09090b',
      '--accent-light': '#71717a',
      '--bg-color': '#ffffff',
      '--border-color': '#e4e4e7',
      '--card-bg': '#ffffff',
      '--header-bg': '#f4f4f5',
      '--hover-color': '#f4f4f5',
      '--secondary-text': '#71717a',
      '--text-color': '#09090b',
    },
  },
  name: 'Obsidian',
  publicationVenueColors: {
    conference: { bg: () => '#27272a', fg: () => '#fafafa', label: 'CONF' },
    default: { bg: () => '#27272a', fg: () => '#fafafa', label: 'PUB' },
    demo: { bg: () => '#27272a', fg: () => '#fafafa', label: 'DEMO' },
    journal: { bg: () => '#27272a', fg: () => '#fafafa', label: 'JOURNAL' },
    preprint: { bg: () => '#27272a', fg: () => '#fafafa', label: 'PREPRINT' },
    workshop: { bg: () => '#27272a', fg: () => '#fafafa', label: 'WORK' },
  },
  terminal: {
    colors: (dark) => (dark ? obsidianDarkColors : obsidianLightColors),
    rainbow: ['#27272a', '#3f3f46', '#52525b', '#71717a', '#a1a1aa', '#d4d4d8', '#fafafa'],
  },
}
