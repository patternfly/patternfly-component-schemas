// Auto-generated Zod schema for DescriptionList
// Generated on: 2025-10-10T18:12:17.789Z
import { z } from 'zod'

export const DescriptionListSchema = z.object({
  /** Sets the minimum column size for the auto-fit (isAutoFit) layout at various breakpoints. */
  autoFitMinModifier: z.object({}).optional(),
  /** Anything that can be rendered inside of the list */
  children: z.any().optional().default('null'),
  /** Additional classes added to the list */
  className: z.string().optional().default(''),
  /** Sets the number of columns on the description list at various breakpoints */
  columnModifier: z.enum(['2Col', '3Col';
  sm?: '1Col', '2Col', '3Col';
  md?: '1Col', '2Col', '3Col';
  lg?: '1Col', '2Col', '3Col';
  xl?: '1Col', '2Col', '3Col';
  '2xl'?: '1Col', '2Col', '3Col';
']).optional(),
  /** Sets the display size of the descriptions in the description list. */
  displaySize: z.enum(['default', 'lg', '2xl']).optional().default('default'),
  /** Sets the horizontal description list's term column width at various breakpoints. */
  horizontalTermWidthModifier: z.object({}).optional(),
  /** Sets the description list to format automatically. */
  isAutoColumnWidths: z.boolean().optional(),
  /** Sets the description list to auto fit. */
  isAutoFit: z.boolean().optional(),
  /** Sets the description list to compact styling. */
  isCompact: z.boolean().optional(),
  /** Sets the the default placement of description list groups to fill from top to bottom. */
  isFillColumns: z.boolean().optional(),
  /** Sets a horizontal description list to have fluid styling. */
  isFluid: z.boolean().optional(),
  /** Sets the description list component term and description pair to a horizontal layout. */
  isHorizontal: z.boolean().optional().default(false),
  /** Modifies the description list display to inline-grid. */
  isInlineGrid: z.boolean().optional(),
  /** Indicates how the menu will align at various breakpoints. */
  orientation: z.enum(['horizontal';
  md?: 'vertical', 'horizontal';
  lg?: 'vertical', 'horizontal';
  xl?: 'vertical', 'horizontal';
  '2xl'?: 'vertical', 'horizontal';
']).optional(),
  /** Sets the description list's term column width. */
  termWidth: z.string().optional()
})

export type DescriptionListProps = z.infer<typeof DescriptionListSchema>
