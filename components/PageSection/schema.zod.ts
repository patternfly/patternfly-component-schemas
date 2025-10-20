// Auto-generated Zod schema for PageSection
import { z } from 'zod'

export const PageSectionSchema = z.object({
  /** Adds an accessible name to the page section. Required when the hasOverflowScroll prop is set to true.
This prop should also be passed in if a heading is not being used to describe the content of the page section. */
  'aria-label': z.string().optional(),
  /** Content rendered inside the section */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the section */
  className: z.string().optional().default(''),
  /** Sets the base component to render. Defaults to section */
  component: z.unknown().optional().default('section'),
  /** Flag indicating whether children passed to the component should be wrapped by a PageBody.
Set this to false in order to pass multiple, custom PageBody's as children. */
  hasBodyWrapper: z.boolean().optional().default(true),
  /** Flag indicating if the PageSection has a scrolling overflow */
  hasOverflowScroll: z.boolean().optional().default(false),
  /** Modifier indicating if PageSection should have a shadow at the bottom */
  hasShadowBottom: z.boolean().optional().default(false),
  /** Modifier indicating if PageSection should have a shadow at the top */
  hasShadowTop: z.boolean().optional().default(false),
  /** Flag indicating if the section content is center aligned. isWidthLimited must be set for this to work */
  isCenterAligned: z.boolean().optional().default(false),
  /** Enables the page section to fill the available vertical space if true, or disable filling if false. */
  isFilled: z.boolean().optional(),
  /** Limits the width of the section */
  isWidthLimited: z.boolean().optional().default(false),
  /** Padding at various breakpoints. */
  padding: z.record(z.unknown()).optional(),
  /** Modifier indicating if the PageBreadcrumb is sticky to the top or bottom at various breakpoints */
  stickyOnBreakpoint: z.record(z.unknown()).optional(),
  /** Section type variant */
  type: z.enum(['default', 'subnav', 'breadcrumb', 'tabs', 'wizard']).optional().default('default'),
  /** Section background color variant. This will only apply when the type prop has the "default" value. */
  variant: z.enum(['default', 'secondary']).optional().default('default')
})

export type PageSectionProps = z.infer<typeof PageSectionSchema>
