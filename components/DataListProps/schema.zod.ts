// Auto-generated Zod schema for DataListProps
import { z } from 'zod'

export const DataListPropsSchema = z.object({
  /** Content rendered inside the DataList list */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the DataList list */
  className: z.string().optional(),
  /** Specifies the grid breakpoints */
  gridBreakpoint: z.enum(['none', 'always', 'sm', 'md', 'lg', 'xl', '2xl']).optional(),
  innerRef: z.any().optional(),
  /** Flag indicating if DataList should have compact styling */
  isCompact: z.boolean().optional(),
  /** Object that causes the data list to render hidden inputs which improve selectable item a11y */
  onSelectableRowChange: z.custom<Event>().optional(),
  /** Optional callback to make DataList selectable, fired when DataListItem selected */
  onSelectDataListItem: z.any().optional(),
  /** Id of DataList item currently selected */
  selectedDataListItemId: z.string().optional(),
  /** Adds accessible text to the DataList list */
  'Unknown': z.string(),
  /** Determines which wrapping modifier to apply to the DataList */
  wrapModifier: z.enum(['nowrap', 'truncate', 'breakWord']).optional()
})

export type DataListPropsProps = z.infer<typeof DataListPropsSchema>
