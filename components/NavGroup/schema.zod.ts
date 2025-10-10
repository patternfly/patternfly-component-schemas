// Auto-generated Zod schema for NavGroup
// Generated on: 2025-10-10T18:12:17.775Z
import { z } from 'zod'

export const NavGroupSchema = z.object({
  /** Anything that can be rendered inside of the group */
  children: z.any().optional().default('null'),
  /** Additional classes added to the container */
  className: z.string().optional().default(''),
  /** Identifier to use for the section aria label */
  id: z.string().optional().default('getUniqueId()'),
  /** Title shown for the group */
  title: z.string().optional()
})

export type NavGroupProps = z.infer<typeof NavGroupSchema>
