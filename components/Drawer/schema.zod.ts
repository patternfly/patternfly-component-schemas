// Auto-generated Zod schema for Drawer
import { z } from 'zod'

export const DrawerSchema = z.object({
  /** Content rendered in the drawer panel */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Drawer. */
  className: z.string().optional().default(''),
  /** Indicates if the drawer is expanded */
  isExpanded: z.boolean().optional().default(false),
  /** Indicates if the content element and panel element are displayed side by side. */
  isInline: z.boolean().optional().default(false),
  /** Indicates if the drawer will always show both content and panel. */
  isStatic: z.boolean().optional().default(false),
  /** Callback when drawer panel is expanded after waiting 250ms for animation to complete. */
  onExpand: z.any().optional().default('() => {}'),
  /** Position of the drawer panel. left and right are deprecated, use start and end instead. */
  position: z.enum(['start', 'end', 'bottom', 'left', 'right']).optional().default('end')
})

export type DrawerProps = z.infer<typeof DrawerSchema>
