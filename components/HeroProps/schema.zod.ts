// Auto-generated Zod schema for HeroProps
import { z } from 'zod'

export const HeroPropsSchema = z.object({
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
  isGlass: z.boolean().optional()
})

export type HeroPropsProps = z.infer<typeof HeroPropsSchema>
