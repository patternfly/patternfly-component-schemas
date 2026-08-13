// Auto-generated Zod schema for LoginMainHeaderProps
import { z } from 'zod'

export const LoginMainHeaderPropsSchema = z.object({
  /** Content rendered inside the login main header */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the login main header */
  className: z.string().optional(),
  /** Actions that render for the login main header */
  headerUtilities: z.custom<React.ReactNode>().optional(),
  /** Subtitle that contains the text, URL, and URL text for the login main header */
  subtitle: z.string().optional(),
  /** Title for the login main header */
  title: z.string().optional()
})

export type LoginMainHeaderPropsProps = z.infer<typeof LoginMainHeaderPropsSchema>
