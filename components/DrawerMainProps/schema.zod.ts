// Auto-generated Zod schema for DrawerMainProps
import { z } from 'zod'

export const DrawerMainPropsSchema = z.object({
  /** Content to be rendered in the drawer main wrapper */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the drawer main wrapper. */
  className: z.string().optional()
})

export type DrawerMainPropsProps = z.infer<typeof DrawerMainPropsSchema>
