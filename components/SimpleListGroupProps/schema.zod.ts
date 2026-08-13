// Auto-generated Zod schema for SimpleListGroupProps
import { z } from 'zod'

export const SimpleListGroupPropsSchema = z.object({
  /** Content rendered inside the SimpleList group */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the SimpleList <ul> */
  className: z.string().optional(),
  /** ID of SimpleList group */
  id: z.string().optional(),
  /** Title of the SimpleList group */
  title: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the SimpleList group title */
  titleClassName: z.string().optional()
})

export type SimpleListGroupPropsProps = z.infer<typeof SimpleListGroupPropsSchema>
