// Auto-generated Zod schema for PaginationToggleTemplateProps
import { z } from 'zod'

export const PaginationToggleTemplatePropsSchema = z.object({
  /** The first index of the items being paginated */
  firstIndex: z.number().optional(),
  /** The total number of items being paginated */
  itemCount: z.number().optional(),
  /** The type or title of the items being paginated */
  itemsTitle: z.string().optional(),
  /** The last index of the items being paginated */
  lastIndex: z.number().optional(),
  /** The word that joins the index and itemCount/itemsTitle */
  ofWord: z.custom<React.ReactNode>().optional()
})

export type PaginationToggleTemplatePropsProps = z.infer<typeof PaginationToggleTemplatePropsSchema>
