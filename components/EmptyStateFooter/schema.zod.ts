// Auto-generated Zod schema for EmptyStateFooter
import { z } from 'zod'

export const EmptyStateFooterSchema = z.object({
  /** Content rendered inside the empty state footer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the empty state footer */
  className: z.string().optional()
})

export type EmptyStateFooterProps = z.infer<typeof EmptyStateFooterSchema>
