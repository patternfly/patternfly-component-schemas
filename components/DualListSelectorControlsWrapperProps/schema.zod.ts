// Auto-generated Zod schema for DualListSelectorControlsWrapperProps
// Generated on: 2025-10-16T18:45:33.873Z
import { z } from 'zod'

export const DualListSelectorControlsWrapperPropsSchema = z.object({
  /** Content to be rendered inside of the controls wrapper. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the wrapper. */
  className: z.string().optional(),
  innerRef: z.any().optional(),
  /** Accessible label for the dual list selector controls wrapper. */
  'Unknown': z.string().optional()
})

export type DualListSelectorControlsWrapperPropsProps = z.infer<typeof DualListSelectorControlsWrapperPropsSchema>
