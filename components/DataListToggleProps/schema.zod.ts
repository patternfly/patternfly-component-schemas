// Auto-generated Zod schema for DataListToggleProps
import { z } from 'zod'

export const DataListTogglePropsSchema = z.object({
  /** Additional properties spread to the toggle button */
  buttonProps: z.unknown().optional(),
  /** Additional classes added to the DataList cell */
  className: z.string().optional(),
  /** Identify the DataList toggle number */
  id: z.string(),
  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded: z.boolean().optional(),
  /** Id for the row */
  rowid: z.string().optional(),
  /** Allows users of some screen readers to shift focus to the controlled element. Should be used when the controlled contents are not adjacent to the toggle that controls them. */
  'Unknown': z.string().optional()
})

export type DataListTogglePropsProps = z.infer<typeof DataListTogglePropsSchema>
