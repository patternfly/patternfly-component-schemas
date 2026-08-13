// Auto-generated Zod schema for LoginFooterProps
import { z } from 'zod'

export const LoginFooterPropsSchema = z.object({
  /** Content rendered inside the footer of the login layout */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional props are spread to the container <footer> */
  className: z.string().optional()
})

export type LoginFooterPropsProps = z.infer<typeof LoginFooterPropsSchema>
