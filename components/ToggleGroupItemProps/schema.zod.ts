// Auto-generated Zod schema for ToggleGroupItemProps
import { z } from 'zod'

export const ToggleGroupItemPropsSchema = z.object({
  /** Optional id for the button within the toggle group item */
  buttonId: z.string().optional(),
  /** Additional classes added to the toggle group item */
  className: z.string().optional(),
  /** Icon rendered inside the toggle group item */
  icon: z.custom<React.ReactNode>().optional(),
  /** Sets position of the icon when text is also passed in */
  iconPosition: z.enum(['start', 'end']).optional(),
  /** Flag indicating if the toggle group item is disabled */
  isDisabled: z.boolean().optional(),
  /** Flag indicating if the toggle group item is selected */
  isSelected: z.boolean().optional(),
  /** A callback for when the toggle group item selection changes. */
  onChange: z.any().optional(),
  /** Text rendered inside the toggle group item */
  text: z.custom<React.ReactNode>().optional(),
  /** required when icon is used with no supporting text */
  'Unknown': z.string().optional()
})

export type ToggleGroupItemPropsProps = z.infer<typeof ToggleGroupItemPropsSchema>
