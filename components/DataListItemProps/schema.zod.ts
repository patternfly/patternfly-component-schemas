// Auto-generated Zod schema for DataListItemProps
import { z } from 'zod'

export const DataListItemPropsSchema = z.object({
  /** Content rendered inside the DataList item */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the DataList item should be either <DataListItemRow> or <DataListContent> */
  className: z.string().optional(),
  /** Unique id for the DataList item */
  id: z.string().optional(),
  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded: z.boolean().optional(),
  /** Aria label to apply to the selectable input if one is rendered */
  selectableInputAriaLabel: z.string().optional(),
  /** Adds an accessible name to the selectable input if one is rendered */
  'Unknown': z.string()
})

export type DataListItemPropsProps = z.infer<typeof DataListItemPropsSchema>
