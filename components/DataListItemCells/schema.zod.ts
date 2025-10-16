// Auto-generated Zod schema for DataListItemCells
// Generated on: 2025-10-16T19:02:51.750Z
import { z } from 'zod'

export const DataListItemCellsSchema = z.object({
  /** Additional classes added to the DataList item Content Wrapper.  Children should be one ore more <DataListCell> nodes */
  className: z.string().optional().default(''),
  /** Array of <DataListCell> nodes that are rendered one after the other. */
  dataListCells: z.custom<React.ReactNode>().optional(),
  /** Id for the row */
  rowid: z.string().optional().default('')
})

export type DataListItemCellsProps = z.infer<typeof DataListItemCellsSchema>
