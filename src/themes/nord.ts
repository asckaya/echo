import { FaRobot, FaBrain, FaGlobe, FaChartBar, FaWrench, FaHeartbeat } from 'react-icons/fa'
import type { ThemeDefinition } from './types'

/**
 * Nord — Arctic, north-bluish colour palette.
 * https://www.nordtheme.com/
 *
 * This is the default TermHub theme and the reference implementation of
 * ThemeDefinition. When creating a new theme, duplicate this file and swap
 * the colour values; no other file needs to change.
 */
export const nordTheme: ThemeDefinition = {
  name: 'Nord',

  // ── CSS custom properties ────────────────────────────────────────────────
  // Injected onto document.documentElement at runtime by ThemeInjector.
  // These drive globals.css utilities and Chakra component variants.

  cssVars: {
    light: {
      '--bg-color': '#f8f9fc',
      '--text-color': '#2b3648',
      '--accent-color': '#5e81ac',
      '--accent-light': 'rgba(94,129,172,0.1)',
      '--secondary-text': '#556582',
      '--border-color': '#cbd5e1',
      '--card-bg': '#ffffff',
      '--header-bg': '#eaeef6',
      '--hover-color': '#eaeef6',
    },
    dark: {
      '--bg-color': '#2e3440',
      '--text-color': '#eceff4',
      '--accent-color': '#88c0d0',
      '--accent-light': 'rgba(136,192,208,0.15)',
      '--secondary-text': '#9099ab',
      '--border-color': '#4c566a',
      '--card-bg': '#3b4252',
      '--header-bg': '#3b4252',
      '--hover-color': '#434c5e',
    },
  },

  // ── Terminal palette ─────────────────────────────────────────────────────

  terminal: {
    /** 7-colour rainbow bar — Aurora + Frost hues */
    rainbow: ['#bf616a', '#d08770', '#ebcb8b', '#a3be8c', '#88c0d0', '#5e81ac', '#b48ead'] as const,

    colors: (dk) => ({
      bg: dk ? '#2e3440' : '#f8f9fc',
      text: dk ? '#eceff4' : '#2b3648',
      header: dk ? '#3b4252' : '#eaeef6',
      border: dk ? '#4c566a' : '#cbd5e1',
      prompt: dk ? '#a3be8c' : '#36805a',
      command: dk ? '#88c0d0' : '#2a769c',
      param: dk ? '#b48ead' : '#9a56a2',
      info: dk ? '#81a1c1' : '#5079ad',
      highlight: dk ? '#ebcb8b' : '#c47d46',
      error: dk ? '#bf616a' : '#b91c1c',
      success: dk ? '#a3be8c' : '#34744e',
      warning: dk ? '#d08770' : '#b35a2e',
      secondary: dk ? '#9099ab' : '#556582',
      muted: dk ? '#627089' : '#9bb0ca',
      touchBar: dk ? '#252b35' : '#e2e6ee',
      tabBar: dk ? '#333a47' : '#e4e9f2',
    }),
  },

  // ── Project category card themes ─────────────────────────────────────────

  categoryThemes: (dk) => ({
    robotics: {
      bg: dk ? '#2b2440' : '#f3eaff',
      border: dk ? '#8a6dd8' : '#a389ea',
      stripe: 'linear-gradient(180deg,#b380ff,transparent)',
      color: dk ? '#c89cff' : '#7a44c0',
      glow: dk ? 'rgba(179,128,255,0.25)' : 'rgba(122,68,192,0.12)',
      icon: FaRobot,
      label: 'ROBOTICS',
      cmd: '$ ros2 launch planner',
    },
    nlp: {
      bg: dk ? '#2e2334' : '#ffeef6',
      border: dk ? '#c26e9c' : '#e899bf',
      stripe: 'linear-gradient(180deg,#ff80bf,transparent)',
      color: dk ? '#f0a0c8' : '#b0447a',
      glow: dk ? 'rgba(255,128,191,0.25)' : 'rgba(176,68,122,0.12)',
      icon: FaBrain,
      label: 'NLP / AI',
      cmd: '$ python train.py',
    },
    'web-app': {
      bg: dk ? '#2e2c2b' : '#fff2e9',
      border: dk ? '#d39d6b' : '#e2b287',
      stripe: 'linear-gradient(180deg,#ffb680,transparent)',
      color: dk ? '#ffbe8d' : '#c27435',
      glow: dk ? 'rgba(255,182,128,0.25)' : 'rgba(194,116,53,0.12)',
      icon: FaGlobe,
      label: 'WEB / APP',
      cmd: '$ npm run dev',
    },
    data: {
      bg: dk ? '#243126' : '#eafff0',
      border: dk ? '#56b07b' : '#77d09a',
      stripe: 'linear-gradient(180deg,#6bd59c,transparent)',
      color: dk ? '#7ce3b6' : '#2f9e6a',
      glow: dk ? 'rgba(107,213,156,0.25)' : 'rgba(47,158,106,0.12)',
      icon: FaChartBar,
      label: 'DATA / ML',
      cmd: '$ jupyter execute',
    },
    tooling: {
      bg: dk ? '#223235' : '#eaffff',
      border: dk ? '#53c2c2' : '#7adcdc',
      stripe: 'linear-gradient(180deg,#7feeee,transparent)',
      color: dk ? '#7feeee' : '#2aa9a9',
      glow: dk ? 'rgba(127,238,238,0.25)' : 'rgba(42,169,169,0.12)',
      icon: FaWrench,
      label: 'TOOLING',
      cmd: '$ make install',
    },
    healthcare: {
      bg: dk ? '#2e2327' : '#fff0f0',
      border: dk ? '#bf616a' : '#e88888',
      stripe: 'linear-gradient(180deg,#ff8080,transparent)',
      color: dk ? '#f09090' : '#c04040',
      glow: dk ? 'rgba(255,128,128,0.25)' : 'rgba(192,64,64,0.12)',
      icon: FaHeartbeat,
      label: 'HEALTHCARE',
      cmd: '$ python recommend.py',
    },
  }),

  // ── Article category badge colors ────────────────────────────────────────

  articleCategoryColors: {
    robotics: {
      fg: (dk) => (dk ? '#c89cff' : '#7a44c0'),
      bg: (dk) => (dk ? 'rgba(200,156,255,0.15)' : 'rgba(122,68,192,0.1)'),
    },
    nlp: {
      fg: (dk) => (dk ? '#f0a0c8' : '#b0447a'),
      bg: (dk) => (dk ? 'rgba(240,160,200,0.15)' : 'rgba(176,68,122,0.1)'),
    },
    'web-app': {
      fg: (dk) => (dk ? '#ffbe8d' : '#c27435'),
      bg: (dk) => (dk ? 'rgba(255,190,141,0.15)' : 'rgba(194,116,53,0.1)'),
    },
    data: {
      fg: (dk) => (dk ? '#7ce3b6' : '#2f9e6a'),
      bg: (dk) => (dk ? 'rgba(124,227,182,0.15)' : 'rgba(47,158,106,0.1)'),
    },
    tooling: {
      fg: (dk) => (dk ? '#7feeee' : '#2aa9a9'),
      bg: (dk) => (dk ? 'rgba(127,238,238,0.15)' : 'rgba(42,169,169,0.1)'),
    },
    healthcare: {
      fg: (dk) => (dk ? '#f09090' : '#c04040'),
      bg: (dk) => (dk ? 'rgba(240,144,144,0.15)' : 'rgba(192,64,64,0.1)'),
    },
  },

  // ── Publication venue badge colors ───────────────────────────────────────

  publicationVenueColors: {
    conference: {
      bg: (dk) => (dk ? 'rgba(136,192,208,0.15)' : 'rgba(42,118,156,0.1)'),
      fg: (dk) => (dk ? '#88c0d0' : '#2a769c'),
      label: 'CONFERENCE',
    },
    workshop: {
      bg: (dk) => (dk ? 'rgba(180,142,173,0.15)' : 'rgba(154,86,162,0.1)'),
      fg: (dk) => (dk ? '#b48ead' : '#9a56a2'),
      label: 'WORKSHOP',
    },
    demo: {
      bg: (dk) => (dk ? 'rgba(208,135,112,0.15)' : 'rgba(179,90,46,0.1)'),
      fg: (dk) => (dk ? '#d08770' : '#b35a2e'),
      label: 'DEMO TRACK',
    },
    preprint: {
      bg: (dk) => (dk ? 'rgba(163,190,140,0.15)' : 'rgba(54,128,90,0.1)'),
      fg: (dk) => (dk ? '#a3be8c' : '#36805a'),
      label: 'PREPRINT',
    },
    journal: {
      bg: (dk) => (dk ? 'rgba(235,203,139,0.15)' : 'rgba(199,116,54,0.1)'),
      fg: (dk) => (dk ? '#ebcb8b' : '#c77436'),
      label: 'JOURNAL',
    },
  },
}
