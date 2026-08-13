// Auto-generated Zod schema for LoginMainFooterBandItemProps
import { z } from 'zod'

export const LoginMainFooterBandItemPropsSchema = z.object({
  /** Content rendered inside the footer link item */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the footer link item */
  className: z.string().optional()
})

export type LoginMainFooterBandItemPropsProps = z.infer<typeof LoginMainFooterBandItemPropsSchema>
