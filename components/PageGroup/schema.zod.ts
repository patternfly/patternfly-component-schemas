// Auto-generated Zod schema for PageGroup
// Generated on: 2025-10-16T18:56:01.631Z
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
  /** Modifier indicating if the PageBreadcrumb is sticky to the top or bottom at various breakpoints */
  stickyOnBreakpoint: z.enum(['bottom';
  sm?: 'top', 'bottom';
  md?: 'top', 'bottom';
  lg?: 'top', 'bottom';
  xl?: 'top', 'bottom';
  '2xl'?: 'top', 'bottom';
']).optional()
})

export type PageGroupProps = z.infer<typeof PageGroupSchema>
