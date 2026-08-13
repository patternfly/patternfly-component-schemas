// Auto-generated Zod schema for PageBodyProps
import { z } from 'zod'

export const PageBodyPropsSchema = z.object({
  /** Content rendered inside the section */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the section */
  className: z.string().optional()
})

export type PageBodyPropsProps = z.infer<typeof PageBodyPropsSchema>
