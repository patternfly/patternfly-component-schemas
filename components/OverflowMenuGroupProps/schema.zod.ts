// Auto-generated Zod schema for OverflowMenuGroupProps
import { z } from 'zod'

export const OverflowMenuGroupPropsSchema = z.object({
  /** Any elements that can be rendered in the menu */
  children: z.unknown().optional(),
  /** Additional classes added to the OverflowMenuGroup */
  className: z.string().optional(),
  /** Indicates a button or icon group */
  groupType: z.enum(['button', 'icon']).optional(),
  /** Modifies the overflow menu group visibility */
  isPersistent: z.boolean().optional()
})

export type OverflowMenuGroupPropsProps = z.infer<typeof OverflowMenuGroupPropsSchema>
