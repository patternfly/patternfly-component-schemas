// Auto-generated Zod schema for DualListSelectorListWrapperProps-deprecated
// Generated on: 2025-10-10T18:12:17.799Z
import { z } from 'zod'

export const DualListSelectorListWrapperPropsSchema = z.object({
  /** Anything that can be rendered inside of the list */
  children: z.any().optional(),
  /** Additional classes applied to the dual list selector. */
  className: z.string().optional(),
  displayOption: z.any().optional(),
  /** Id of the dual list selector list */
  id: z.string().optional(),
  innerRef: z.any().optional(),
  /** Flag indicating whether the component is disabled. */
  isDisabled: z.boolean().optional(),
  onOptionSelect: z.any().optional(),
  options: z.array(z.any()).optional(),
  selectedOptions: z.array(z.any()).optional(),
  /** Accessibly label for the list */
  'Unknown': z.string()
})

export type DualListSelectorListWrapperPropsProps = z.infer<typeof DualListSelectorListWrapperPropsSchema>
