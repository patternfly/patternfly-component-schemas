// Auto-generated Zod schema for EmptyStateBody
// Generated on: 2025-10-10T18:12:17.785Z
import { z } from 'zod'

export const EmptyStateBodySchema = z.object({
  /** Content rendered inside the empty state body */
  children: z.any().optional(),
  /** Additional classes added to the empty state body */
  className: z.string().optional()
})

export type EmptyStateBodyProps = z.infer<typeof EmptyStateBodySchema>
