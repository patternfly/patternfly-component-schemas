// Auto-generated Zod schema for DrawerContentBody
// Generated on: 2025-10-10T18:12:17.787Z
import { z } from 'zod'

export const DrawerContentBodySchema = z.object({
  /** Content to be rendered in the drawer */
  children: z.any().optional(),
  /** Additional classes added to the Drawer. */
  className: z.string().optional().default(''),
  /** Indicates if there should be padding around the drawer content body */
  hasPadding: z.boolean().optional().default(false)
})

export type DrawerContentBodyProps = z.infer<typeof DrawerContentBodySchema>
