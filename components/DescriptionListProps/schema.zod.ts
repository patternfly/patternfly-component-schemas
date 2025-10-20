// Auto-generated Zod schema for DescriptionListProps
import { z } from 'zod'

export const DescriptionListPropsSchema = z.object({
  /** Sets the minimum column size for the auto-fit (isAutoFit) layout at various breakpoints. */
  autoFitMinModifier: z.record(z.unknown()).optional(),
  /** Anything that can be rendered inside of the list */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the list */
  className: z.string().optional(),
  /** Sets the number of columns on the description list at various breakpoints */
  columnModifier: z.record(z.unknown()).optional(),
  /** Sets the display size of the descriptions in the description list. */
  displaySize: z.enum(['default', 'lg', '2xl']).optional(),
  /** Sets the horizontal description list's term column width at various breakpoints. */
  horizontalTermWidthModifier: z.record(z.unknown()).optional(),
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
  orientation: z.record(z.unknown()).optional(),
  /** Sets the description list's term column width. */
  termWidth: z.string().optional()
})

export type DescriptionListPropsProps = z.infer<typeof DescriptionListPropsSchema>
