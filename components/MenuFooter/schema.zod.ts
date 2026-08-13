// Auto-generated Zod schema for MenuFooter
import { z } from 'zod'

export const MenuFooterSchema = z.object({
  /** Content rendered inside the footer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the footer */
  className: z.string().optional().default('')
})

export type MenuFooterProps = z.infer<typeof MenuFooterSchema>
