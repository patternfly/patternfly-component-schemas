// Auto-generated Zod schema for Grid
import { z } from 'zod'

export const GridSchema = z.object({
  /** content rendered inside the Grid layout */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** additional classes added to the Grid layout */
  className: z.string().optional().default(''),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional().default('div'),
  /** Adds space between children. */
  hasGutter: z.boolean().optional(),
  /** the number of columns all grid items should span on a large device */
  lg: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of columns all grid items should span on a medium device */
  md: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** Modifies the flex layout element order property */
  order: z.record(z.unknown()).optional(),
  /** the number of columns all grid items should span on a small device */
  sm: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** The number of rows a column in the grid should span.  Value should be a number 1-12 */
  span: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional().default('null'),
  /** the number of columns all grid items should span on a xLarge device */
  xl: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional(),
  /** the number of columns all grid items should span on a 2xLarge device */
  xl2: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10), z.literal(11), z.literal(12)]).optional()
})

export type GridProps = z.infer<typeof GridSchema>
