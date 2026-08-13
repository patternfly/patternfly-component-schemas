// Auto-generated Zod schema for CompassMainHeaderToolbar
import { z } from 'zod'

export const CompassMainHeaderToolbarSchema = z.object({
  /** Content of the main header toolbar. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the main header toolbar. */
  className: z.string().optional()
})

export type CompassMainHeaderToolbarProps = z.infer<typeof CompassMainHeaderToolbarSchema>
