// Auto-generated Zod schema for LoginMainFooterLinksItem
import { z } from 'zod'

export const LoginMainFooterLinksItemSchema = z.object({
  /** Content rendered inside the footer link item */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the footer link item */
  className: z.string().optional().default('')
})

export type LoginMainFooterLinksItemProps = z.infer<typeof LoginMainFooterLinksItemSchema>
