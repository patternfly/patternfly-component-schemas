// Auto-generated Zod schema for LoginMainFooter
import { z } from 'zod'

export const LoginMainFooterSchema = z.object({
  /** Content rendered inside the login main footer */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the login main footer */
  className: z.string().optional().default(''),
  /** Content rendered inside of login main footer band do display a forgot credentials link* */
  forgotCredentials: z.custom<React.ReactNode>().optional().default('null'),
  /** Content rendered inside of login main footer band to display a sign up for account message */
  signUpForAccountMessage: z.custom<React.ReactNode>().optional().default('null'),
  /** Adds an accessible name to the social media login list. */
  socialMediaLoginAriaLabel: z.string().optional(),
  /** Content rendered inside the login main footer as social media links */
  socialMediaLoginContent: z.custom<React.ReactNode>().optional().default('null')
})

export type LoginMainFooterProps = z.infer<typeof LoginMainFooterSchema>
