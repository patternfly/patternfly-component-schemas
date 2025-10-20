// Auto-generated Zod schema for GridItem
import { z } from 'zod'

export const GridItemSchema = z.object({
  /** content rendered inside the Grid Layout Item */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** additional classes added to the Grid Layout Item */
  className: z.string().optional().default(''),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional().default('div'),
  /** the number of columns the grid item spans on large device. Value should be a number 1-12 */
  lg: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of columns the grid item is offset on large device. Value should be a number 1-12 */
  lgOffset: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of rows the grid item spans on large device. Value should be a number 1-12 */
  lgRowSpan: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of columns the grid item spans on medium device. Value should be a number 1-12 */
  md: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of columns the grid item is offset on medium device. Value should be a number 1-12 */
  mdOffset: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of rows the grid item spans on medium device. Value should be a number 1-12 */
  mdRowSpan: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of columns a grid item is offset */
  offset: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional().default('null'),
  /** Modifies the flex layout element order property */
  order: z.record(z.unknown()).optional(),
  /** the number of rows the grid item spans. Value should be a number 1-12 */
  rowSpan: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional().default('null'),
  /** the number of columns the grid item spans on small device. Value should be a number 1-12 */
  sm: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of columns the grid item is offset on small device. Value should be a number 1-12 */
  smOffset: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of rows the grid item spans on medium device. Value should be a number 1-12 */
  smRowSpan: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of columns the grid item spans. Value should be a number 1-12 */
  span: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional().default('null'),
  /** the number of columns the grid item spans on xLarge device. Value should be a number 1-12 */
  xl: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of columns the grid item spans on 2xLarge device. Value should be a number 1-12 */
  xl2: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of columns the grid item is offset on 2xLarge device. Value should be a number 1-12 */
  xl2Offset: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of rows the grid item spans on 2xLarge device. Value should be a number 1-12 */
  xl2RowSpan: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of columns the grid item is offset on xLarge device. Value should be a number 1-12 */
  xlOffset: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of rows the grid item spans on large device. Value should be a number 1-12 */
  xlRowSpan: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional()
})

export type GridItemProps = z.infer<typeof GridItemSchema>
