// Auto-generated Zod schema for CompassMainHeaderContentProps
import { z } from 'zod'

export const CompassMainHeaderContentPropsSchema = z.object({
  /** Content of the main header content. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the main header content. */
  className: z.string().optional()
})

export type CompassMainHeaderContentPropsProps = z.infer<typeof CompassMainHeaderContentPropsSchema>
