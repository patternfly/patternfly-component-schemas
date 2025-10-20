// Auto-generated Zod schema for ToolbarGroup
import { z } from 'zod'

export const ToolbarGroupSchema = z.object({
  /** Applies to a child of a flex layout, and aligns that child (and any adjacent children on the other side of it) to one side of the main axis */
  align: z.record(z.unknown()).optional(),
  /** Vertical alignment of children */
  alignItems: z.enum(['start', 'center', 'baseline', 'default', 'end', 'stretch']).optional(),
  /** Vertical alignment */
  alignSelf: z.enum(['start', 'center', 'baseline', 'default', 'end', 'stretch']).optional(),
  /** Content to be rendered inside the data toolbar group */
  children: z.custom<React.ReactNode>().optional(),
  /** Classes applied to root element of the data toolbar group */
  className: z.string().optional(),
  /** Sets only the column gap at various breakpoints. */
  columnGap: z.record(z.unknown()).optional(),
  /** Sets both the column and row gap at various breakpoints. */
  gap: z.record(z.unknown()).optional(),
  /** Flag that modifies the toolbar group to hide overflow and respond to available space. Used for horizontal navigation. */
  isOverflowContainer: z.boolean().optional(),
  /** Sets only the row gap at various breakpoints. */
  rowGap: z.record(z.unknown()).optional(),
  /** Value to set for row wrapping at various breakpoints */
  rowWrap: z.record(z.unknown()).optional(),
  /** A type modifier which modifies spacing specifically depending on the type of group */
  variant: z.enum(['filter-group', 'action-group', 'action-group-inline', 'action-group-plain', 'label-group']).optional(),
  /** Visibility at various breakpoints. */
  visibility: z.record(z.unknown()).optional()
})

export type ToolbarGroupProps = z.infer<typeof ToolbarGroupSchema>
