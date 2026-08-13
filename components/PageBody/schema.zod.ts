// Auto-generated Zod schema for PageBody
import { z } from 'zod'

export const PageBodySchema = z.object({
  /** Content rendered inside the section */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the section */
  className: z.string().optional()
})

export type PageBodyProps = z.infer<typeof PageBodySchema>
