import { createRootRoute } from '@tanstack/react-router'

import { RootLayout } from '../components/RootLayout'
import '../styles/globals.css'
import '../i18n'

export const Route = createRootRoute({
  component: RootLayout,
})
