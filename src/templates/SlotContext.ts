import { createContext } from 'react'

import type { ComponentSlots } from './slots'

export const SlotContext = createContext<ComponentSlots | null>(null)
