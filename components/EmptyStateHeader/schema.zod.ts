// Auto-generated Zod schema for EmptyStateHeader
// Generated on: 2025-10-10T18:12:17.785Z
import { z } from 'zod'

export const EmptyStateHeaderSchema = z.object({
  /** Additional classes added to the empty state header */
  className: z.string().optional(),
  /** The heading level to use, default is h1 */
  headingLevel: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional().default('EmptyStateHeadingLevel.h1'),
  /** Empty state icon element to be rendered. Can also be a spinner component */
  icon: z.any().optional(),
  /** Additional classes added to the title inside empty state header */
  titleClassName: z.string().optional(),
  /** Text of the title inside empty state header, will be wrapped in headingLevel */
  titleText: z.any().optional()
})

export type EmptyStateHeaderProps = z.infer<typeof EmptyStateHeaderSchema>
