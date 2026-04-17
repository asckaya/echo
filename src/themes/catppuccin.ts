import { FaRobot, FaBrain, FaGlobe, FaChartBar, FaWrench, FaHeartbeat } from 'react-icons/fa'
import type { ThemeDefinition } from './types'

// ─────────────────────────────────────────────────────────────────────────────
// Internal types
// ─────────────────────────────────────────────────────────────────────────────

interface CatppuccinoFlavor {
  // ── Neutral scale (dark → light within each flavor) ──
  crust: string
  mantle: string
  base: string
  surface0: string
  surface1: string
  surface2: string
  overlay0: string
  overlay1: string
  overlay2: string
  subtext0: string
  subtext1: string
  text: string
  // ── Accent colors ──────────────────────────────────
  rosewater: string
  flamingo: string
  pink: string
  mauve: string
  red: string
  maroon: string
  peach: string
  yellow: string
  green: string
  teal: string
  sky: string
  sapphire: string
  blue: string
  lavender: string
}

// ─────────────────────────────────────────────────────────────────────────────
// Utility
// ─────────────────────────────────────────────────────────────────────────────

/** Convert a 6-digit hex color to a comma-separated RGB triplet for use in rgba(). */
function hex2rgb(hex: string): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `${r}, ${g}, ${b}`
}

/** Build a semi-transparent overlay: rgba(accentHex, alpha). */
const tint = (hex: string, alpha: number) => `rgba(${hex2rgb(hex)}, ${alpha})`

// ─────────────────────────────────────────────────────────────────────────────
// Flavor palettes — exact values from https://catppuccin.com/palette/
// ─────────────────────────────────────────────────────────────────────────────

/** Latte — the one light flavor; used as the light-mode companion for every theme. */
const latte: CatppuccinoFlavor = {
  crust: '#dce0e8',
  mantle: '#e6e9ef',
  base: '#eff1f5',
  surface0: '#ccd0da',
  surface1: '#bcc0cc',
  surface2: '#acb0be',
  overlay0: '#9ca0b0',
  overlay1: '#8c8fa1',
  overlay2: '#7c7f93',
  subtext0: '#6c6f85',
  subtext1: '#5c5f77',
  text: '#4c4f69',
  rosewater: '#dc8a78',
  flamingo: '#dd7878',
  pink: '#ea76cb',
  mauve: '#8839ef',
  red: '#d20f39',
  maroon: '#e64553',
  peach: '#fe640b',
  yellow: '#df8e1d',
  green: '#40a02b',
  teal: '#179299',
  sky: '#04a5e5',
  sapphire: '#209fb5',
  blue: '#1e66f5',
  lavender: '#7287fd',
}

/** Frappé — subdued dark with muted, cooler tones. */
const frappe: CatppuccinoFlavor = {
  crust: '#232634',
  mantle: '#292c3c',
  base: '#303446',
  surface0: '#414559',
  surface1: '#51576d',
  surface2: '#626880',
  overlay0: '#737994',
  overlay1: '#838ba7',
  overlay2: '#949cbb',
  subtext0: '#a5adce',
  subtext1: '#b5bfe2',
  text: '#c6d0f5',
  rosewater: '#f2d5cf',
  flamingo: '#eebebe',
  pink: '#f4b8e4',
  mauve: '#ca9ee6',
  red: '#e78284',
  maroon: '#ea999c',
  peach: '#ef9f76',
  yellow: '#e5c890',
  green: '#a6d189',
  teal: '#81c8be',
  sky: '#99d1db',
  sapphire: '#85c1dc',
  blue: '#8caaee',
  lavender: '#babbf1',
}

/** Macchiato — medium contrast with gentle, soothing colors. */
const macchiato: CatppuccinoFlavor = {
  crust: '#181926',
  mantle: '#1e2030',
  base: '#24273a',
  surface0: '#363a4f',
  surface1: '#494d64',
  surface2: '#5b6078',
  overlay0: '#6e738d',
  overlay1: '#8087a2',
  overlay2: '#939ab7',
  subtext0: '#a5adcb',
  subtext1: '#b8c0e0',
  text: '#cad3f5',
  rosewater: '#f4dbd6',
  flamingo: '#f0c6c6',
  pink: '#f5bde6',
  mauve: '#c6a0f6',
  red: '#ed8796',
  maroon: '#ee99a0',
  peach: '#f5a97f',
  yellow: '#eed49f',
  green: '#a6da95',
  teal: '#8bd5ca',
  sky: '#91d7e3',
  sapphire: '#7dc4e4',
  blue: '#8aadf4',
  lavender: '#b7bdf8',
}

