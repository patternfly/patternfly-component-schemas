// Auto-generated Zod schema for LoginFooter
// Generated on: 2025-10-10T18:12:17.781Z
import { z } from 'zod'

export const LoginFooterSchema = z.object({
  /** Content rendered inside the footer of the login layout */
  children: z.any().optional().default('null'),
  /** Additional props are spread to the container <footer> */
  className: z.string().optional().default('')
})

export type LoginFooterProps = z.infer<typeof LoginFooterSchema>
