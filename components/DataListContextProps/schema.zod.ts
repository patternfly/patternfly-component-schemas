// Auto-generated Zod schema for DataListContextProps
// Generated on: 2025-10-16T18:45:33.878Z
import { z } from 'zod'

export const DataListContextPropsSchema = z.object({
  isSelectable: z.boolean(),
  onSelectableRowChange: z.custom<Event>().optional(),
  selectedDataListItemId: z.string(),
  updateSelectedDataListItem: z.any()
})

export type DataListContextPropsProps = z.infer<typeof DataListContextPropsSchema>
