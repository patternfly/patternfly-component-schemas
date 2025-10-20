// Auto-generated Zod schema for DataListAction
import { z } from 'zod'

export const DataListActionSchema = z.object({
  /** Adds accessible text to the DataList Action */
  'aria-label': z.string(),
  /** Adds accessible text to the DataList Action */
  'aria-labelledby': z.string(),
  /** Content rendered as DataList Action  (e.g <Button> or <Dropdown>) */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the DataList Action */
  className: z.string().optional(),
  /** Identify the DataList toggle number */
  id: z.string(),
  /** What breakpoints to hide/show the data list action */
  visibility: z.record(z.unknown()).optional()
})

export type DataListActionProps = z.infer<typeof DataListActionSchema>
