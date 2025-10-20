// Auto-generated Zod schema for PageBreadcrumbProps
import { z } from 'zod'

export const PageBreadcrumbPropsSchema = z.object({
  /** Content rendered inside of the PageBreadcrumb */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes to apply to the PageBreadcrumb */
  className: z.string().optional(),
  hasBodyWrapper: z.boolean().optional(),
  /** Flag indicating if the PageBreadcrumb has a scrolling overflow */
  hasOverflowScroll: z.boolean().optional(),
  /** Flag indicating if PageBreadcrumb should have a shadow at the bottom */
  hasShadowBottom: z.boolean().optional(),
  /** Flag indicating if PageBreadcrumb should have a shadow at the top */
  hasShadowTop: z.boolean().optional(),
  /** Limits the width of the breadcrumb */
  isWidthLimited: z.boolean().optional(),
  /** Modifier indicating if the PageBreadcrumb is sticky to the top or bottom at various breakpoints */
  stickyOnBreakpoint: z.record(z.unknown()).optional(),
  /** Adds an accessible name to the breadcrumb section. Required when the hasOverflowScroll prop is set to true. */
  'Unknown': z.string().optional()
})

export type PageBreadcrumbPropsProps = z.infer<typeof PageBreadcrumbPropsSchema>
