// Auto-generated Zod schema for DataListContentProps
import { z } from 'zod'

export const DataListContentPropsSchema = z.object({
  /** Content rendered inside the DataList item */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the DataList cell */
  className: z.string().optional(),
  /** Flag to remove padding from the expandable content */
  hasNoPadding: z.boolean().optional(),
  /** Identify the DataListContent item */
  id: z.string().optional(),
  /** Flag to show if the expanded content of the DataList item is visible */
  isHidden: z.boolean().optional(),
  /** Id for the row */
  rowid: z.string().optional(),
  /** Adds accessible text to the DataList toggle */
  'Unknown': z.string()
})

export type DataListContentPropsProps = z.infer<typeof DataListContentPropsSchema>
