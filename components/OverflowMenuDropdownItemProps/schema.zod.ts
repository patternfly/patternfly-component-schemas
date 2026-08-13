// Auto-generated Zod schema for OverflowMenuDropdownItemProps
import { z } from 'zod'

export const OverflowMenuDropdownItemPropsSchema = z.object({
  /** Indicates when a dropdown item shows and hides the corresponding list item */
  isShared: z.boolean().optional(),
  /** Identifies the component in the dropdown onSelect callback */
  itemId: z.any().optional()
})

export type OverflowMenuDropdownItemPropsProps = z.infer<typeof OverflowMenuDropdownItemPropsSchema>
