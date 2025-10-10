// Auto-generated Zod schema for Login
// Generated on: 2025-10-10T18:12:17.781Z
import { z } from 'zod'

export const LoginSchema = z.object({
  /** Content rendered inside the main section of the login layout */
  children: z.any().optional().default('null'),
  /** Additional classes added to the login layout */
  className: z.string().optional().default(''),
  /** Footer component (e.g. <LoginFooter />) */
  footer: z.any().optional().default('null'),
  /** Header component (e.g. <LoginHeader />) */
  header: z.any().optional().default('null')
})

export type LoginProps = z.infer<typeof LoginSchema>
