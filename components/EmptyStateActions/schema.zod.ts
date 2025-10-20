// Auto-generated Zod schema for EmptyStateActions
// Generated on: 2025-10-10T18:12:17.786Z
import { z } from 'zod'

export const EmptyStateActionsSchema = z.object({
  /** Content rendered inside the empty state actions */
  children: z.any().optional(),
  /** Additional classes added to the empty state actions */
  className: z.string().optional()
})

export type EmptyStateActionsProps = z.infer<typeof EmptyStateActionsSchema>
