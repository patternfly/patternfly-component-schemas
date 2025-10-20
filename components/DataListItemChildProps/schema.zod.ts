// Auto-generated Zod schema for DataListItemChildProps
import { z } from 'zod'

export const DataListItemChildPropsSchema = z.object({
  /** Id for the row */
  rowid: z.string()
})

export type DataListItemChildPropsProps = z.infer<typeof DataListItemChildPropsSchema>
