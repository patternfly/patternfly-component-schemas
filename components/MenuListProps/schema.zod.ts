// Auto-generated Zod schema for MenuListProps
import { z } from 'zod'

export const MenuListPropsSchema = z.object({
  /** Anything that can be rendered inside of menu list */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the menu list */
  className: z.string().optional(),
  /** Indicates to assistive technologies whether more than one item can be selected
for a non-checkbox menu. Only applies when the menu's role is "listbox". */
  isAriaMultiselectable: z.boolean().optional(),
  /** Adds an accessible name to the menu. */
  'Unknown': z.string().optional()
})

export type MenuListPropsProps = z.infer<typeof MenuListPropsSchema>
