// Auto-generated Zod schema for DataListContent
import { z } from 'zod'

export const DataListContentSchema = z.object({
  /** Adds accessible text to the DataList toggle */
  'aria-label': z.string(),
  /** Content rendered inside the DataList item */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the DataList cell */
  className: z.string().optional().default(''),
  /** Flag to remove padding from the expandable content */
  hasNoPadding: z.boolean().optional().default(false),
  /** Identify the DataListContent item */
  id: z.string().optional().default(''),
  /** Flag to show if the expanded content of the DataList item is visible */
  isHidden: z.boolean().optional().default(false),
  /** Id for the row */
  rowid: z.string().optional().default('')
})

export type DataListContentProps = z.infer<typeof DataListContentSchema>
