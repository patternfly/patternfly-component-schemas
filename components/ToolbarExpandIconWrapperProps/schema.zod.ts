// Auto-generated Zod schema for ToolbarExpandIconWrapperProps
import { z } from 'zod'

export const ToolbarExpandIconWrapperPropsSchema = z.object({
  /** Icon content used for the expand all or collapse all indication. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the span */
  className: z.string().optional()
})

export type ToolbarExpandIconWrapperPropsProps = z.infer<typeof ToolbarExpandIconWrapperPropsSchema>