/** Mocha — the original; darkest variant with color-rich accents. */
const mocha: CatppuccinoFlavor = {
  crust: '#11111b',
  mantle: '#181825',
  base: '#1e1e2e',
  surface0: '#313244',
  surface1: '#45475a',
  surface2: '#585b70',
  overlay0: '#6c7086',
  overlay1: '#7f849c',
  overlay2: '#9399b2',
  subtext0: '#a6adc8',
  subtext1: '#bac2de',
  text: '#cdd6f4',
  rosewater: '#f5e0dc',
  flamingo: '#f2cdcd',
  pink: '#f5c2e7',
  mauve: '#cba6f7',
  red: '#f38ba8',
  maroon: '#eba0ac',
  peach: '#fab387',
  yellow: '#f9e2af',
  green: '#a6e3a1',
  teal: '#94e2d5',
  sky: '#89dceb',
  sapphire: '#74c7ec',
  blue: '#89b4fa',
  lavender: '#b4befe',
}

// ─────────────────────────────────────────────────────────────────────────────
// Factory
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Build a complete ThemeDefinition for a Catppuccin flavor pair.
 *
 * @param name        Human-readable theme name shown in dev tooling.
 * @param darkFlavor  The dark-mode Catppuccin flavor (Frappé / Macchiato / Mocha).
 * @param lightFlavor The light-mode flavor — defaults to Latte, the only light flavor.
 */
