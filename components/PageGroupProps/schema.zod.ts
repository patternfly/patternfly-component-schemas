// Auto-generated Zod schema for PageGroupProps
import { z } from 'zod'

export const PageGroupPropsSchema = z.object({
  /** Content rendered inside of the PageGroup */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes to apply to the PageGroup */
  className: z.string().optional(),
  /** Flag indicating if the PageGroup has a scrolling overflow */
  hasOverflowScroll: z.boolean().optional(),
  /** Modifier indicating if PageGroup should have a shadow at the bottom */
  hasShadowBottom: z.boolean().optional(),
  /** Modifier indicating if PageGroup should have a shadow at the top */
  hasShadowTop: z.boolean().optional(),
  /** Enables the page group to fill the available vertical space if true, or disable filling if false. */
  isFilled: z.boolean().optional(),
  /** Modifier indicating if the PageBreadcrumb is sticky to the top or bottom at various breakpoints */
  stickyOnBreakpoint: z.record(z.unknown()).optional(),
  /** Adds an accessible name to the page group when the hasOverflowScroll prop is set to true. */
  'Unknown': z.string().optional()
})

export type PageGroupPropsProps = z.infer<typeof PageGroupPropsSchema>
