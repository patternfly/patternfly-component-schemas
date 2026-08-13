// Auto-generated Zod schema for CompassHero
import { z } from 'zod'

export const CompassHeroSchema = z.object({
  /** Content of the hero */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the hero */
  className: z.string().optional()
})

export type CompassHeroProps = z.infer<typeof CompassHeroSchema>
