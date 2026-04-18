import { createFileRoute } from '@tanstack/react-router'

import { TemplatePage } from '../components/TemplatePage'

export const Route = createFileRoute('/experience')({
  component: () => <TemplatePage pageKey="experience" />,
})
