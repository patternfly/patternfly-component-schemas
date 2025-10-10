// Auto-generated Zod schema for ToolbarLabel
// Generated on: 2025-10-10T18:12:17.766Z
import { z } from 'zod'

export const ToolbarLabelSchema = z.object({
  /** A unique key to identify this label */
  key: z.string(),
  /** The ReactNode to display in the label */
  node: z.any()
})

export type ToolbarLabelProps = z.infer<typeof ToolbarLabelSchema>
