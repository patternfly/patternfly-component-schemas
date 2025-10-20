// Auto-generated Zod schema for DataListCheck
import { z } from 'zod'

export const DataListCheckSchema = z.object({
  /** Aria-labelledby of the DataList checkbox */
  'aria-labelledby': z.string(),
  /** Flag to show if the DataList checkbox is checked when it is controlled by React state. Both isChecked and checked are valid,
but only use one.
To make the DataList checkbox uncontrolled, instead use the defaultChecked prop, but do not use both. */
  checked: z.boolean().optional(),
  /** Additional classes added to the DataList item checkbox */
  className: z.string().optional(),
  /** Flag to set default value of DataList checkbox when it is uncontrolled by React state.
To make the DataList checkbox controlled, instead use the isChecked prop, but do not use both. */
  defaultChecked: z.boolean().optional(),
  /** Id of the DataList checkbox. */
  id: z.string().optional(),
  /** Flag to show if the DataList checkbox is checked when it is controlled by React state. Both isChecked and checked are valid,
but only use one.
To make the DataList checkbox uncontrolled, instead use the defaultChecked prop, but do not use both. */
  isChecked: z.boolean().optional(),
  /** Flag to show if the DataList checkbox is disabled */
  isDisabled: z.boolean().optional().default(false),
  /** Flag to show if the DataList checkbox selection is valid or invalid */
  isValid: z.boolean().optional().default(true),
  /** A callback for when the DataList checkbox selection changes */
  onChange: z.custom<Event>().optional(),
  /** Flag to indicate if other controls are used in the DataListItem */
  otherControls: z.boolean().optional().default(false)
})

export type DataListCheckProps = z.infer<typeof DataListCheckSchema>
