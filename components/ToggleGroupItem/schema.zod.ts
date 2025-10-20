// Auto-generated Zod schema for ToggleGroupItem
import { z } from 'zod'

export const ToggleGroupItemSchema = z.object({
  /** required when icon is used with no supporting text */
  'aria-label': z.string().optional(),
  /** Optional id for the button within the toggle group item */
  buttonId: z.string().optional(),
  /** Additional classes added to the toggle group item */
  className: z.string().optional(),
  /** Icon rendered inside the toggle group item */
  icon: z.custom<React.ReactNode>().optional(),
  /** Sets position of the icon when text is also passed in */
  iconPosition: z.enum(['start', 'end']).optional().default('start'),
  /** Flag indicating if the toggle group item is disabled */
  isDisabled: z.boolean().optional().default(false),
  /** Flag indicating if the toggle group item is selected */
  isSelected: z.boolean().optional().default(false),
  /** A callback for when the toggle group item selection changes. */
  onChange: z.any().optional().default('() => {}'),
  /** Text rendered inside the toggle group item */
  text: z.custom<React.ReactNode>().optional()
})

export type ToggleGroupItemProps = z.infer<typeof ToggleGroupItemSchema>
