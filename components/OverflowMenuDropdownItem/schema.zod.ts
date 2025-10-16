// Auto-generated Zod schema for OverflowMenuDropdownItem
// Generated on: 2025-10-16T19:02:51.734Z
import { z } from 'zod'

export const OverflowMenuDropdownItemSchema = z.object({
  /** Indicates when a dropdown item shows and hides the corresponding list item */
  isShared: z.boolean().optional().default(false),
  /** Identifies the component in the dropdown onSelect callback */
  itemId: z.any().optional()
})

export type OverflowMenuDropdownItemProps = z.infer<typeof OverflowMenuDropdownItemSchema>
