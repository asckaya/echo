// SPDX-FileCopyrightText: 2026 Yaoyao(Freax) Qian <limyoonaxi@gmail.com>
// SPDX-License-Identifier: GPL-3.0-only

import type { IconType } from 'react-icons'
import type { ProjectItem } from '@/types'

// ─────────────────────────────────────────────────────────────────────────────
// CSS custom property tokens
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Every CSS variable consumed by globals.css and Chakra component variants.
 * Values are plain colour strings (hex, rgb, rgba …).
 */
export interface CSSVarTokens {
  '--bg-color': string
  '--text-color': string
  '--accent-color': string
  '--accent-light': string
  '--secondary-text': string
  '--border-color': string
  '--card-bg': string
  '--header-bg': string
  '--hover-color': string
}

// ─────────────────────────────────────────────────────────────────────────────
// Terminal palette
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Semantic colour roles used by every terminal-styled component
 * (typewriter, project cards, publications, experience timeline …).
 */
export interface TerminalColors {
  bg: string
  text: string
  header: string
  border: string
  prompt: string
  command: string
  param: string
  info: string
  highlight: string
  error: string
  success: string
  warning: string
  secondary: string
  muted: string
  /** Compact "touch-bar" strip background */
  touchBar: string
  /** Tab-bar background */
  tabBar: string
}

// ─────────────────────────────────────────────────────────────────────────────
// Category themes
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Visual identity for one project category card.
 * Includes colours, gradient stripe, icon, display label, and sample command.
 */
export interface CatTheme {
  bg: string
  border: string
  stripe: string
  color: string
  glow: string
  icon: IconType
  label: string
  cmd: string
}

// ─────────────────────────────────────────────────────────────────────────────
// Full theme definition
// ─────────────────────────────────────────────────────────────────────────────

/**
 * The contract that every colour scheme must satisfy.
 *
 * To create a new theme:
 *   1. Duplicate `src/themes/nord.ts` and rename it (e.g. `dracula.ts`).
 *   2. Replace the colour values to match your palette.
 *   3. In `src/themes/index.ts`, swap the import to point at your new file.
 *
 * Nothing else needs to change — all components import through the adapter
 * in `src/config/theme.ts`, which always resolves to the active theme.
 */
export interface ThemeDefinition {
  /** Human-readable name shown in dev tooling / future theme-picker UI. */
  name: string

  /**
   * CSS custom property values injected at runtime onto `document.documentElement`.
   * Provide separate token sets for light and dark colour modes.
   */
  cssVars: {
    light: CSSVarTokens
    dark: CSSVarTokens
  }

  /** Terminal UI palette — shared rainbow bar + semantic colour resolver. */
  terminal: {
    /**
     * Fixed 7-colour array used for the animated rainbow progress bars.
     * Order matters: the animation cycles through indices sequentially.
     */
    rainbow: readonly string[]
    /**
     * Returns the full set of semantic terminal colours for the given mode.
     * Call with `true` for dark, `false` for light.
     */
    colors: (dark: boolean) => TerminalColors
  }

  /**
   * Returns per-category visual themes for project cards.
   * Call with `true` for dark, `false` for light.
   */
  categoryThemes: (dark: boolean) => Record<ProjectItem['category'], CatTheme>

  /**
   * Foreground / background colour pair for article category badges.
   * Each resolver accepts a boolean `dark` flag.
   */
  articleCategoryColors: Record<
    ProjectItem['category'],
    {
      fg: (dark: boolean) => string
      bg: (dark: boolean) => string
    }
  >

  /**
   * Foreground / background colour pair + display label for publication
   * venue type badges (conference, workshop, demo, preprint, journal …).
   */
  publicationVenueColors: Record<
    string,
    {
      bg: (dark: boolean) => string
      fg: (dark: boolean) => string
      label: string
    }
  >
}
