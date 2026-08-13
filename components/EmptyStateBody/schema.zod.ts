// Auto-generated Zod schema for EmptyStateBody
import { z } from 'zod'

export const EmptyStateBodySchema = z.object({
  /** Content rendered inside the empty state body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the empty state body */
  className: z.string().optional()
})

export type EmptyStateBodyProps = z.infer<typeof EmptyStateBodySchema>
