// Auto-generated Zod schema for DataListControlProps
import { z } from 'zod'

export const DataListControlPropsSchema = z.object({
  /** Children of the data list control */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the DataList item control */
  className: z.string().optional()
})

export type DataListControlPropsProps = z.infer<typeof DataListControlPropsSchema>
