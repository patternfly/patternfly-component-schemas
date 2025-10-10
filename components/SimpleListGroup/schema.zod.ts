// Auto-generated Zod schema for SimpleListGroup
// Generated on: 2025-10-10T18:12:17.770Z
import { z } from 'zod'

export const SimpleListGroupSchema = z.object({
  /** Content rendered inside the SimpleList group */
  children: z.any().optional().default('null'),
  /** Additional classes added to the SimpleList <ul> */
  className: z.string().optional().default(''),
  /** ID of SimpleList group */
  id: z.string().optional().default(''),
  /** Title of the SimpleList group */
  title: z.any().optional().default(''),
  /** Additional classes added to the SimpleList group title */
  titleClassName: z.string().optional().default('')
})

export type SimpleListGroupProps = z.infer<typeof SimpleListGroupSchema>
