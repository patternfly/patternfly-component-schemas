// Auto-generated Zod schema for EmptyStateFooterProps
import { z } from 'zod'

export const EmptyStateFooterPropsSchema = z.object({
  /** Content rendered inside the empty state footer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the empty state footer */
  className: z.string().optional()
})

export type EmptyStateFooterPropsProps = z.infer<typeof EmptyStateFooterPropsSchema>
