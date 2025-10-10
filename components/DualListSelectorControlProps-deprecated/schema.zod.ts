// Auto-generated Zod schema for DualListSelectorControlProps-deprecated
// Generated on: 2025-10-10T18:12:17.799Z
import { z } from 'zod'

export const DualListSelectorControlPropsSchema = z.object({
  /** Content to be rendered in the dual list selector control. */
  children: z.any().optional(),
  /** Additional classes applied to the dual list selector control. */
  className: z.string().optional(),
  innerRef: z.any().optional(),
  /** Flag indicating the control is disabled. */
  isDisabled: z.boolean().optional(),
  /** Callback fired when dual list selector control is selected. */
  onClick: z.any().optional(),
  /** Content to be displayed in a tooltip on hover of control. */
  tooltipContent: z.any().optional(),
  /** Additional tooltip properties passed to the tooltip. */
  tooltipProps: z.any().optional(),
  /** Accessible label for the dual list selector control. */
  'Unknown': z.string().optional()
})

export type DualListSelectorControlPropsProps = z.infer<typeof DualListSelectorControlPropsSchema>
