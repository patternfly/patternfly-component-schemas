// Auto-generated Zod schema for LevelItem
// Generated on: 2025-10-10T18:12:17.760Z
import { z } from 'zod'

export const LevelItemSchema = z.object({
  /** content rendered inside the Level Layout Item */
  children: z.any().optional().default('null')
})

export type LevelItemProps = z.infer<typeof LevelItemSchema>
