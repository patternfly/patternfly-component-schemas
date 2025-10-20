// Auto-generated Zod schema for PageBreadcrumb
import { z } from 'zod'

export const PageBreadcrumbSchema = z.object({
  /** Adds an accessible name to the breadcrumb section. Required when the hasOverflowScroll prop is set to true. */
  'aria-label': z.string().optional(),
  /** Content rendered inside of the PageBreadcrumb */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes to apply to the PageBreadcrumb */
  className: z.string().optional().default(''),
  /** Flag indicating whether children passed to the component should be wrapped by a PageBody.
Set this to false in order to pass multiple, custom PageBody's as children. */
  hasBodyWrapper: z.boolean().optional().default(true),
  /** Flag indicating if the PageBreadcrumb has a scrolling overflow */
  hasOverflowScroll: z.boolean().optional().default(false),
  /** Flag indicating if PageBreadcrumb should have a shadow at the bottom */
  hasShadowBottom: z.boolean().optional().default(false),
  /** Flag indicating if PageBreadcrumb should have a shadow at the top */
  hasShadowTop: z.boolean().optional().default(false),
  /** Limits the width of the breadcrumb */
  isWidthLimited: z.boolean().optional(),
  /** Modifier indicating if the PageBreadcrumb is sticky to the top or bottom at various breakpoints */
  stickyOnBreakpoint: z.record(z.unknown()).optional()
})

export type PageBreadcrumbProps = z.infer<typeof PageBreadcrumbSchema>
