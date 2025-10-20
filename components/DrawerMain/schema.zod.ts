// Auto-generated Zod schema for DrawerMain
// Generated on: 2025-10-10T18:12:17.787Z
import { z } from 'zod'

export const DrawerMainSchema = z.object({
  /** Content to be rendered in the drawer main wrapper */
  children: z.any().optional(),
  /** Additional classes added to the drawer main wrapper. */
  className: z.string().optional().default('')
})

export type DrawerMainProps = z.infer<typeof DrawerMainSchema>
