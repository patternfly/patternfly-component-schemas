// Auto-generated Zod schema for DrawerHead
// Generated on: 2025-10-10T18:12:17.787Z
import { z } from 'zod'

export const DrawerHeadSchema = z.object({
  /** Content to be rendered in the drawer head */
  children: z.any().optional(),
  /** Additional classes added to the drawer head. */
  className: z.string().optional().default('')
})

export type DrawerHeadProps = z.infer<typeof DrawerHeadSchema>
