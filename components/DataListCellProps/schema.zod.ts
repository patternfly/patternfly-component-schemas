// Auto-generated Zod schema for DataListCellProps
import { z } from 'zod'

export const DataListCellPropsSchema = z.object({
  /** Aligns the cell content to the right of its parent. */
  alignRight: z.boolean().optional(),
  /** Content rendered inside the data list cell */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the data list cell */
  className: z.string().optional(),
  /** Enables the body content to fill the height of the card */
  isFilled: z.boolean().optional(),
  /** Set to true if the cell content is an icon */
  isIcon: z.boolean().optional(),
  /** Width (from 1-5) to the data list cell */
  width: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
  /** Determines which wrapping modifier to apply to the data list cell */
  wrapModifier: z.enum(['nowrap', 'truncate', 'breakWord']).optional()
})

export type DataListCellPropsProps = z.infer<typeof DataListCellPropsSchema>
