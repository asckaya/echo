// SPDX-FileCopyrightText: 2026 Yaoyao(Freax) Qian <limyoonaxi@gmail.com>
// SPDX-License-Identifier: GPL-3.0-only

/**
 * Thin adapter — re-exports everything from the active theme so that all
 * existing component imports (`@/config/theme`) continue to work unchanged.
 *
 * To switch colour schemes, edit `src/themes/index.ts` only.
 */

import { activeTheme } from '@/themes'
import type { ProjectItem } from '@/types'

// Re-export the CatTheme type so components that import it from here still compile.
export type { CatTheme } from '@/themes'

// ── Terminal palette ────────────────────────────────────────────────────────
// Shape: { rainbow: readonly string[], colors: (dark: boolean) => TerminalColors }
export const terminalPalette = activeTheme.terminal

// ── Project category card themes ────────────────────────────────────────────
// Shape: (dark: boolean) => Record<ProjectItem['category'], CatTheme>
export const buildCategoryThemes = activeTheme.categoryThemes

// ── Article category badge labels (display text, colour-scheme-independent) ─
export const articleCategoryLabels: Record<ProjectItem['category'], string> = {
  robotics: 'Robotics',
  nlp: 'NLP / AI',
  'web-app': 'Web / App',
  data: 'Data / ML',
  tooling: 'Tooling',
  healthcare: 'Healthcare',
}

// ── Article category badge colors ───────────────────────────────────────────
// Shape: Record<category, { fg: (dk) => string, bg: (dk) => string }>
export const articleCategoryColors = activeTheme.articleCategoryColors

// ── Publication venue badge colors ──────────────────────────────────────────
// Shape: Record<venueType, { bg: (dk) => string, fg: (dk) => string, label: string }>
export const publicationVenueColors = activeTheme.publicationVenueColors
