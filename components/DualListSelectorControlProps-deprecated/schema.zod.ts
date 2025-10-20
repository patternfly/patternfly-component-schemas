// Auto-generated Zod schema for DualListSelectorControlProps-deprecated
import { z } from 'zod'

export const DualListSelectorControlPropsSchema = z.object({
  /** Content to be rendered in the dual list selector control. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the dual list selector control. */
  className: z.string().optional(),
  innerRef: z.unknown().optional(),
  /** Flag indicating the control is disabled. */
  isDisabled: z.boolean().optional(),
  /** Callback fired when dual list selector control is selected. */
  onClick: z.custom<Event>().optional(),
  /** Content to be displayed in a tooltip on hover of control. */
  tooltipContent: z.custom<React.ReactNode>().optional(),
  /** Additional tooltip properties passed to the tooltip. */
  tooltipProps: z.unknown().optional(),
  /** Accessible label for the dual list selector control. */
  'Unknown': z.string().optional()
})

export type DualListSelectorControlPropsProps = z.infer<typeof DualListSelectorControlPropsSchema>
