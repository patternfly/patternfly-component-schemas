// Auto-generated Zod schema for LoginPage
// Generated on: 2025-10-10T18:12:17.780Z
import { z } from 'zod'

export const LoginPageSchema = z.object({
  /** Attribute that specifies the URL of the background image for the login page */
  backgroundImgSrc: z.string().optional().default(''),
  /** Attribute that specifies the alt text of the brand image for the login page */
  brandImgAlt: z.string().optional().default(''),
  /** Attribute that specifies the URL of the brand image for the login page */
  brandImgSrc: z.string().optional().default(''),
  /** Anything that can be rendered inside of the login page (e.g. <LoginPageForm>) */
  children: z.any().optional().default('null'),
  /** Additional classes added to the login page */
  className: z.string().optional().default(''),
  /** Items rendered inside of the footer list component of the login page */
  footerListItems: z.any().optional().default('null'),
  /** Adds list variant styles for the footer list component of the login page. The only current value is'inline' */
  footerListVariants: z.any().optional(),
  /** Content rendered inside of login main footer band to display a forgot credentials link. */
  forgotCredentials: z.any().optional().default('null'),
  /** Header utilities for the login main body header of the login page */
  headerUtilities: z.any().optional(),
  /** Subtitle for the login main body header of the login page */
  loginSubtitle: z.string().optional(),
  /** Title for the login main body header of the login page */
  loginTitle: z.string(),
  /** Content rendered inside of login main footer band to display a sign up for account message */
  signUpForAccountMessage: z.any().optional().default('null'),
  /** Adds an accessible name to the social media login list. */
  socialMediaLoginAriaLabel: z.string().optional(),
  /** Content rendered inside of social media login footer section */
  socialMediaLoginContent: z.any().optional().default('null'),
  /** Content rendered inside of the text component of the login page */
  textContent: z.string().optional().default('')
})

export type LoginPageProps = z.infer<typeof LoginPageSchema>
