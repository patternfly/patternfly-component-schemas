// Auto-generated Zod schema for GridItemProps
import { z } from 'zod'

export const GridItemPropsSchema = z.object({
  /** content rendered inside the Grid Layout Item */
  children: z.custom<React.ReactNode>().optional(),
  /** additional classes added to the Grid Layout Item */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional(),
  /** the number of columns the grid item spans on large device. Value should be a number 1-12 */
  lg: z.unknown().optional(),
  /** the number of columns the grid item is offset on large device. Value should be a number 1-12 */
  lgOffset: z.unknown().optional(),
  /** the number of rows the grid item spans on large device. Value should be a number 1-12 */
  lgRowSpan: z.unknown().optional(),
  /** the number of columns the grid item spans on medium device. Value should be a number 1-12 */
  md: z.unknown().optional(),
  /** the number of columns the grid item is offset on medium device. Value should be a number 1-12 */
  mdOffset: z.unknown().optional(),
  /** the number of rows the grid item spans on medium device. Value should be a number 1-12 */
  mdRowSpan: z.unknown().optional(),
  /** the number of columns a grid item is offset */
  offset: z.unknown().optional(),
  /** Modifies the flex layout element order property */
  order: z.record(z.unknown()).optional(),
  /** the number of rows the grid item spans. Value should be a number 1-12 */
  rowSpan: z.unknown().optional(),
  /** the number of columns the grid item spans on small device. Value should be a number 1-12 */
  sm: z.unknown().optional(),
  /** the number of columns the grid item is offset on small device. Value should be a number 1-12 */
  smOffset: z.unknown().optional(),
  /** the number of rows the grid item spans on medium device. Value should be a number 1-12 */
  smRowSpan: z.unknown().optional(),
  /** the number of columns the grid item spans. Value should be a number 1-12 */
  span: z.unknown().optional(),
  /** the number of columns the grid item spans on xLarge device. Value should be a number 1-12 */
  xl: z.unknown().optional(),
  /** the number of columns the grid item spans on 2xLarge device. Value should be a number 1-12 */
  xl2: z.unknown().optional(),
  /** the number of columns the grid item is offset on 2xLarge device. Value should be a number 1-12 */
  xl2Offset: z.unknown().optional(),
  /** the number of rows the grid item spans on 2xLarge device. Value should be a number 1-12 */
  xl2RowSpan: z.unknown().optional(),
  /** the number of columns the grid item is offset on xLarge device. Value should be a number 1-12 */
  xlOffset: z.unknown().optional(),
  /** the number of rows the grid item spans on large device. Value should be a number 1-12 */
  xlRowSpan: z.unknown().optional()
})

export type GridItemPropsProps = z.infer<typeof GridItemPropsSchema>
