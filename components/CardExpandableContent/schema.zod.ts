// Auto-generated Zod schema for CardExpandableContent
// Generated on: 2025-10-10T18:12:17.791Z
import { z } from 'zod'

export const CardExpandableContentSchema = z.object({
  /** Content rendered inside the Card Body */
  children: z.any().optional(),
  /** Additional classes added to the Card Body */
  className: z.string().optional()
})

export type CardExpandableContentProps = z.infer<typeof CardExpandableContentSchema>
