// Auto-generated Zod schema for DataListCell
import { z } from 'zod'

export const DataListCellSchema = z.object({
  /** Aligns the cell content to the right of its parent. */
  alignRight: z.boolean().optional().default(false),
  /** Content rendered inside the DataList cell */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the DataList cell */
  className: z.string().optional().default(''),
  /** Enables the body Content to fill the height of the card */
  isFilled: z.boolean().optional().default(true),
  /** Set to true if the cell content is an Icon */
  isIcon: z.boolean().optional().default(false),
  /** Width (from 1-5) to the DataList cell */
  width: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional().default(1),
  /** Determines which wrapping modifier to apply to the DataListCell */
  wrapModifier: z.enum(['nowrap', 'truncate', 'breakWord']).optional().default('null')
})

export type DataListCellProps = z.infer<typeof DataListCellSchema>
