// Auto-generated Zod schema for DataListProps
import { z } from 'zod'

export const DataListPropsSchema = z.object({
  /** Content rendered inside the data list list */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the data list list */
  className: z.string().optional(),
  /** Specifies the grid breakpoints */
  gridBreakpoint: z.enum(['none', 'always', 'sm', 'md', 'lg', 'xl', '2xl']).optional(),
  innerRef: z.any().optional(),
  /** Flag indicating if data list should have compact styling */
  isCompact: z.boolean().optional(),
  isNoPlainOnGlass: z.boolean().optional(),
  isPlain: z.boolean().optional(),
  /** Object that causes the data list to render hidden inputs which improve selectable item a11y */
  onSelectableRowChange: z.custom<Event>().optional(),
  /** Optional callback to make data list selectable, fired when data list item selected */
  onSelectDataListItem: z.any().optional(),
  /** Id of data list item currently selected */
  selectedDataListItemId: z.string().optional(),
  /** Adds accessible text to the data list list */
  'Unknown': z.string(),
  /** Determines which wrapping modifier to apply to the data list */
  wrapModifier: z.enum(['nowrap', 'truncate', 'breakWord']).optional()
})

export type DataListPropsProps = z.infer<typeof DataListPropsSchema>
