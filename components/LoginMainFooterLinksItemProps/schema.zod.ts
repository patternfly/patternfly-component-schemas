// Auto-generated Zod schema for LoginMainFooterLinksItemProps
import { z } from 'zod'

export const LoginMainFooterLinksItemPropsSchema = z.object({
  /** Content rendered inside the footer link item */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the footer link item */
  className: z.string().optional()
})

export type LoginMainFooterLinksItemPropsProps = z.infer<typeof LoginMainFooterLinksItemPropsSchema>
