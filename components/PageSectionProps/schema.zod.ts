// Auto-generated Zod schema for PageSectionProps
import { z } from 'zod'

export const PageSectionPropsSchema = z.object({
  /** Content rendered inside the section */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the section */
  className: z.string().optional(),
  /** Sets the base component to render. Defaults to section */
  component: z.unknown().optional(),
  hasBodyWrapper: z.boolean().optional(),
  /** Flag indicating if the PageSection has a scrolling overflow */
  hasOverflowScroll: z.boolean().optional(),
  /** Modifier indicating if PageSection should have a shadow at the bottom */
  hasShadowBottom: z.boolean().optional(),
  /** Modifier indicating if PageSection should have a shadow at the top */
  hasShadowTop: z.boolean().optional(),
  /** Flag indicating if the section content is center aligned. isWidthLimited must be set for this to work */
  isCenterAligned: z.boolean().optional(),
  /** Enables the page section to fill the available vertical space if true, or disable filling if false. */
  isFilled: z.boolean().optional(),
  /** Limits the width of the section */
  isWidthLimited: z.boolean().optional(),
  /** Padding at various breakpoints. */
  padding: z.record(z.unknown()).optional(),
  /** Modifier indicating if the PageBreadcrumb is sticky to the top or bottom at various breakpoints */
  stickyOnBreakpoint: z.record(z.unknown()).optional(),
  /** Section type variant */
  type: z.enum(['default', 'subnav', 'breadcrumb', 'tabs', 'wizard']).optional(),
  /** Adds an accessible name to the page section. Required when the hasOverflowScroll prop is set to true.
This prop should also be passed in if a heading is not being used to describe the content of the page section. */
  'Unknown': z.string().optional(),
  /** Section background color variant. This will only apply when the type prop has the "default" value. */
  variant: z.enum(['default', 'secondary']).optional()
})

export type PageSectionPropsProps = z.infer<typeof PageSectionPropsSchema>
