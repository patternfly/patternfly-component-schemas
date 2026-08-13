// Auto-generated Zod schema for LoginHeaderProps
import { z } from 'zod'

export const LoginHeaderPropsSchema = z.object({
  /** Content rendered inside the header of the login layout */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the login header */
  className: z.string().optional(),
  /** Header brand component (e.g. <LoginHeader />) */
  headerBrand: z.custom<React.ReactNode>().optional()
})

export type LoginHeaderPropsProps = z.infer<typeof LoginHeaderPropsSchema>
