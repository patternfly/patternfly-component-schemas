// Auto-generated Zod schema for DataListItemCellsProps
import { z } from 'zod'

export const DataListItemCellsPropsSchema = z.object({
  /** Additional classes added to the data list item content wrapper.  Children should be one or more <DataListCell> nodes */
  className: z.string().optional(),
  /** Array of <DataListCell> nodes that are rendered one after the other. */
  dataListCells: z.custom<React.ReactNode>().optional(),
  /** Id for the row */
  rowid: z.string().optional()
})

export type DataListItemCellsPropsProps = z.infer<typeof DataListItemCellsPropsSchema>
