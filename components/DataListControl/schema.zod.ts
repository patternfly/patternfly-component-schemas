// Auto-generated Zod schema for DataListControl
// Generated on: 2025-10-10T18:12:17.788Z
import { z } from 'zod'

export const DataListControlSchema = z.object({
  /** Children of the data list control */
  children: z.any().optional(),
  /** Additional classes added to the DataList item control */
  className: z.string().optional().default('')
})

export type DataListControlProps = z.infer<typeof DataListControlSchema>
