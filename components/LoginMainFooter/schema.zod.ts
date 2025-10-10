// Auto-generated Zod schema for LoginMainFooter
// Generated on: 2025-10-10T18:12:17.781Z
import { z } from 'zod'

export const LoginMainFooterSchema = z.object({
  /** Content rendered inside the login main footer */
  children: z.any().optional().default('null'),
  /** Additional classes added to the login main footer */
  className: z.string().optional().default(''),
  /** Content rendered inside of login main footer band do display a forgot credentials link* */
  forgotCredentials: z.any().optional().default('null'),
  /** Content rendered inside of login main footer band to display a sign up for account message */
  signUpForAccountMessage: z.any().optional().default('null'),
  /** Adds an accessible name to the social media login list. */
  socialMediaLoginAriaLabel: z.string().optional(),
  /** Content rendered inside the login main footer as social media links */
  socialMediaLoginContent: z.any().optional().default('null')
})

export type LoginMainFooterProps = z.infer<typeof LoginMainFooterSchema>
