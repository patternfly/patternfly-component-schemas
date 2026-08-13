// Auto-generated Zod schema for NavGroupProps
import { z } from 'zod'

export const NavGroupPropsSchema = z.object({
  /** Anything that can be rendered inside of the group */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the container */
  className: z.string().optional(),
  /** Identifier to use for the section aria label */
  id: z.string().optional(),
  /** Title shown for the group */
  title: z.string().optional()
})

export type NavGroupPropsProps = z.infer<typeof NavGroupPropsSchema>
