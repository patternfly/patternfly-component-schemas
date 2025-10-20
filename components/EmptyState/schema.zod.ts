// Auto-generated Zod schema for EmptyState
import { z } from 'zod'

export const EmptyStateSchema = z.object({
  /** Content rendered inside the empty state */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the empty state */
  className: z.string().optional(),
  /** Additional class names to apply to the empty state header */
  headerClassName: z.string().optional(),
  /** The heading level to use, default is h1 */
  headingLevel: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional(),
  /** Empty state icon element to be rendered. Can also be a spinner component */
  icon: z.unknown().optional(),
  /** Cause component to consume the available height of its container */
  isFullHeight: z.boolean().optional(),
  /** Status of the empty state, will set a default status icon and color. Icon can be overwritten using the icon prop */
  status: z.enum(['danger', 'warning', 'success', 'info', 'custom']).optional(),
  /** Additional classes added to the title inside empty state header */
  titleClassName: z.string().optional(),
  /** Text of the title inside empty state header, will be wrapped in headingLevel */
  titleText: z.custom<React.ReactNode>().optional(),
  /** Modifies empty state max-width and sizes of icon, title and body */
  variant: z.enum(['xs', 'sm', 'lg', 'xl', 'full']).optional().default('EmptyStateVariant.full')
})

export type EmptyStateProps = z.infer<typeof EmptyStateSchema>
