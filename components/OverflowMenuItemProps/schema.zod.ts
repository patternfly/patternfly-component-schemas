// Auto-generated Zod schema for OverflowMenuItemProps
import { z } from 'zod'

export const OverflowMenuItemPropsSchema = z.object({
  /** Any elements that can be rendered in the menu */
  children: z.unknown().optional(),
  /** Additional classes added to the OverflowMenuItem */
  className: z.string().optional(),
  /** Modifies the overflow menu item visibility */
  isPersistent: z.boolean().optional()
})

export type OverflowMenuItemPropsProps = z.infer<typeof OverflowMenuItemPropsSchema>
