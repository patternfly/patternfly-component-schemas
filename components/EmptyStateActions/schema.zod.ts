// Auto-generated Zod schema for EmptyStateActions
import { z } from 'zod'

export const EmptyStateActionsSchema = z.object({
  /** Content rendered inside the empty state actions */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the empty state actions */
  className: z.string().optional()
})

export type EmptyStateActionsProps = z.infer<typeof EmptyStateActionsSchema>
