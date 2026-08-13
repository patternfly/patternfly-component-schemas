// Auto-generated Zod schema for MenuFooterProps
import { z } from 'zod'

export const MenuFooterPropsSchema = z.object({
  /** Content rendered inside the footer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the footer */
  className: z.string().optional()
})

export type MenuFooterPropsProps = z.infer<typeof MenuFooterPropsSchema>
