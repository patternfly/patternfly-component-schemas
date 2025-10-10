// Auto-generated Zod schema for MenuFooter
// Generated on: 2025-10-10T18:12:17.779Z
import { z } from 'zod'

export const MenuFooterSchema = z.object({
  /** Content rendered inside the footer */
  children: z.any().optional(),
  /** Additional classes added to the footer */
  className: z.string().optional().default('')
})

export type MenuFooterProps = z.infer<typeof MenuFooterSchema>
