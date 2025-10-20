// Auto-generated Zod schema for ToolbarContent
import { z } from 'zod'

export const ToolbarContentSchema = z.object({
  /** Vertical alignment of children */
  alignItems: z.enum(['start', 'center', 'baseline', 'default']).optional(),
  /** Content to be rendered as children of the content row */
  children: z.custom<React.ReactNode>().optional(),
  /** Classes applied to root element of the data toolbar content row */
  className: z.string().optional(),
  /** Optional callback for clearing all filters in the toolbar */
  clearAllFilters: z.custom<() => void>().optional(),
  /** Text to display in the clear all filters button */
  clearFiltersButtonText: z.string().optional(),
  /** Flag indicating if a data toolbar toggle group's expandable content is expanded */
  isExpanded: z.boolean().optional().default(false),
  /** Value to set for content wrapping at various breakpoints */
  rowWrap: z.record(z.unknown()).optional(),
  /** Flag indicating that the clear all filters button should be visible */
  showClearFiltersButton: z.boolean().optional().default(false),
  /** Id of the parent Toolbar component */
  toolbarId: z.string().optional(),
  /** Visibility at various breakpoints. */
  visibility: z.record(z.unknown()).optional()
})

export type ToolbarContentProps = z.infer<typeof ToolbarContentSchema>
