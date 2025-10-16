// Auto-generated Zod schema for DropdownList
// Generated on: 2025-10-10T18:12:17.786Z
import { z } from 'zod'

export const DropdownListSchema = z.object({
  /** Adds an accessible name to the menu. */
  'aria-label': z.string().optional(),
  /** Anything that can be rendered inside of menu list */
  children: z.any(),
  /** Additional classes added to the menu list */
  className: z.string().optional(),
  /** Indicates to assistive technologies whether more than one item can be selected
for a non-checkbox menu. Only applies when the menu's role is "listbox". */
  isAriaMultiselectable: z.boolean().optional()
})

export type DropdownListProps = z.infer<typeof DropdownListSchema>
