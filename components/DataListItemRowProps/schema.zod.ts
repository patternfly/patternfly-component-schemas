// Auto-generated Zod schema for DataListItemRowProps
import { z } from 'zod'

export const DataListItemRowPropsSchema = z.object({
  /** Content rendered inside the DataListItemRow */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the DataListItemRow */
  className: z.string().optional(),
  /** Id for the row item */
  rowid: z.string().optional(),
  /** Determines which wrapping modifier to apply to the DataListItemRow */
  wrapModifier: z.enum(['nowrap', 'truncate', 'breakWord']).optional()
})

export type DataListItemRowPropsProps = z.infer<typeof DataListItemRowPropsSchema>
