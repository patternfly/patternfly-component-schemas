// Auto-generated Zod schema for LoginMainHeader
// Generated on: 2025-10-10T18:12:17.781Z
import { z } from 'zod'

export const LoginMainHeaderSchema = z.object({
  /** Content rendered inside the login main header */
  children: z.any().optional().default('null'),
  /** Additional classes added to the login main header */
  className: z.string().optional().default(''),
  /** Actions that render for the login main header */
  headerUtilities: z.any().optional().default('null'),
  /** Subtitle that contains the text, URL, and URL text for the login main header */
  subtitle: z.string().optional().default(''),
  /** Title for the login main header */
  title: z.string().optional().default('')
})

export type LoginMainHeaderProps = z.infer<typeof LoginMainHeaderSchema>
