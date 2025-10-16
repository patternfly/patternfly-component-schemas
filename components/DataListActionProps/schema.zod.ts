// Auto-generated Zod schema for DataListActionProps
// Generated on: 2025-10-16T18:56:01.650Z
import { z } from 'zod'

export const DataListActionPropsSchema = z.object({
  /** Content rendered as DataList Action  (e.g <Button> or <Dropdown>) */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the DataList Action */
  className: z.string().optional(),
  /** Identify the DataList toggle number */
  id: z.string(),
  /** Adds accessible text to the DataList Action */
  'Unknown': z.string(),
  /** What breakpoints to hide/show the data list action */
  visibility: z.enum(['visible';
    sm?: 'hidden', 'visible';
    md?: 'hidden', 'visible';
    lg?: 'hidden', 'visible';
    xl?: 'hidden', 'visible';
    '2xl'?: 'hidden', 'visible';
  ']).optional()
})

export type DataListActionPropsProps = z.infer<typeof DataListActionPropsSchema>
