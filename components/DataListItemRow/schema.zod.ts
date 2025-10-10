// Auto-generated Zod schema for DataListItemRow
// Generated on: 2025-10-10T18:12:17.788Z
import { z } from 'zod'

export const DataListItemRowSchema = z.object({
  /** Content rendered inside the DataListItemRow */
  children: z.any(),
  /** Additional classes added to the DataListItemRow */
  className: z.string().optional().default(''),
  /** Id for the row item */
  rowid: z.string().optional().default(''),
  /** Determines which wrapping modifier to apply to the DataListItemRow */
  wrapModifier: z.enum(['nowrap', 'truncate', 'breakWord']).optional().default('null')
})

export type DataListItemRowProps = z.infer<typeof DataListItemRowSchema>
