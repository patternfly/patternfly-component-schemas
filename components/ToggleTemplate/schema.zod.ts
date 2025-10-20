// Auto-generated Zod schema for ToggleTemplate
import { z } from 'zod'

export const ToggleTemplateSchema = z.object({
  /** The first index of the items being paginated */
  firstIndex: z.number().optional().default(0),
  /** The total number of items being paginated */
  itemCount: z.number().optional().default(0),
  /** The type or title of the items being paginated */
  itemsTitle: z.string().optional().default('items'),
  /** The last index of the items being paginated */
  lastIndex: z.number().optional().default(0),
  /** The word that joins the index and itemCount/itemsTitle */
  ofWord: z.custom<React.ReactNode>().optional().default('of')
})

export type ToggleTemplateProps = z.infer<typeof ToggleTemplateSchema>
