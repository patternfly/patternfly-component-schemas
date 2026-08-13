// Auto-generated Zod schema for DrawerHeadProps
import { z } from 'zod'

export const DrawerHeadPropsSchema = z.object({
  /** Content to be rendered in the drawer head */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the drawer head. */
  className: z.string().optional()
})

export type DrawerHeadPropsProps = z.infer<typeof DrawerHeadPropsSchema>
