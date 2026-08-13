// Auto-generated Zod schema for DrawerProps
import { z } from 'zod'

export const DrawerPropsSchema = z.object({
  /** Content rendered in the drawer panel */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Drawer. */
  className: z.string().optional(),
  /** Indicates if the drawer is expanded */
  isExpanded: z.boolean().optional(),
  /** Indicates if the content element and panel element are displayed side by side. */
  isInline: z.boolean().optional(),
  isPill: z.boolean().optional(),
  /** Indicates if the drawer will always show both content and panel. */
  isStatic: z.boolean().optional(),
  /** Callback when drawer panel is expanded after waiting 250ms for animation to complete. */
  onExpand: z.any().optional(),
  /** Position of the drawer panel. left and right are deprecated, use start and end instead. */
  position: z.enum(['start', 'end', 'bottom', 'left', 'right']).optional()
})

export type DrawerPropsProps = z.infer<typeof DrawerPropsSchema>
