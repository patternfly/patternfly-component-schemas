// Auto-generated Zod schema for DataListItemCells
import { z } from 'zod'

export const DataListItemCellsSchema = z.object({
  /** Additional classes added to the data list item content wrapper.  Children should be one or more <DataListCell> nodes */
  className: z.string().optional().default(''),
  /** Array of <DataListCell> nodes that are rendered one after the other. */
  dataListCells: z.custom<React.ReactNode>().optional(),
  /** Id for the row */
  rowid: z.string().optional().default('')
})

export type DataListItemCellsProps = z.infer<typeof DataListItemCellsSchema>
