// Auto-generated Zod schema for LoginMainFooterBandItem
// Generated on: 2025-10-10T18:12:17.781Z
import { z } from 'zod'

export const LoginMainFooterBandItemSchema = z.object({
  /** Content rendered inside the footer link item */
  children: z.any().optional().default('null'),
  /** Additional classes added to the footer link item */
  className: z.string().optional().default('')
})

export type LoginMainFooterBandItemProps = z.infer<typeof LoginMainFooterBandItemSchema>
