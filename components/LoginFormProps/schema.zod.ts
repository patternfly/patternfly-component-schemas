// Auto-generated Zod schema for LoginFormProps
import { z } from 'zod'

export const LoginFormPropsSchema = z.object({
  /** Additional classes added to the login main body's form */
  className: z.string().optional(),
  /** Content displayed in the helper text component * */
  helperText: z.custom<React.ReactNode>().optional(),
  /** Icon displayed to the left in the helper text */
  helperTextIcon: z.custom<React.ReactNode>().optional(),
  /** Accessible label for the hide password button */
  hidePasswordAriaLabel: z.string().optional(),
  /** Flag indicating if the login button is disabled */
  isLoginButtonDisabled: z.boolean().optional(),
  /** Flag indicating if password is required */
  isPasswordRequired: z.boolean().optional(),
  /** Flag indicating if the remember me checkbox is checked. */
  isRememberMeChecked: z.boolean().optional(),
  /** Flag indicating if the user can toggle hiding the password */
  isShowPasswordEnabled: z.boolean().optional(),
  /** Flag indicating if the password is valid */
  isValidPassword: z.boolean().optional(),
  /** Flag indicating if the username is valid */
  isValidUsername: z.boolean().optional(),
  /** Label for the log in button input */
  loginButtonLabel: z.string().optional(),
  /** Flag to indicate if the first dropdown item should not gain initial focus */
  noAutoFocus: z.boolean().optional(),
  /** Function that handles the onChange event for the password */
  onChangePassword: z.custom<Event>().optional(),
  /** Function that handles the onChange event for the remember me checkbox */
  onChangeRememberMe: z.custom<Event>().optional(),
  /** Function that handles the onChange event for the username */
  onChangeUsername: z.custom<Event>().optional(),
  /** Function that is called when the login button is clicked */
  onLoginButtonClick: z.custom<Event>().optional(),
  /** Label for the password input field */
  passwordLabel: z.string().optional(),
  /** Value for the password */
  passwordValue: z.string().optional(),
  /** Label for the remember me checkbox that indicates the user should be kept logged in.  If the label is not provided, the checkbox will not show. */
  rememberMeLabel: z.string().optional(),
  /** Flag indicating the helper text is visible * */
  showHelperText: z.boolean().optional(),
  /** Accessible label for the show password button */
  showPasswordAriaLabel: z.string().optional(),
  /** Label for the username input field */
  usernameLabel: z.string().optional(),
  /** Value for the username */
  usernameValue: z.string().optional()
})

export type LoginFormPropsProps = z.infer<typeof LoginFormPropsSchema>
