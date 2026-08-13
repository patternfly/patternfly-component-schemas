// Auto-generated Zod schema for EmptyStateIconProps
import { z } from 'zod'

export const EmptyStateIconPropsSchema = z.object({
  /** Additional classes added to the empty state icon */
  className: z.string().optional(),
  /** Icon component to be rendered. Can also be a spinner component */
  icon: z.unknown()
})

export type EmptyStateIconPropsProps = z.infer<typeof EmptyStateIconPropsSchema>
