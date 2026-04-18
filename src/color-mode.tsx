import type { ReactNode } from 'react'

import { ThemeProvider } from 'next-themes'

export function ColorModeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}
