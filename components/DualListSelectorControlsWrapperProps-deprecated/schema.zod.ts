// Auto-generated Zod schema for DualListSelectorControlsWrapperProps-deprecated
import { z } from 'zod'

export const DualListSelectorControlsWrapperPropsSchema = z.object({
  /** Anything that can be rendered inside of the wrapper. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the wrapper. */
  className: z.string().optional(),
  innerRef: z.any().optional(),
  /** Accessible label for the dual list selector controls wrapper. */
  'Unknown': z.string().optional()
})

export type DualListSelectorControlsWrapperPropsProps = z.infer<typeof DualListSelectorControlsWrapperPropsSchema>