function makeCatppuccinoTheme(
  name: string,
  darkFlavor: CatppuccinoFlavor,
  lightFlavor: CatppuccinoFlavor = latte,
): ThemeDefinition {
  // ── CSS custom properties ──────────────────────────────────────────────────
  const cssVars: ThemeDefinition['cssVars'] = {
    light: {
      '--bg-color': lightFlavor.base,
      '--text-color': lightFlavor.text,
      '--accent-color': lightFlavor.blue,
      '--accent-light': tint(lightFlavor.blue, 0.1),
      '--secondary-text': lightFlavor.subtext0,
      '--border-color': lightFlavor.surface1,
      '--card-bg': lightFlavor.mantle,
      '--header-bg': lightFlavor.mantle,
      '--hover-color': lightFlavor.surface0,
    },
    dark: {
      '--bg-color': darkFlavor.base,
      '--text-color': darkFlavor.text,
      '--accent-color': darkFlavor.blue,
      '--accent-light': tint(darkFlavor.blue, 0.15),
      '--secondary-text': darkFlavor.subtext0,
      '--border-color': darkFlavor.surface1,
      '--card-bg': darkFlavor.mantle,
      '--header-bg': darkFlavor.mantle,
      '--hover-color': darkFlavor.surface0,
    },
  }

  // ── Terminal palette ───────────────────────────────────────────────────────
  const terminal: ThemeDefinition['terminal'] = {
    // 7-colour rainbow: red → peach → yellow → green → sky → blue → mauve
    // (follows the Catppuccin accent hue wheel)
    rainbow: [
      darkFlavor.red,
      darkFlavor.peach,
      darkFlavor.yellow,
      darkFlavor.green,
      darkFlavor.sky,
      darkFlavor.blue,
      darkFlavor.mauve,
    ],

    colors: (isDark) => {
      const p = isDark ? darkFlavor : lightFlavor
      return {
        bg: p.base,
        text: p.text,
        header: p.mantle,
        border: p.surface1,
        prompt: p.green,
        command: p.sky,
        param: p.mauve,
        info: p.sapphire,
        highlight: p.yellow,
        error: p.red,
        success: p.green,
        warning: p.peach,
        secondary: p.subtext1,
        muted: p.overlay1,
        touchBar: p.crust,
        tabBar: p.mantle,
      }
    },
  }

  // ── Category card themes ───────────────────────────────────────────────────
  // Each card gets a semi-transparent accent tint layered over the base
  // background, keeping the palette's character without fully saturating.

  type CatFn = (
    accent: string,
    isDark: boolean,
  ) => {
    bg: string
    border: string
    stripe: string
    color: string
    glow: string
  }

  const catColors: CatFn = (accent, isDark) => ({
    bg: tint(accent, isDark ? 0.12 : 0.08),
    border: tint(accent, isDark ? 0.55 : 0.45),
    stripe: `linear-gradient(180deg, ${tint(accent, 0.65)}, transparent)`,
    color: accent,
    glow: tint(accent, isDark ? 0.28 : 0.14),
  })

  const categoryThemes: ThemeDefinition['categoryThemes'] = (isDark) => {
    const p = isDark ? darkFlavor : lightFlavor
    return {
      robotics: {
        ...catColors(p.mauve, isDark),
        icon: FaRobot,
        label: 'ROBOTICS',
        cmd: '$ ros2 launch planner',
      },
      nlp: {
        ...catColors(p.pink, isDark),
        icon: FaBrain,
        label: 'NLP / AI',
        cmd: '$ python train.py',
      },
      'web-app': {
        ...catColors(p.peach, isDark),
        icon: FaGlobe,
        label: 'WEB / APP',
        cmd: '$ npm run dev',
      },
      data: {
        ...catColors(p.green, isDark),
        icon: FaChartBar,
        label: 'DATA / ML',
        cmd: '$ jupyter execute',
      },
      tooling: {
        ...catColors(p.teal, isDark),
        icon: FaWrench,
        label: 'TOOLING',
        cmd: '$ make install',
      },
      healthcare: {
        ...catColors(p.red, isDark),
        icon: FaHeartbeat,
        label: 'HEALTHCARE',
        cmd: '$ python recommend.py',
      },
    }
  }

  // ── Article category badge colors ──────────────────────────────────────────
  const articleCategoryColors: ThemeDefinition['articleCategoryColors'] = {
    robotics: {
      fg: (dk) => (dk ? darkFlavor.mauve : lightFlavor.mauve),
      bg: (dk) => tint(dk ? darkFlavor.mauve : lightFlavor.mauve, 0.15),
    },
    nlp: {
      fg: (dk) => (dk ? darkFlavor.pink : lightFlavor.pink),
      bg: (dk) => tint(dk ? darkFlavor.pink : lightFlavor.pink, 0.15),
    },
    'web-app': {
      fg: (dk) => (dk ? darkFlavor.peach : lightFlavor.peach),
      bg: (dk) => tint(dk ? darkFlavor.peach : lightFlavor.peach, 0.15),
    },
    data: {
      fg: (dk) => (dk ? darkFlavor.green : lightFlavor.green),
      bg: (dk) => tint(dk ? darkFlavor.green : lightFlavor.green, 0.15),
    },
    tooling: {
      fg: (dk) => (dk ? darkFlavor.teal : lightFlavor.teal),
      bg: (dk) => tint(dk ? darkFlavor.teal : lightFlavor.teal, 0.15),
    },
    healthcare: {
      fg: (dk) => (dk ? darkFlavor.red : lightFlavor.red),
      bg: (dk) => tint(dk ? darkFlavor.red : lightFlavor.red, 0.15),
    },
  }

  // ── Publication venue badge colors ─────────────────────────────────────────
  const publicationVenueColors: ThemeDefinition['publicationVenueColors'] = {
    conference: {
      fg: (dk) => (dk ? darkFlavor.sky : lightFlavor.sky),
      bg: (dk) => tint(dk ? darkFlavor.sky : lightFlavor.sky, 0.15),
      label: 'CONFERENCE',
    },
    workshop: {
      fg: (dk) => (dk ? darkFlavor.mauve : lightFlavor.mauve),
      bg: (dk) => tint(dk ? darkFlavor.mauve : lightFlavor.mauve, 0.15),
      label: 'WORKSHOP',
    },
    demo: {
      fg: (dk) => (dk ? darkFlavor.peach : lightFlavor.peach),
      bg: (dk) => tint(dk ? darkFlavor.peach : lightFlavor.peach, 0.15),
      label: 'DEMO TRACK',
    },
    preprint: {
      fg: (dk) => (dk ? darkFlavor.green : lightFlavor.green),
      bg: (dk) => tint(dk ? darkFlavor.green : lightFlavor.green, 0.15),
      label: 'PREPRINT',
    },
    journal: {
      fg: (dk) => (dk ? darkFlavor.yellow : lightFlavor.yellow),
      bg: (dk) => tint(dk ? darkFlavor.yellow : lightFlavor.yellow, 0.15),
      label: 'JOURNAL',
    },
  }

  return {
    name,
    cssVars,
    terminal,
    categoryThemes,
    articleCategoryColors,
    publicationVenueColors,
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Exported themes
//
// Each dark flavor is paired with Latte as the light-mode companion —
// this matches Catppuccin's own design intent.
//
// To activate one of these, edit src/themes/index.ts:
//   export { catppuccinoMochaTheme as activeTheme } from './catppuccin'
// ─────────────────────────────────────────────────────────────────────────────

/** Mocha — the original Catppuccin; darkest and most color-rich. */
export const catppuccinoMochaTheme = makeCatppuccinoTheme('Catppuccin Mocha', mocha)

/** Macchiato — medium contrast, a soothing middle ground. */
export const catppuccinoMacchiatoTheme = makeCatppuccinoTheme('Catppuccin Macchiato', macchiato)

/** Frappé — subdued and muted, the gentlest dark flavor. */
export const catppuccinoFrappeTheme = makeCatppuccinoTheme('Catppuccin Frappé', frappe)

/**
 * Latte — the single light flavor.
 * Since ThemeDefinition requires both a light and a dark variant, the "dark"
 * slot here uses Frappé (the lightest dark flavor) so the toggle remains
 * visually sensible for users who switch modes unexpectedly.
 */
export const catppuccinoLatteTheme = makeCatppuccinoTheme('Catppuccin Latte', frappe, latte)
