// Auto-generated Zod schema for Skeleton
import { z } from 'zod'

export const SkeletonSchema = z.object({
  /** Additional classes added to the Skeleton */
  className: z.string().optional(),
  /** The font size height of the Skeleton */
  fontSize: z.enum(['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']).optional(),
  /** The height of the Skeleton. Must specify pixels or percentage. */
  height: z.string().optional(),
  /** Text read just to screen reader users */
  screenreaderText: z.string().optional(),
  /** The shape of the Skeleton */
  shape: z.enum(['circle', 'square']).optional(),
  /** The width of the Skeleton. Must specify pixels or percentage. */
  width: z.string().optional()
})

export type SkeletonProps = z.infer<typeof SkeletonSchema>
