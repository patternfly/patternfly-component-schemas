// Auto-generated Zod schema for DualListSelectorTreeItemBase
import { z } from 'zod'

export const DualListSelectorTreeItemBaseSchema = z.object({
  /** Additional properties to pass to the option badge. */
  badgeProps: z.unknown().optional(),
  /** Additional properties to pass to the option checkbox. */
  checkProps: z.unknown().optional(),
  /** Content rendered inside the dual list selector. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the dual list selector. */
  className: z.string().optional(),
  /** Flag indicating this option is expanded by default. */
  defaultExpanded: z.boolean().optional(),
  /** Flag indicating this option has a badge. */
  hasBadge: z.boolean().optional(),
  /** ID of the option. */
  id: z.string(),
  /** Flag indicating if this open is checked. */
  isChecked: z.boolean().optional(),
  /** Flag indicating whether the component is disabled. */
  isDisabled: z.boolean().optional().default(false),
  /** Raw data of the option. */
  itemData: z.unknown().optional(),
  /** Callback fired when an option is checked. */
  onOptionCheck: z.any().optional(),
  /** Text of the option. */
  text: z.string(),
  /** Flag indicating the DualListSelector tree should utilize memoization to help render large data sets. */
  useMemo: z.boolean().optional()
})

export type DualListSelectorTreeItemBaseProps = z.infer<typeof DualListSelectorTreeItemBaseSchema>
