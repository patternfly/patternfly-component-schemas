// Auto-generated Zod schema for ToolbarLabel
// Generated on: 2025-10-16T18:45:33.835Z
import { z } from 'zod'

export const ToolbarLabelSchema = z.object({
  /** A unique key to identify this label */
  key: z.string(),
  /** The ReactNode to display in the label */
  node: z.custom<React.ReactNode>()
})

export type ToolbarLabelProps = z.infer<typeof ToolbarLabelSchema>
