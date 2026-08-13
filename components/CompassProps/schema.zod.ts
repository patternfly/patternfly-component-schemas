// Auto-generated Zod schema for CompassProps
import { z } from 'zod'

export const CompassPropsSchema = z.object({
  /** Additional classes added to the Compass. */
  className: z.string().optional(),
  /** Content of the docked navigation area of the layout */
  dock: z.custom<React.ReactNode>().optional(),
  /** Content rendered in an optional drawer wrapping the layout */
  drawerContent: z.custom<React.ReactNode>().optional(),
  /** Additional props passed to the drawer */
  drawerProps: z.unknown().optional(),
  /** Content placed at the bottom of the layout */
  footer: z.custom<React.ReactNode>().optional(),
  /** Content placed at the top of the compass layout */
  header: z.custom<React.ReactNode>().optional(),
  isDockExpanded: z.boolean().optional(),
  isDockTextExpanded: z.boolean().optional(),
  /** Flag indicating if the footer is expanded */
  isFooterExpanded: z.boolean().optional(),
  /** Flag indicating if the header is expanded */
  isHeaderExpanded: z.boolean().optional(),
  /** Flag indicating if the end sidebar is expanded */
  isSidebarEndExpanded: z.boolean().optional(),
  /** Flag indicating if the start sidebar is expanded */
  isSidebarStartExpanded: z.boolean().optional(),
  /** Content placed at the center of the layout */
  main: z.custom<React.ReactNode>().optional(),
  /** The horizontal masthead content (e.g. <Masthead />). This masthead will only render when dock content is passed and only at mobile viewports. */
  masthead: z.custom<React.ReactNode>().optional(),
  /** Content placed at the horizontal end of the layout, after the main content */
  sidebarEnd: z.custom<React.ReactNode>().optional(),
  /** Content placed at the horizontal start of the layout, before the main content */
  sidebarStart: z.custom<React.ReactNode>().optional()
})

export type CompassPropsProps = z.infer<typeof CompassPropsSchema>
