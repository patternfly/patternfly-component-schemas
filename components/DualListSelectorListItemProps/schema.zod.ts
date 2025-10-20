// Auto-generated Zod schema for DualListSelectorListItemProps
import { z } from 'zod'

export const DualListSelectorListItemPropsSchema = z.object({
  /** Content rendered inside the dual list selector. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the dual list selector. */
  className: z.string().optional(),
  /** Accessible label for the draggable button on draggable list items. */
  draggableButtonAriaLabel: z.string().optional(),
  /** ID of the option. */
  id: z.string().optional(),
  innerRef: z.any().optional(),
  /** Flag indicating if the dual list selector is in a disabled state. */
  isDisabled: z.boolean().optional(),
  /** Flag indicating this item is draggable for reordering. */
  isDraggable: z.boolean().optional(),
  /** Flag indicating the list item is currently selected. */
  isSelected: z.boolean().optional(),
  /** Callback fired when an option is selected. */
  onOptionSelect: z.any().optional(),
  orderIndex: z.number().optional()
})

export type DualListSelectorListItemPropsProps = z.infer<typeof DualListSelectorListItemPropsSchema>
