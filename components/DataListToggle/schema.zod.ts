// Auto-generated Zod schema for DataListToggle
import { z } from 'zod'

export const DataListToggleSchema = z.object({
  /** Allows users of some screen readers to shift focus to the controlled element. Should be used when the controlled contents are not adjacent to the toggle that controls them. */
  'aria-controls': z.string().optional().default(''),
  /** Adds accessible text to the DataList toggle */
  'aria-label': z.string().optional().default('Details'),
  /** Adds accessible text to the DataList toggle */
  'aria-labelledby': z.string().optional(),
  /** Additional properties spread to the toggle button */
  buttonProps: z.unknown().optional(),
  /** Additional classes added to the DataList cell */
  className: z.string().optional().default(''),
  /** Identify the DataList toggle number */
  id: z.string(),
  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded: z.boolean().optional().default(false),
  /** Id for the row */
  rowid: z.string().optional().default('')
})

export type DataListToggleProps = z.infer<typeof DataListToggleSchema>
