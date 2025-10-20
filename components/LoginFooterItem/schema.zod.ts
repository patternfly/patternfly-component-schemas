// Auto-generated Zod schema for LoginFooterItem
import { z } from 'zod'

export const LoginFooterItemSchema = z.object({
  /** Content rendered inside the footer link item */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the footer link item */
  className: z.string().optional(),
  /** The URL of the footer link item */
  href: z.string().optional().default('#'),
  /** Specifies where to open the linked document */
  target: z.string().optional().default('_blank')
})

export type LoginFooterItemProps = z.infer<typeof LoginFooterItemSchema>
