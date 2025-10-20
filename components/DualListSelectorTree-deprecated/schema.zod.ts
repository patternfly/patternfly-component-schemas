// Auto-generated Zod schema for DualListSelectorTree-deprecated
// Generated on: 2025-10-10T18:12:17.798Z
import { z } from 'zod'

export const DualListSelectorTreeSchema = z.object({
  /** Data of the tree view */
  data: z.array(z.any()),
  /** Sets the default expanded behavior */
  defaultAllExpanded: z.boolean().optional().default(false),
  /** Flag indicating if all options should have badges */
  hasBadges: z.boolean().optional().default(false),
  /** ID of the tree view */
  id: z.string().optional(),
  /** Flag indicating if the dual list selector tree is in the disabled state */
  isDisabled: z.boolean().optional().default(false),
  /** Callback fired when an option is checked */
  onOptionCheck: z.any().optional()
})

export type DualListSelectorTreeProps = z.infer<typeof DualListSelectorTreeSchema>
