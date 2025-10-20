// Auto-generated Zod schema for IconComponentProps
import { z } from 'zod'

export const IconComponentPropsSchema = z.object({
  /** Icon content */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the icon container */
  className: z.string().optional(),
  /** Aria-label for the default progress icon */
  defaultProgressArialabel: z.string().optional(),
  /** Size of icon. Overrides the icon size set by the size property. */
  iconSize: z.unknown().optional(),
  /** Indicates the icon is inline and should inherit the text font size and color. Overriden by size and iconSize properties. */
  isInline: z.boolean().optional(),
  /** Indicates the icon is in progress. Setting this property to true will swap the icon with the progressIcon. */
  isInProgress: z.boolean().optional(),
  /** Icon when isInProgress is set to true. Defaults to a 1em spinner. */
  progressIcon: z.custom<React.ReactNode>().optional(),
  /** Size of progress icon. Overrides the icon size set by the size property. */
  progressIconSize: z.unknown().optional(),
  /** Flag indicating whether the icon passed as children should be mirrored for
right to left (RTL) languages. This will not mirror the icon passed to progressIcon. */
  shouldMirrorRTL: z.boolean().optional(),
  /** Size of the icon component container and icon. */
  size: z.unknown().optional(),
  /** Status color of the icon */
  status: z.enum(['custom', 'info', 'success', 'warning', 'danger']).optional()
})

export type IconComponentPropsProps = z.infer<typeof IconComponentPropsSchema>
