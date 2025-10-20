// Auto-generated Zod schema for Icon
import { z } from 'zod'

export const IconSchema = z.object({
  /** Icon content */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the icon container */
  className: z.string().optional(),
  /** Aria-label for the default progress icon */
  defaultProgressArialabel: z.string().optional().default('Loading...'),
  /** Size of icon. Overrides the icon size set by the size property. */
  iconSize: z.enum(['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'headingSm', 'headingMd', 'headingLg', 'headingXl', 'heading_2xl', 'heading_3xl', 'bodySm', 'bodyDefault', 'bodyLg']).optional(),
  /** Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties. */
  isInline: z.boolean().optional().default(false),
  /** Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon. */
  isInProgress: z.boolean().optional().default(false),
  /** Icon when isInProgress is set to true. Defaults to a 1em spinner. */
  progressIcon: z.custom<React.ReactNode>().optional(),
  /** Size of progress icon. Overrides the icon size set by the size property. */
  progressIconSize: z.enum(['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'headingSm', 'headingMd', 'headingLg', 'headingXl', 'heading_2xl', 'heading_3xl', 'bodySm', 'bodyDefault', 'bodyLg']).optional(),
  /** Flag indicating whether the icon passed as children should be mirrored for
right to left (RTL) languages. This will not mirror the icon passed to progressIcon. */
  shouldMirrorRTL: z.boolean().optional().default(false),
  /** Size of the icon component container and icon. */
  size: z.enum(['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'headingSm', 'headingMd', 'headingLg', 'headingXl', 'heading_2xl', 'heading_3xl', 'bodySm', 'bodyDefault', 'bodyLg']).optional(),
  /** Status color of the icon */
  status: z.enum(['custom', 'info', 'success', 'warning', 'danger']).optional()
})

export type IconProps = z.infer<typeof IconSchema>
