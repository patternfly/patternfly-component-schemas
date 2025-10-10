// Auto-generated Zod schema for LoginHeader
// Generated on: 2025-10-10T18:12:17.781Z
import { z } from 'zod'

export const LoginHeaderSchema = z.object({
  /** Content rendered inside the header of the login layout */
  children: z.any().optional().default('null'),
  /** Additional classes added to the login header */
  className: z.string().optional().default(''),
  /** Header brand component (e.g. <LoginHeader />) */
  headerBrand: z.any().optional().default('null')
})

export type LoginHeaderProps = z.infer<typeof LoginHeaderSchema>
