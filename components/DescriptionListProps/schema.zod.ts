// Auto-generated Zod schema for DescriptionListProps
// Generated on: 2025-10-16T18:56:01.652Z
import { z } from 'zod'

export const DescriptionListPropsSchema = z.object({
  /** Sets the minimum column size for the auto-fit (isAutoFit) layout at various breakpoints. */
  autoFitMinModifier: z.unknown().optional(),
  /** Anything that can be rendered inside of the list */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the list */
  className: z.string().optional(),
  /** Sets the number of columns on the description list at various breakpoints */
  columnModifier: z.enum(['2Col', '3Col';
    sm?: '1Col', '2Col', '3Col';
    md?: '1Col', '2Col', '3Col';
    lg?: '1Col', '2Col', '3Col';
    xl?: '1Col', '2Col', '3Col';
    '2xl'?: '1Col', '2Col', '3Col';
  ']).optional(),
  /** Sets the display size of the descriptions in the description list. */
  displaySize: z.enum(['default', 'lg', '2xl']).optional(),
  /** Sets the horizontal description list's term column width at various breakpoints. */
  horizontalTermWidthModifier: z.unknown().optional(),
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
  isHorizontal: z.boolean().optional(),
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

export type DescriptionListPropsProps = z.infer<typeof DescriptionListPropsSchema>
