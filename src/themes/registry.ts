import { ayuDarkTheme, ayuMirageTheme } from './ayu'
import {
  catppuccinoFrappeTheme,
  catppuccinoMacchiatoTheme,
  catppuccinoMochaTheme,
} from './catppuccin'
import { draculaTheme } from './dracula'
import { everforestTheme } from './everforest'
import { githubTheme } from './github'
import { nordTheme } from './nord'
import { obsidianTheme } from './obsidian'
import { oneDarkTheme } from './onedark'

export const themes = {
  'ayu-dark': ayuDarkTheme,
  'ayu-mirage': ayuMirageTheme,
  'catppuccin-frappe': catppuccinoFrappeTheme,
  'catppuccin-macchiato': catppuccinoMacchiatoTheme,
  'catppuccin-mocha': catppuccinoMochaTheme,
  dracula: draculaTheme,
  everforest: everforestTheme,
  github: githubTheme,
  nord: nordTheme,
  obsidian: obsidianTheme,
  'one-dark': oneDarkTheme,
}

export type ThemeKey = keyof typeof themes
