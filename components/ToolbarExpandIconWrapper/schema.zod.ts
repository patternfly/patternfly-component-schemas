// Auto-generated Zod schema for ToolbarExpandIconWrapper
import { z } from 'zod'

export const ToolbarExpandIconWrapperSchema = z.object({
  /** Icon content used for the expand all or collapse all indication. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the span */
  className: z.string().optional()
})

export type ToolbarExpandIconWrapperProps = z.infer<typeof ToolbarExpandIconWrapperSchema>
