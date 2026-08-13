// Auto-generated Zod schema for AlertActionLinkProps
import { z } from 'zod'

export const AlertActionLinkPropsSchema = z.object({
  /** Content rendered inside the alert action link. Interactive content such as anchor elements should not be passed in. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the alert action link. */
  className: z.string().optional()
})

export type AlertActionLinkPropsProps = z.infer<typeof AlertActionLinkPropsSchema>
