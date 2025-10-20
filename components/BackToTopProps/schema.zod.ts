// Auto-generated Zod schema for BackToTopProps
import { z } from 'zod'

export const BackToTopPropsSchema = z.object({
  /** Additional classes added to the back to top. */
  className: z.string().optional(),
  innerRef: z.unknown().optional(),
  /** Flag to always show back to top button, defaults to false. */
  isAlwaysVisible: z.boolean().optional(),
  /** Selector for the scrollable element to spy on. Not passing a selector defaults to spying on window scroll events. */
  scrollableSelector: z.string().optional(),
  /** Title to appear in back to top button. */
  title: z.string().optional()
})

export type BackToTopPropsProps = z.infer<typeof BackToTopPropsSchema>
