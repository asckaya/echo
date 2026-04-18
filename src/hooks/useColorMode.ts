import { useTheme } from 'next-themes'

export type ColorMode = 'dark' | 'light'

interface DocumentWithTransition extends Document {
  startViewTransition?: (callback: () => Promise<void>) => ViewTransition
}

interface ViewTransition {
  ready: Promise<void>
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme()
  const colorMode: ColorMode = resolvedTheme === 'dark' ? 'dark' : 'light'

  const toggleColorMode = (event?: MouseEvent | React.MouseEvent) => {
    const doc = document as DocumentWithTransition
    
    // Check for browser support and respect system motion preferences
    const isSupported =
      doc.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isSupported || !event) {
      setTheme(colorMode === 'dark' ? 'light' : 'dark')
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = doc.startViewTransition!(async () => {
      setTheme(colorMode === 'dark' ? 'light' : 'dark')
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath,
        },
        {
          duration: 450,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
  }

  return {
    colorMode,
    setColorMode: (value: ColorMode) => setTheme(value),
    toggleColorMode,
  }
}

export function useColorModeValue<T>(light: T, dark: T): T {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? dark : light
}
