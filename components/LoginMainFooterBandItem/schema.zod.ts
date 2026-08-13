// Auto-generated Zod schema for LoginMainFooterBandItem
import { z } from 'zod'

export const LoginMainFooterBandItemSchema = z.object({
  /** Content rendered inside the footer link item */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the footer link item */
  className: z.string().optional().default('')
})

export type LoginMainFooterBandItemProps = z.infer<typeof LoginMainFooterBandItemSchema>
