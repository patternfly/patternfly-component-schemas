// Auto-generated Zod schema for LevelProps
import { z } from 'zod'

export const LevelPropsSchema = z.object({
  /** content rendered inside the Level layout */
  children: z.custom<React.ReactNode>().optional(),
  /** additional classes added to the Level layout */
  className: z.string().optional(),
  /** Adds space between children. */
  hasGutter: z.boolean().optional()
})

export type LevelPropsProps = z.infer<typeof LevelPropsSchema>
