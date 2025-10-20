// Auto-generated Zod schema for LoginHeader
import { z } from 'zod'

export const LoginHeaderSchema = z.object({
  /** Content rendered inside the header of the login layout */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the login header */
  className: z.string().optional().default(''),
  /** Header brand component (e.g. <LoginHeader />) */
  headerBrand: z.custom<React.ReactNode>().optional().default('null')
})

export type LoginHeaderProps = z.infer<typeof LoginHeaderSchema>
