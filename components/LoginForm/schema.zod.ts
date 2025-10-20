// Auto-generated Zod schema for LoginForm
import { z } from 'zod'

export const LoginFormSchema = z.object({
  /** Additional classes added to the login main body's form */
  className: z.string().optional().default(''),
  /** Content displayed in the helper text component * */
  helperText: z.custom<React.ReactNode>().optional().default('null'),
  /** Icon displayed to the left in the helper text */
  helperTextIcon: z.custom<React.ReactNode>().optional().default('null'),
  /** Accessible label for the hide password button */
  hidePasswordAriaLabel: z.string().optional().default('Hide password'),
  /** Flag indicating if the login button is disabled */
  isLoginButtonDisabled: z.boolean().optional().default(false),
  /** Flag indicating if password is required */
  isPasswordRequired: z.boolean().optional().default(true),
  /** Flag indicating if the remember me checkbox is checked. */
  isRememberMeChecked: z.boolean().optional().default(false),
  /** Flag indicating if the user can toggle hiding the password */
  isShowPasswordEnabled: z.boolean().optional().default(false),
  /** Flag indicating if the password is valid */
  isValidPassword: z.boolean().optional().default(true),
  /** Flag indicating if the username is valid */
  isValidUsername: z.boolean().optional().default(true),
  /** Label for the log in button input */
  loginButtonLabel: z.string().optional().default('Log In'),
  /** Flag to indicate if the first dropdown item should not gain initial focus */
  noAutoFocus: z.boolean().optional().default(false),
  /** Function that handles the onChange event for the password */
  onChangePassword: z.custom<Event>().optional().default('() => undefined as any'),
  /** Function that handles the onChange event for the remember me checkbox */
  onChangeRememberMe: z.custom<Event>().optional().default('() => undefined as any'),
  /** Function that handles the onChange event for the username */
  onChangeUsername: z.custom<Event>().optional().default('() => undefined as any'),
  /** Function that is called when the login button is clicked */
  onLoginButtonClick: z.custom<Event>().optional().default('() => undefined as any'),
  /** Label for the password input field */
  passwordLabel: z.string().optional().default('Password'),
  /** Value for the password */
  passwordValue: z.string().optional().default(''),
  /** Label for the remember me checkbox that indicates the user should be kept logged in.  If the label is not provided, the checkbox will not show. */
  rememberMeLabel: z.string().optional().default(''),
  /** Flag indicating the helper text is visible * */
  showHelperText: z.boolean().optional().default(false),
  /** Accessible label for the show password button */
  showPasswordAriaLabel: z.string().optional().default('Show password'),
  /** Label for the username input field */
  usernameLabel: z.string().optional().default('Username'),
  /** Value for the username */
  usernameValue: z.string().optional().default('')
})

export type LoginFormProps = z.infer<typeof LoginFormSchema>
