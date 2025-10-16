// Auto-generated Zod schema for TabActionProps
// Generated on: 2025-10-16T19:25:27.750Z
import { z } from 'zod'

export const TabActionPropsSchema = z.object({
  /** Content rendered in the tab action */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the tab action span */
  className: z.string().optional(),
  innerRef: z.unknown().optional(),
  /** Flag indicating if the tab action is disabled */
  isDisabled: z.boolean().optional(),
  /** Click callback for tab action button */
  onClick: z.custom<Event>().optional(),
  /** Accessible label for the tab action */
  'Unknown': z.string().optional()
})

export type TabActionPropsProps = z.infer<typeof TabActionPropsSchema>
