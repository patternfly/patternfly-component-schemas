// Auto-generated Zod schema for DualListSelectorControlsWrapperProps-deprecated
// Generated on: 2025-10-10T18:12:17.799Z
import { z } from 'zod'

export const DualListSelectorControlsWrapperPropsSchema = z.object({
  /** Anything that can be rendered inside of the wrapper. */
  children: z.any().optional(),
  /** Additional classes added to the wrapper. */
  className: z.string().optional(),
  innerRef: z.any().optional(),
  /** Accessible label for the dual list selector controls wrapper. */
  'Unknown': z.string().optional()
})

export type DualListSelectorControlsWrapperPropsProps = z.infer<typeof DualListSelectorControlsWrapperPropsSchema>
