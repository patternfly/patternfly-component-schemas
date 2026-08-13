// Auto-generated Zod schema for MenuList
import { z } from 'zod'

export const MenuListSchema = z.object({
  /** Adds an accessible name to the menu. */
  'aria-label': z.string().optional(),
  /** Anything that can be rendered inside of menu list */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the menu list */
  className: z.string().optional(),
  /** Indicates to assistive technologies whether more than one item can be selected
for a non-checkbox menu. Only applies when the menu's role is "listbox". */
  isAriaMultiselectable: z.boolean().optional().default(false)
})

export type MenuListProps = z.infer<typeof MenuListSchema>
