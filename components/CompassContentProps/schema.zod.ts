// Auto-generated Zod schema for CompassContentProps
import { z } from 'zod'

export const CompassContentPropsSchema = z.object({
  /** Content of the main Compass area. Typically one or more `Panel` components. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the CompassContent */
  className: z.string().optional(),
  /** Content rendered in an optional drawer wrapping the CompassContent */
  drawerContent: z.custom<React.ReactNode>().optional(),
  /** Additional props passed to the drawer */
  drawerProps: z.unknown().optional()
})

export type CompassContentPropsProps = z.infer<typeof CompassContentPropsSchema>
