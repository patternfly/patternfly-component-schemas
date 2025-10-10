// Auto-generated Zod schema for MenuGroup
// Generated on: 2025-10-10T18:12:17.779Z
import { z } from 'zod'

export const MenuGroupSchema = z.object({
  /** Items within group */
  children: z.any().optional(),
  /** Additional classes added to the MenuGroup */
  className: z.string().optional(),
  /** Group label */
  label: z.any().optional(),
  /** Group label heading level. Default is h1. */
  labelHeadingLevel: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional(),
  /** ID for title label */
  titleId: z.string().optional()
})

export type MenuGroupProps = z.infer<typeof MenuGroupSchema>
