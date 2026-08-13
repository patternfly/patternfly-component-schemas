// Auto-generated Zod schema for CardExpandableContent
import { z } from 'zod'

export const CardExpandableContentSchema = z.object({
  /** Content rendered inside the Card Body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Card Body */
  className: z.string().optional()
})

export type CardExpandableContentProps = z.infer<typeof CardExpandableContentSchema>
