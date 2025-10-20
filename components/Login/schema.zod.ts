// Auto-generated Zod schema for Login
import { z } from 'zod'

export const LoginSchema = z.object({
  /** Content rendered inside the main section of the login layout */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the login layout */
  className: z.string().optional().default(''),
  /** Footer component (e.g. <LoginFooter />) */
  footer: z.custom<React.ReactNode>().optional().default('null'),
  /** Header component (e.g. <LoginHeader />) */
  header: z.custom<React.ReactNode>().optional().default('null')
})

export type LoginProps = z.infer<typeof LoginSchema>
