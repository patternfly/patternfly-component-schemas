// Auto-generated Zod schema for LoginMainFooterLinksItem
// Generated on: 2025-10-10T18:12:17.781Z
import { z } from 'zod'

export const LoginMainFooterLinksItemSchema = z.object({
  /** Content rendered inside the footer link item */
  children: z.any().optional().default('null'),
  /** Additional classes added to the footer link item */
  className: z.string().optional().default('')
})

export type LoginMainFooterLinksItemProps = z.infer<typeof LoginMainFooterLinksItemSchema>
