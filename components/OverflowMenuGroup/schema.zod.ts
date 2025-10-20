// Auto-generated Zod schema for OverflowMenuGroup
import { z } from 'zod'

export const OverflowMenuGroupSchema = z.object({
  /** Any elements that can be rendered in the menu */
  children: z.unknown().optional(),
  /** Additional classes added to the OverflowMenuGroup */
  className: z.string().optional(),
  /** Indicates a button or icon group */
  groupType: z.enum(['button', 'icon']).optional(),
  /** Modifies the overflow menu group visibility */
  isPersistent: z.boolean().optional().default(false)
})

export type OverflowMenuGroupProps = z.infer<typeof OverflowMenuGroupSchema>
