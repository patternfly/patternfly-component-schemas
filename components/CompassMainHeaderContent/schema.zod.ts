// Auto-generated Zod schema for CompassMainHeaderContent
import { z } from 'zod'

export const CompassMainHeaderContentSchema = z.object({
  /** Content of the main header content. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the main header content. */
  className: z.string().optional()
})

export type CompassMainHeaderContentProps = z.infer<typeof CompassMainHeaderContentSchema>
