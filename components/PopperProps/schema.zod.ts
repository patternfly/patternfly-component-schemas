// Auto-generated Zod schema for PopperProps
import { z } from 'zod'

export const PopperPropsSchema = z.object({
  /** The duration of the CSS fade transition animation. */
  animationDuration: z.number().optional(),
  /** The container to append the popper to. Defaults to 'inline'. */
  appendTo: z.enum(['inline']).optional(),
  /** popper direction */
  direction: z.enum(['up', 'down']).optional(),
  /** Distance of the popper to the trigger */
  distance: z.number().optional(),
  /** Enable to flip the popper when it reaches the boundary */
  enableFlip: z.boolean().optional(),
  /** Delay in ms before the popper appears */
  entryDelay: z.number().optional(),
  /** Delay in ms before the popper disappears */
  exitDelay: z.number().optional(),
  /** The behavior of how the popper flips when it reaches the boundary */
  flipBehavior: z.enum(['flip', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end'
      )[']).optional(),
  /** True to make the popper visible */
  isVisible: z.boolean().optional(),
  /** Maximum width of the popper. If the value is "trigger", it will set the max width to the trigger element's width */
  maxWidth: z.enum(['trigger']).optional(),
  /** Minimum width of the popper. If the value is "trigger", it will set the min width to the trigger element's width */
  minWidth: z.enum(['trigger']).optional(),
  /** Callback function when trigger is blurred (focus leaves) */
  onBlur: z.custom<Event>().optional(),
  /** Callback function when document is clicked */
  onDocumentClick: z.custom<Event>().optional(),
  /** Callback function when keydown event occurs on document */
  onDocumentKeyDown: z.custom<Event>().optional(),
  /** Callback function when trigger is focused */
  onFocus: z.custom<Event>().optional(),
  /** Callback when popper's hide transition has finished executing */
  onHidden: z.custom<() => void>().optional(),
  /** Lifecycle function invoked when the popper begins to transition out. */
  onHide: z.custom<() => void>().optional(),
  /** Lifecycle function invoked when the popper has been mounted to the DOM. */
  onMount: z.custom<() => void>().optional(),
  /** Callback function when mouse enters trigger */
  onMouseEnter: z.custom<Event>().optional(),
  /** Callback function when mouse leaves trigger */
  onMouseLeave: z.custom<Event>().optional(),
  /** Callback function when popper is clicked */
  onPopperClick: z.custom<Event>().optional(),
  /** Callback function when mouse enters popper content */
  onPopperMouseEnter: z.custom<Event>().optional(),
  /** Callback function when mouse leaves popper content */
  onPopperMouseLeave: z.custom<Event>().optional(),
  /** Lifecycle function invoked when the popper begins to transition in. */
  onShow: z.custom<() => void>().optional(),
  /** Lifecycle function invoked when the popper has fully transitioned in. */
  onShown: z.custom<() => void>().optional(),
  /** Callback function when trigger is clicked */
  onTriggerClick: z.custom<Event>().optional(),
  /** Callback function when Enter key is used on trigger */
  onTriggerEnter: z.custom<Event>().optional(),
  /** Instead of direction and position can set the placement of the popper */
  placement: z.unknown().optional(),
  /** The popper (menu/tooltip/popover) element */
  popper: z.custom<React.ReactElement>(),
  /** Reference to the popper (menu/tooltip/popover) element.
Passing this prop will remove the wrapper div element from the popper. */
  popperRef: z.any().optional(),
  /** popper position */
  position: z.enum(['right', 'left', 'center', 'start', 'end']).optional(),
  /** Map class names to positions, for example:
{
  top: styles.modifiers.top,
  bottom: styles.modifiers.bottom,
  left: styles.modifiers.left,
  right: styles.modifiers.right
} */
  positionModifiers: z.record(z.unknown()).optional(),
  /** Flag to prevent the popper from overflowing its container and becoming partially obscured. */
  preventOverflow: z.boolean().optional(),
  /** Trigger reference element to which the popper is relatively placed to. */
  trigger: z.custom<React.ReactNode>().optional(),
  /** A reference to the trigger reference element that can be passed instead of or along
with the trigger prop. When passed along with the trigger prop, the div element that
wraps the trigger will be removed. */
  triggerRef: z.any().optional(),
  /** Custom width of the popper. If the value is "trigger", it will set the width to the trigger element's width */
  width: z.enum(['trigger']).optional(),
  /** z-index of the popper element */
  zIndex: z.number().optional()
})

export type PopperPropsProps = z.infer<typeof PopperPropsSchema>
