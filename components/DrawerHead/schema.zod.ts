// Auto-generated Zod schema for DrawerHead
import { z } from 'zod'

export const DrawerHeadSchema = z.object({
  /** Content to be rendered in the drawer head */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the drawer head. */
  className: z.string().optional().default('')
})

export type DrawerHeadProps = z.infer<typeof DrawerHeadSchema>
