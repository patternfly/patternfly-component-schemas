// Auto-generated Zod schema for ToolbarLabelGroup
import { z } from 'zod'

export const ToolbarLabelGroupSchema = z.object({
  /** A unique key to identify this label group category */
  key: z.string(),
  /** The category name to display for the label group */
  name: z.string()
})

export type ToolbarLabelGroupProps = z.infer<typeof ToolbarLabelGroupSchema>
