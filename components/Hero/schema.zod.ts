// Auto-generated Zod schema for Hero
import { z } from 'zod'

export const HeroSchema = z.object({
  /** Dark theme background image path of the hero */
  backgroundSrcDark: z.string().optional(),
  /** Light theme background image path of the hero */
  backgroundSrcLight: z.string().optional(),
  /** Modifies the max-width of the hero body. */
  bodyMaxWidth: z.string().optional(),
  /** Modifies the width of the hero body. */
  bodyWidth: z.string().optional(),
  /** Content of the hero */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the hero */
  className: z.string().optional(),
  /** Dark theme gradient of the hero, taking any valid CSS color values for each stop property. */
  gradientDark: z.record(z.unknown()).optional(),
  /** Light theme gradient of the hero, taking any valid CSS color values for each stop property. */
  gradientLight: z.record(z.unknown()).optional(),
  /** Flag indicating the hero has glass styling when glass theme is applied. */
  isGlass: z.boolean().optional().default(false)
})

export type HeroProps = z.infer<typeof HeroSchema>
