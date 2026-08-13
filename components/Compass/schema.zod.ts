// Auto-generated Zod schema for Compass
import { z } from 'zod'

export const CompassSchema = z.object({
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
  /** Flag indicating the docked nav is expanded on mobile. Only applies when dock content is passed. */
  isDockExpanded: z.boolean().optional(),
  /** Flag indicating the docked nav should display text on desktop. Only applies when dock content is passed, and
will handle toggling the visibility of the text in individual isDocked components. */
  isDockTextExpanded: z.boolean().optional(),
  /** Flag indicating if the footer is expanded */
  isFooterExpanded: z.boolean().optional().default(true),
  /** Flag indicating if the header is expanded */
  isHeaderExpanded: z.boolean().optional().default(true),
  /** Flag indicating if the end sidebar is expanded */
  isSidebarEndExpanded: z.boolean().optional().default(true),
  /** Flag indicating if the start sidebar is expanded */
  isSidebarStartExpanded: z.boolean().optional().default(true),
  /** Content placed at the center of the layout */
  main: z.custom<React.ReactNode>().optional(),
  /** The horizontal masthead content (e.g. <Masthead />). This masthead will only render when dock content is passed and only at mobile viewports. */
  masthead: z.custom<React.ReactNode>().optional(),
  /** Content placed at the horizontal end of the layout, after the main content */
  sidebarEnd: z.custom<React.ReactNode>().optional(),
  /** Content placed at the horizontal start of the layout, before the main content */
  sidebarStart: z.custom<React.ReactNode>().optional()
})

export type CompassProps = z.infer<typeof CompassSchema>
