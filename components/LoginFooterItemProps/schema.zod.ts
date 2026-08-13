// Auto-generated Zod schema for LoginFooterItemProps
import { z } from 'zod'

export const LoginFooterItemPropsSchema = z.object({
  /** Content rendered inside the footer link item */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the footer link item */
  className: z.string().optional(),
  /** The URL of the footer link item */
  href: z.string().optional(),
  /** Specifies where to open the linked document */
  target: z.string().optional()
})

export type LoginFooterItemPropsProps = z.infer<typeof LoginFooterItemPropsSchema>
