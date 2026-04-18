import { createContext } from 'react'

import type { ThemeKey } from './registry'
import type { ThemeDefinition } from './types'

export interface ThemeContextValue {
  activeTheme: ThemeDefinition
  currentThemeKey: ThemeKey
  setTheme: (key: ThemeKey) => void
}

export const ThemeContext = createContext<null | ThemeContextValue>(null)
