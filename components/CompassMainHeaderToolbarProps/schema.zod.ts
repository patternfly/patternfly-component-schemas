// Auto-generated Zod schema for CompassMainHeaderToolbarProps
import { z } from 'zod'

export const CompassMainHeaderToolbarPropsSchema = z.object({
  /** Content of the main header toolbar. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the main header toolbar. */
  className: z.string().optional()
})

export type CompassMainHeaderToolbarPropsProps = z.infer<typeof CompassMainHeaderToolbarPropsSchema>
