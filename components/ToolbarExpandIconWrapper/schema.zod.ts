// Auto-generated Zod schema for ToolbarExpandIconWrapper
// Generated on: 2025-10-10T18:12:17.766Z
import { z } from 'zod'

export const ToolbarExpandIconWrapperSchema = z.object({
  /** Icon content used for the expand all or collapse all indication. */
  children: z.any().optional(),
  /** Additional classes added to the span */
  className: z.string().optional()
})

export type ToolbarExpandIconWrapperProps = z.infer<typeof ToolbarExpandIconWrapperSchema>
