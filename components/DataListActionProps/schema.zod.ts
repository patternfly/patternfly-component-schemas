// Auto-generated Zod schema for DataListActionProps
import { z } from 'zod'

export const DataListActionPropsSchema = z.object({
  /** Content rendered as data list action  (e.g <Button> or <Dropdown>) */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the data list action */
  className: z.string().optional(),
  /** Identify the data list toggle number */
  id: z.string(),
  /** Adds accessible text to the data list action */
  'Unknown': z.string(),
  /** What breakpoints to hide/show the data list action */
  visibility: z.record(z.unknown()).optional()
})

export type DataListActionPropsProps = z.infer<typeof DataListActionPropsSchema>
