// Auto-generated Zod schema for LevelItem
// Generated on: 2025-10-16T19:25:27.740Z
import { z } from 'zod'

export const LevelItemSchema = z.object({
  /** content rendered inside the Level Layout Item */
  children: z.custom<React.ReactNode>().optional().default('null')
})

export type LevelItemProps = z.infer<typeof LevelItemSchema>
