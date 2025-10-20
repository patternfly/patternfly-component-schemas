// Auto-generated Zod schema for GridProps
import { z } from 'zod'

export const GridPropsSchema = z.object({
  /** content rendered inside the Grid layout */
  children: z.custom<React.ReactNode>().optional(),
  /** additional classes added to the Grid layout */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional(),
  /** Adds space between children. */
  hasGutter: z.boolean().optional(),
  /** the number of columns all grid items should span on a large device */
  lg: z.unknown().optional(),
  /** the number of columns all grid items should span on a medium device */
  md: z.unknown().optional(),
  /** Modifies the flex layout element order property */
  order: z.record(z.unknown()).optional(),
  /** the number of columns all grid items should span on a small device */
  sm: z.unknown().optional(),
  /** The number of rows a column in the grid should span.  Value should be a number 1-12 */
  span: z.unknown().optional(),
  /** the number of columns all grid items should span on a xLarge device */
  xl: z.unknown().optional(),
  /** the number of columns all grid items should span on a 2xLarge device */
  xl2: z.unknown().optional()
})

export type GridPropsProps = z.infer<typeof GridPropsSchema>
