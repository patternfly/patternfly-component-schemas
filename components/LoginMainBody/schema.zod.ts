// Auto-generated Zod schema for LoginMainBody
import { z } from 'zod'

export const LoginMainBodySchema = z.object({
  /** Content rendered inside the login main body */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the login main body */
  className: z.string().optional().default('')
})

export type LoginMainBodyProps = z.infer<typeof LoginMainBodySchema>
