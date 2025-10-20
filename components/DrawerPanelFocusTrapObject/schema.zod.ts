// Auto-generated Zod schema for DrawerPanelFocusTrapObject
import { z } from 'zod'

export const DrawerPanelFocusTrapObjectSchema = z.object({
  /** The element to focus when the drawer panel content expands. By default the
first focusable element will receive focus. If there are no focusable elements, the
panel itself will receive focus. */
  elementToFocusOnExpand: z.any().optional(),
  /** Enables a focus trap on the drawer panel content. This will also automatically
handle focus management when the panel expands and when it collapses. Do not pass
this prop if the isStatic prop on the drawer component is true. */
  enabled: z.boolean().optional(),
  /** One or more id's to use for the drawer panel content's accessible label. */
  'Unknown': z.string().optional()
})

export type DrawerPanelFocusTrapObjectProps = z.infer<typeof DrawerPanelFocusTrapObjectSchema>
