import { useContext } from 'react'

import type { ComponentSlots, SlotName } from './slots'

import { SlotContext } from './SlotContext'

/**
 * Get the active component for a slot.
 *
 * @example
 * const Hero = useSlot('hero')
 * return <Hero title="Hi" avatar="me.jpg" />
 */
export function useSlot<K extends SlotName>(name: K): ComponentSlots[K] {
  const slots = useContext(SlotContext)
  if (!slots) {
    throw new Error(`useSlot("${name}") must be used within a <SlotProvider>`)
  }
  return slots[name]
}
