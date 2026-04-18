import { Outlet, ScrollRestoration } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { useLocalizedData } from '../hooks/useLocalizedData'
import { getTemplate } from '../templates'
import { getResolvedSlots } from '../templates/slots'
import { ThemeProvider } from '../themes/ThemeContext'
import { ThemeInjector } from '../themes/ThemeInjector'

export function RootLayout() {
  const { siteConfig } = useLocalizedData()
  const cfg = siteConfig as Record<string, unknown>
  const template = getTemplate(cfg.template as string | undefined)
  const slots = getResolvedSlots(template, cfg.components as Record<string, string> | undefined)

  const { layout: TemplateLayout } = template

  return (
    <ThemeProvider>
      <ThemeInjector />
      <TemplateLayout slots={slots}>
        <Outlet />
      </TemplateLayout>
      <ScrollRestoration />
      {process.env.NODE_ENV === 'development' && <TanStackRouterDevtools />}
    </ThemeProvider>
  )
}
