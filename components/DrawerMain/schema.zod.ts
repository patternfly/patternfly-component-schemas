// Auto-generated Zod schema for DrawerMain
import { z } from 'zod'

export const DrawerMainSchema = z.object({
  /** Content to be rendered in the drawer main wrapper */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the drawer main wrapper. */
  className: z.string().optional().default('')
})

export type DrawerMainProps = z.infer<typeof DrawerMainSchema>
