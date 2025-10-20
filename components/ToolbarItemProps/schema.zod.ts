// Auto-generated Zod schema for ToolbarItemProps
import { z } from 'zod'

export const ToolbarItemPropsSchema = z.object({
  /** Applies to a child of a flex layout, and aligns that child (and any adjacent children on the other side of it) to one side of the main axis */
  align: z.record(z.unknown()).optional(),
  /** Vertical alignment of children */
  alignItems: z.enum(['start', 'center', 'baseline', 'default', 'end', 'stretch']).optional(),
  /** Vertical alignment */
  alignSelf: z.enum(['start', 'center', 'baseline', 'default', 'end', 'stretch']).optional(),
  /** Content to be rendered inside the data toolbar item */
  children: z.custom<React.ReactNode>().optional(),
  /** Classes applied to root element of the data toolbar item */
  className: z.string().optional(),
  /** Sets only the column gap at various breakpoints. */
  columnGap: z.record(z.unknown()).optional(),
  /** Sets both the column and row gap at various breakpoints. */
  gap: z.record(z.unknown()).optional(),
  /** id for this data toolbar item */
  id: z.string().optional(),
  /** Flag indicating if the expand-all variant is expanded or not */
  isAllExpanded: z.boolean().optional(),
  /** Flag that modifies the toolbar item to hide overflow and respond to available space. Used for horizontal navigation. */
  isOverflowContainer: z.boolean().optional(),
  /** Sets only the row gap at various breakpoints. */
  rowGap: z.record(z.unknown()).optional(),
  /** Value to set for row wrapping at various breakpoints */
  rowWrap: z.record(z.unknown()).optional(),
  /** A type modifier which modifies spacing specifically depending on the type of item */
  variant: z.enum(['pagination', 'label', 'label-group', 'separator', 'expand-all']).optional(),
  /** Visibility at various breakpoints. */
  visibility: z.record(z.unknown()).optional()
})

export type ToolbarItemPropsProps = z.infer<typeof ToolbarItemPropsSchema>
