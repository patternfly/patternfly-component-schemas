// Auto-generated Zod schema for EmptyStateActionsProps
import { z } from 'zod'

export const EmptyStateActionsPropsSchema = z.object({
  /** Content rendered inside the empty state actions */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the empty state actions */
  className: z.string().optional()
})

export type EmptyStateActionsPropsProps = z.infer<typeof EmptyStateActionsPropsSchema>
