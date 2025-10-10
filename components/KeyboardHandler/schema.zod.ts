// Auto-generated Zod schema for KeyboardHandler
// Generated on: 2025-10-10T18:12:17.759Z
import { z } from 'zod'

export const KeyboardHandlerSchema = z.object({
  /** Additional key handling outside of the included arrow keys, enter, and space handling */
  additionalKeyHandler: z.any().optional(),
  /** Reference of the container to apply keyboard interaction */
  containerRef: z.any().optional().default('null'),
  /** Callback returning an array of navigable elements to be traversable via vertical arrow keys. This array should not include non-navigable elements such as disabled elements. */
  createNavigableElements: z.array(z.any()).optional().default('() => null as Element[]'),
  /** Callback returning the focusable element of a given element from the navigable elements array */
  getFocusableElement: z.function().optional().default('(navigableElement: Element) => navigableElement'),
  /** Callback to determine if a given element from the navigable elements array is the active element of the page */
  isActiveElement: z.function().optional().default('(navigableElement: Element) => document.activeElement === navigableElement'),
  /** Callback to determine if a given event is from the container. By default the function conducts a basic check to see if the containerRef contains the event target */
  isEventFromContainer: z.any().optional(),
  /** Flag indicating that the included enter key handling should be ignored */
  noEnterHandling: z.boolean().optional().default(false),
  /** Flag indicating that the included horizontal arrow key handling should be ignored */
  noHorizontalArrowHandling: z.boolean().optional().default(false),
  /** Flag indicating that the included space key handling should be ignored */
  noSpaceHandling: z.boolean().optional().default(false),
  /** Flag indicating that the included vertical arrow key handling should be ignored */
  noVerticalArrowHandling: z.boolean().optional().default(false),
  /** Flag indicating that next focusable element of a horizontal movement will be this element's sibling */
  onlyTraverseSiblings: z.boolean().optional().default(true),
  /** Flag indicating that the tabIndex of the currently focused element and next focused element should be updated, in the case of using a roving tabIndex */
  updateTabIndex: z.boolean().optional().default(true),
  /** Valid sibling tags that horizontal arrow handling will focus */
  validSiblingTags: z.array(z.any()).optional().default('['BUTTON', 'A']')
})

export type KeyboardHandlerProps = z.infer<typeof KeyboardHandlerSchema>
