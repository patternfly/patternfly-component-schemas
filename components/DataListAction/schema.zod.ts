// Auto-generated Zod schema for DataListAction
// Generated on: 2025-10-10T18:12:17.788Z
import { z } from 'zod'

export const DataListActionSchema = z.object({
  /** Adds accessible text to the DataList Action */
  'aria-label': z.string(),
  /** Adds accessible text to the DataList Action */
  'aria-labelledby': z.string(),
  /** Content rendered as DataList Action  (e.g <Button> or <Dropdown>) */
  children: z.any(),
  /** Additional classes added to the DataList Action */
  className: z.string().optional(),
  /** Identify the DataList toggle number */
  id: z.string(),
  /** What breakpoints to hide/show the data list action */
  visibility: z.enum(['visible';
  sm?: 'hidden', 'visible';
  md?: 'hidden', 'visible';
  lg?: 'hidden', 'visible';
  xl?: 'hidden', 'visible';
  '2xl'?: 'hidden', 'visible';
']).optional()
})

export type DataListActionProps = z.infer<typeof DataListActionSchema>
