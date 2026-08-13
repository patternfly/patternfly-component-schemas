// Auto-generated Zod schema for CompassHeroProps
import { z } from 'zod'

export const CompassHeroPropsSchema = z.object({
  /** Content of the hero */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the hero */
  className: z.string().optional()
})

export type CompassHeroPropsProps = z.infer<typeof CompassHeroPropsSchema>
