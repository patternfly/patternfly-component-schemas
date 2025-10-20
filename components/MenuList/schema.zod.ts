// Auto-generated Zod schema for MenuList
// Generated on: 2025-10-10T18:12:17.778Z
import { z } from 'zod'

export const MenuListSchema = z.object({
  /** Adds an accessible name to the menu. */
  'aria-label': z.string().optional(),
  /** Anything that can be rendered inside of menu list */
  children: z.any().optional().default('null'),
  /** Additional classes added to the menu list */
  className: z.string().optional(),
  /** Indicates to assistive technologies whether more than one item can be selected
for a non-checkbox menu. Only applies when the menu's role is "listbox". */
  isAriaMultiselectable: z.boolean().optional().default(false)
})

export type MenuListProps = z.infer<typeof MenuListSchema>
