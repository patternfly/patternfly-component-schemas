// Auto-generated Zod schema for PageGroup
import { z } from 'zod'

export const PageGroupSchema = z.object({
  /** Adds an accessible name to the page group when the hasOverflowScroll prop is set to true. */
  'aria-label': z.string().optional(),
  /** Content rendered inside of the PageGroup */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes to apply to the PageGroup */
  className: z.string().optional().default(''),
  /** Flag indicating if the PageGroup has a scrolling overflow */
  hasOverflowScroll: z.boolean().optional().default(false),
  /** Modifier indicating if PageGroup should have a shadow at the bottom */
  hasShadowBottom: z.boolean().optional().default(false),
  /** Modifier indicating if PageGroup should have a shadow at the top */
  hasShadowTop: z.boolean().optional().default(false),
  /** Enables the page group to fill the available vertical space if true, or disable filling if false. */
  isFilled: z.boolean().optional(),
  /** Prevents the page group from automatically applying plain styling when glass theme is enabled. */
  isNoPlainOnGlass: z.boolean().optional().default(false),
  /** Adds plain styling to the page group. */
  isPlain: z.boolean().optional().default(false),
  /** Flag indicating if the group has stuck styling, applied when the group is not at the edge of the scroll parent container. */
  isStickyStuck: z.boolean().optional().default(false),
  /** Applies the base sticky positioning to the top or bottom of the scroll parent container. */
  stickyBase: z.enum(['top', 'bottom']).optional(),
  /** Modifier indicating if the PageBreadcrumb is sticky to the top or bottom at various breakpoints */
  stickyOnBreakpoint: z.record(z.unknown()).optional()
})

export type PageGroupProps = z.infer<typeof PageGroupSchema>
