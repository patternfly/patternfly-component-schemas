// Auto-generated Zod schema for DataListControl
import { z } from 'zod'

export const DataListControlSchema = z.object({
  /** Children of the data list control */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the DataList item control */
  className: z.string().optional().default('')
})

export type DataListControlProps = z.infer<typeof DataListControlSchema>
