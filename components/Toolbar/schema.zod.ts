// Auto-generated Zod schema for Toolbar
import { z } from 'zod'

export const ToolbarSchema = z.object({
  /** Content to be rendered as rows in the data toolbar */
  children: z.custom<React.ReactNode>().optional(),
  /** Classes applied to root element of the data toolbar */
  className: z.string().optional(),
  /** Optional callback for clearing all filters in the toolbar */
  clearAllFilters: z.custom<() => void>().optional(),
  /** Text to display in the clear all filters button */
  clearFiltersButtonText: z.string().optional(),
  /** The breakpoint at which the listed filters in label groups are collapsed down to a summary */
  collapseListedFiltersBreakpoint: z.enum(['all', 'md', 'lg', 'xl', '2xl']).optional(),
  /** Background color variant of the toolbar */
  colorVariant: z.enum(['default', 'no-background', 'primary', 'secondary']).optional(),
  /** Custom content appended to the filter generated label group. To maintain spacing and styling, each node should be wrapped in a ToolbarItem or ToolbarGroup. This property will remove the default "Clear all filters" button. */
  customLabelGroupContent: z.custom<React.ReactNode>().optional(),
  /** Flag indicating the toolbar padding is removed */
  hasNoPadding: z.boolean().optional(),
  /** Id of the data toolbar */
  id: z.string().optional(),
  /** Insets at various breakpoints. */
  inset: z.record(z.unknown()).optional(),
  /** Flag indicating if a data toolbar toggle group's expandable content is expanded */
  isExpanded: z.boolean().optional(),
  /** Flag indicating the toolbar height should expand to the full height of the container */
  isFullHeight: z.boolean().optional(),
  /** Flag indicating the toolbar is static */
  isStatic: z.boolean().optional(),
  /** Flag indicating the toolbar should stick to the top of its container */
  isSticky: z.boolean().optional(),
  /** Text to display in the total number of applied filters ToolbarFilter */
  numberOfFiltersText: z.custom<(numberOfFilters: number) => string>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** A callback for setting the isExpanded flag */
  toggleIsExpanded: z.custom<() => void>().optional()
})

export type ToolbarProps = z.infer<typeof ToolbarSchema>
