// Auto-generated Zod schema for CardExpandableContentProps
import { z } from 'zod'

export const CardExpandableContentPropsSchema = z.object({
  /** Content rendered inside the Card Body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Card Body */
  className: z.string().optional()
})

export type CardExpandableContentPropsProps = z.infer<typeof CardExpandableContentPropsSchema>
