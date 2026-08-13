// Auto-generated Zod schema for CompassNavContentProps
import { z } from 'zod'

export const CompassNavContentPropsSchema = z.object({
  /** Content of the nav content wrapper. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the nav content. */
  className: z.string().optional()
})

export type CompassNavContentPropsProps = z.infer<typeof CompassNavContentPropsSchema>
