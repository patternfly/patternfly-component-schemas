// Auto-generated Zod schema for EmptyStateIcon
import { z } from 'zod'

export const EmptyStateIconSchema = z.object({
  /** Additional classes added to the empty state icon */
  className: z.string().optional(),
  /** Icon component to be rendered. Can also be a spinner component */
  icon: z.unknown()
})

export type EmptyStateIconProps = z.infer<typeof EmptyStateIconSchema>
