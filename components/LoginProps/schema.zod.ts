// Auto-generated Zod schema for LoginProps
import { z } from 'zod'

export const LoginPropsSchema = z.object({
  /** Content rendered inside the main section of the login layout */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the login layout */
  className: z.string().optional(),
  /** Footer component (e.g. <LoginFooter />) */
  footer: z.custom<React.ReactNode>().optional(),
  /** Header component (e.g. <LoginHeader />) */
  header: z.custom<React.ReactNode>().optional()
})

export type LoginPropsProps = z.infer<typeof LoginPropsSchema>
