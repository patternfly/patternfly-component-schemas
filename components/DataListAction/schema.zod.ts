// Auto-generated Zod schema for DataListAction
import { z } from 'zod'

export const DataListActionSchema = z.object({
  /** Adds accessible text to the data list action */
  'aria-label': z.string(),
  /** Adds accessible text to the data list action */
  'aria-labelledby': z.string(),
  /** Content rendered as data list action  (e.g <Button> or <Dropdown>) */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the data list action */
  className: z.string().optional(),
  /** Identify the data list toggle number */
  id: z.string(),
  /** What breakpoints to hide/show the data list action */
  visibility: z.record(z.unknown()).optional()
})

export type DataListActionProps = z.infer<typeof DataListActionSchema>
