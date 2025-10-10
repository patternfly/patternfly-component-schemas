// Auto-generated Zod schema for DataListItem
// Generated on: 2025-10-10T18:12:17.788Z
import { z } from 'zod'

export const DataListItemSchema = z.object({
  /** Adds an accessible name to the selectable input if one is rendered */
  'aria-labelledby': z.string().optional().default(''),
  /** Content rendered inside the DataList item */
  children: z.any().optional().default('null'),
  /** Additional classes added to the DataList item should be either <DataListItemRow> or <DataListContent> */
  className: z.string().optional().default(''),
  /** Unique id for the DataList item */
  id: z.string().optional().default(''),
  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded: z.boolean().optional().default(false),
  /** Aria label to apply to the selectable input if one is rendered */
  selectableInputAriaLabel: z.string().optional()
})

export type DataListItemProps = z.infer<typeof DataListItemSchema>
