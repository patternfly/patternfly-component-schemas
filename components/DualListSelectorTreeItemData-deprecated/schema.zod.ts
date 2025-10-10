// Auto-generated Zod schema for DualListSelectorTreeItemData-deprecated
// Generated on: 2025-10-10T18:12:17.798Z
import { z } from 'zod'

export const DualListSelectorTreeItemDataSchema = z.object({
  /** Additional properties to pass to the option badge */
  badgeProps: z.any().optional(),
  /** Additional properties to pass to the option checkbox */
  checkProps: z.any().optional(),
  /** Content rendered inside the dual list selector. */
  children: z.array(z.any()).optional(),
  /** Additional classes applied to the dual list selector. */
  className: z.string().optional(),
  /** Flag indicating this option is expanded by default. */
  defaultExpanded: z.boolean().optional(),
  /** Flag indicating this option has a badge */
  hasBadge: z.boolean().optional(),
  /** ID of the option */
  id: z.string(),
  /** Checked state of the option */
  isChecked: z.boolean(),
  /** Flag indicating whether the component is disabled. */
  isDisabled: z.boolean().optional(),
  /** Callback fired when an option is checked */
  onOptionCheck: z.any().optional(),
  /** Parent id of an option */
  parentId: z.string().optional(),
  /** Text of the option */
  text: z.string()
})

export type DualListSelectorTreeItemDataProps = z.infer<typeof DualListSelectorTreeItemDataSchema>
