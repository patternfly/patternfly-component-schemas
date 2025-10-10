// Auto-generated Zod schema for DualListSelectorTreeProps-deprecated
// Generated on: 2025-10-10T18:12:17.799Z
import { z } from 'zod'

export const DualListSelectorTreePropsSchema = z.object({
  /** Data of the tree view */
  data: z.array(z.any()),
  /** Sets the default expanded behavior */
  defaultAllExpanded: z.boolean().optional(),
  /** Flag indicating if all options should have badges */
  hasBadges: z.boolean().optional(),
  /** ID of the tree view */
  id: z.string().optional(),
  /** Flag indicating if the dual list selector tree is in the disabled state */
  isDisabled: z.boolean().optional(),
  isNested: z.boolean().optional(),
  /** Callback fired when an option is checked */
  onOptionCheck: z.any().optional()
})

export type DualListSelectorTreePropsProps = z.infer<typeof DualListSelectorTreePropsSchema>
