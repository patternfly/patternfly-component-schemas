// Auto-generated Zod schema for LoginMainBody
// Generated on: 2025-10-10T18:12:17.781Z
import { z } from 'zod'

export const LoginMainBodySchema = z.object({
  /** Content rendered inside the login main body */
  children: z.any().optional().default('null'),
  /** Additional classes added to the login main body */
  className: z.string().optional().default('')
})

export type LoginMainBodyProps = z.infer<typeof LoginMainBodySchema>
