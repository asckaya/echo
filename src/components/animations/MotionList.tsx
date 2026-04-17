import { motion, type Variants } from 'framer-motion'
import React, { type ReactNode } from 'react'

interface MotionListProps {
  children: ReactNode
  staggerDelay?: number
  initialDelay?: number
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { 
      delayChildren: i,
    },
  }),
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

/**
 * A wrapper for lists that animates items with a staggered "slide-up" effect.
 * Perfect for project grids, news feeds, or skill lists.
 */
export const MotionList: React.FC<MotionListProps> = ({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
}) => {
  const items = React.Children.toArray(children)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={initialDelay}
      style={{ width: '100%' }}
    >
      {items.map((child, index) => (
        <motion.div 
          key={index} 
          variants={itemVariants}
          transition={{ delay: index * staggerDelay }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

/**
 * A simple wrapper for single elements that should fade and slide in.
 */
export const MotionBox: React.FC<{ children: ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * A wrapper that adds a "bouncy" spring effect on hover.
 */
export const MotionHover: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, translateY: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  )
}
