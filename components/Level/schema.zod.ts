// Auto-generated Zod schema for Level
// Generated on: 2025-10-10T18:12:17.760Z
import { z } from 'zod'

export const LevelSchema = z.object({
  /** content rendered inside the Level layout */
  children: z.any().optional().default('null'),
  /** additional classes added to the Level layout */
  className: z.string().optional().default(''),
  /** Adds space between children. */
  hasGutter: z.boolean().optional()
})

export type LevelProps = z.infer<typeof LevelSchema>
