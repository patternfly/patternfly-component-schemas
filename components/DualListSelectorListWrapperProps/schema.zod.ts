// Auto-generated Zod schema for DualListSelectorListWrapperProps
import { z } from 'zod'

export const DualListSelectorListWrapperPropsSchema = z.object({
  /** Anything that can be rendered inside of the list. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the dual list selector. */
  className: z.string().optional(),
  displayOption: z.custom<React.ReactNode>().optional(),
  /** ID of the dual list selector list. */
  id: z.string().optional(),
  innerRef: z.any().optional(),
  /** Flag indicating whether the component is disabled. */
  isDisabled: z.boolean().optional(),
  options: z.array(z.custom<React.ReactNode>()).optional(),
  selectedOptions: z.any().optional(),
  /** Accessibly label for the list. */
  'Unknown': z.string()
})

export type DualListSelectorListWrapperPropsProps = z.infer<typeof DualListSelectorListWrapperPropsSchema>
