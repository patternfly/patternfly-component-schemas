// Auto-generated Zod schema for CompassNavContent
import { z } from 'zod'

export const CompassNavContentSchema = z.object({
  /** Content of the nav content wrapper. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the nav content. */
  className: z.string().optional()
})

export type CompassNavContentProps = z.infer<typeof CompassNavContentSchema>
