// Auto-generated Zod schema for EmptyStateFooter
// Generated on: 2025-10-10T18:12:17.785Z
import { z } from 'zod'

export const EmptyStateFooterSchema = z.object({
  /** Content rendered inside the empty state footer */
  children: z.any().optional(),
  /** Additional classes added to the empty state footer */
  className: z.string().optional()
})

export type EmptyStateFooterProps = z.infer<typeof EmptyStateFooterSchema>
