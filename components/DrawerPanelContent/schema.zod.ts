// Auto-generated Zod schema for DrawerPanelContent
import { z } from 'zod'

export const DrawerPanelContentSchema = z.object({
  /** Content to be rendered in the drawer panel. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the drawer. */
  className: z.string().optional(),
  /** Color variant of the background of the drawer panel */
  colorVariant: z.enum(['no-background', 'default', 'secondary']).optional().default('DrawerColorVariant.default'),
  /** The starting size of a drawer. */
  defaultSize: z.string().optional(),
  /** Adds and customizes a focus trap on the drawer panel content. */
  focusTrap: z.unknown().optional(),
  /** Flag indicating that the drawer panel should not have a border. */
  hasNoBorder: z.boolean().optional().default(false),
  /** ID of the drawer panel */
  id: z.string().optional(),
  /** The increment amount for keyboard drawer resizing. */
  increment: z.number().optional().default(5),
  /** Flag indicating that the drawer panel should be resizable. */
  isResizable: z.boolean().optional().default(false),
  /** The maximum size of a drawer. */
  maxSize: z.string().optional(),
  /** The minimum size of a drawer. */
  minSize: z.string().optional(),
  /** Callback for resize end. */
  onResize: z.any().optional(),
  /** Aria label for the resizable drawer splitter. */
  resizeAriaLabel: z.string().optional().default('Resize'),
  /** Width for drawer panel at various breakpoints. Overridden by resizable drawer minSize and defaultSize. */
  widths: z.record(z.unknown()).optional()
})

export type DrawerPanelContentProps = z.infer<typeof DrawerPanelContentSchema>
