// Auto-generated Zod schema for LoginMainBodyProps
import { z } from 'zod'

export const LoginMainBodyPropsSchema = z.object({
  /** Content rendered inside the login main body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the login main body */
  className: z.string().optional()
})

export type LoginMainBodyPropsProps = z.infer<typeof LoginMainBodyPropsSchema>
