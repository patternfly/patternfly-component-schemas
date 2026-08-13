// Auto-generated Zod schema for LoginFooter
import { z } from 'zod'

export const LoginFooterSchema = z.object({
  /** Content rendered inside the footer of the login layout */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional props are spread to the container <footer> */
  className: z.string().optional().default('')
})

export type LoginFooterProps = z.infer<typeof LoginFooterSchema>
