// Auto-generated Zod schema for DataListItemRow
import { z } from 'zod'

export const DataListItemRowSchema = z.object({
  /** Content rendered inside the DataListItemRow */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the DataListItemRow */
  className: z.string().optional().default(''),
  /** Id for the row item */
  rowid: z.string().optional().default(''),
  /** Determines which wrapping modifier to apply to the DataListItemRow */
  wrapModifier: z.enum(['nowrap', 'truncate', 'breakWord']).optional().default('null')
})

export type DataListItemRowProps = z.infer<typeof DataListItemRowSchema>
