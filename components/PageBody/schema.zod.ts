// Auto-generated Zod schema for PageBody
// Generated on: 2025-10-10T18:12:17.774Z
import { z } from 'zod'

export const PageBodySchema = z.object({
  /** Content rendered inside the section */
  children: z.any().optional(),
  /** Additional classes added to the section */
  className: z.string().optional()
})

export type PageBodyProps = z.infer<typeof PageBodySchema>
