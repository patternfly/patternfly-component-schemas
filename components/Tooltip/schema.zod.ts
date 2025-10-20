// Auto-generated Zod schema for Tooltip
import { z } from 'zod'

export const TooltipSchema = z.object({
  /** CSS fade transition animation duration */
  animationDuration: z.number().optional().default(300),
  /** The element to append the tooltip to, defaults to body */
  appendTo: z.any().optional().default('() => document.body'),
  /** aria-labelledby or aria-describedby for tooltip.
The trigger will be cloned to add the aria attribute, and the corresponding id in the form of 'pf-tooltip-#' is added to the content container.
If you don't want that or prefer to add the aria attribute yourself on the trigger, set aria to 'none'. */
  aria: z.enum(['describedby', 'labelledby', 'none']).optional().default('describedby'),
  /** Determines whether the tooltip is an aria-live region. If the triggerRef prop is passed in the
default behavior is 'polite' in order to ensure the tooltip contents is announced to
assistive technologies. Otherwise the default behavior is 'off'. */
  'aria-live': z.enum(['off', 'polite']).optional().default('triggerRef ? 'polite' : 'off'),
  /** The trigger reference element to which the Tooltip is relatively placed to.
If you cannot wrap the element with the Tooltip, you can use the triggerRef prop instead.
Usage: <Tooltip><Button>Reference</Button></Tooltip> */
  children: z.custom<React.ReactElement>().optional(),
  /** Tooltip additional class */
  className: z.string().optional().default(''),
  /** Tooltip content */
  content: z.custom<React.ReactNode>(),
  /** Distance of the tooltip to its target, defaults to 15 */
  distance: z.number().optional().default(15),
  /** If true, tries to keep the tooltip in view by flipping it if necessary */
  enableFlip: z.boolean().optional().default(true),
  /** Delay in ms before the tooltip appears */
  entryDelay: z.number().optional().default(300),
  /** Delay in ms before the tooltip disappears, Avoid passing in a value of "0", as users should
be given ample time to move their mouse from the trigger to the tooltip content without the content
being hidden. */
  exitDelay: z.number().optional().default(300),
  /** The desired position to flip the tooltip to if the initial position is not possible.
By setting this prop to 'flip' it attempts to flip the tooltip to the opposite side if there is no space.
You can also pass an array of positions that determines the flip order. It should contain the initial position
followed by alternative positions if that position is unavailable.
Example: Initial position is 'top'. Button with tooltip is in the top right corner. 'flipBehavior' is set to
['top', 'right', 'left']. Since there is no space to the top, it checks if right is available. There's also no
space to the right, so it finally shows the tooltip on the left. */
  flipBehavior: z.enum(['flip', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end'
  )[']).optional().default('['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom']'),
  /** id of the tooltip */
  id: z.string().optional(),
  /** Flag to indicate that the text content is left aligned */
  isContentLeftAligned: z.boolean().optional().default(false),
  /** value for visibility when trigger is 'manual' */
  isVisible: z.boolean().optional().default(false),
  /** Maximum width of the tooltip (default 18.75rem) */
  maxWidth: z.string().optional().default('18.75rem'),
  /** Minimum width of the tooltip. If set to "trigger", the minimum width will be set to the reference element width. */
  minWidth: z.enum(['trigger']).optional(),
  /** Callback when tooltip's hide transition has finished executing */
  onTooltipHidden: z.custom<() => void>().optional().default('() => {}'),
  /** Tooltip position. Note: With 'enableFlip' set to true,
it will change the position if there is not enough space for the starting position.
The behavior of where it flips to can be controlled through the flipBehavior prop.
The 'auto' position chooses the side with the most space.
The 'auto' position requires the 'enableFlip' prop to be true. */
  position: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional().default('top'),
  /** Tooltip trigger: click, mouseenter, focus, manual
Set to manual to trigger tooltip programmatically (through the isVisible prop) */
  trigger: z.string().optional().default('mouseenter focus'),
  /** The trigger reference element to which the Tooltip is relatively placed to.
If you can wrap the element with the Tooltip, you can use the children prop instead, or both props together.
When passed along with the trigger prop, the div element that wraps the trigger will be removed.
Usage: <Tooltip triggerRef={() => document.getElementById('reference-element')} /> */
  triggerRef: z.any().optional(),
  /** z-index of the tooltip */
  zIndex: z.number().optional().default(9999)
})

export type TooltipProps = z.infer<typeof TooltipSchema>
