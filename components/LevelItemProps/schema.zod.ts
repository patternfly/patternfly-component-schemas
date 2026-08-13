// Auto-generated Zod schema for LevelItemProps
import { z } from 'zod'

export const LevelItemPropsSchema = z.object({
  /** content rendered inside the Level Layout Item */
  children: z.custom<React.ReactNode>().optional()
})

export type LevelItemPropsProps = z.infer<typeof LevelItemPropsSchema>
