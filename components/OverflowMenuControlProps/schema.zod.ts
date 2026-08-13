// Auto-generated Zod schema for OverflowMenuControlProps
import { z } from 'zod'

export const OverflowMenuControlPropsSchema = z.object({
  /** Any elements that can be rendered in the menu */
  children: z.unknown().optional(),
  /** Additional classes added to the OverflowMenuControl */
  className: z.string().optional(),
  /** Triggers the overflow dropdown to persist at all viewport sizes */
  hasAdditionalOptions: z.boolean().optional()
})

export type OverflowMenuControlPropsProps = z.infer<typeof OverflowMenuControlPropsSchema>
