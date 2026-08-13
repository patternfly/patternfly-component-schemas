// Auto-generated Zod schema for PopperProps
import { z } from 'zod'

export const PopperPropsSchema = z.object({
  /** True to make the popper visible */
  isVisible: z.boolean().optional(),
  /** The popper (menu/tooltip/popover) element */
  popper: z.custom<React.ReactElement>(),
  /** Reference to the popper (menu/tooltip/popover) element.
Passing this prop will remove the wrapper div element from the popper. */
  popperRef: z.any().optional(),
  /** Trigger reference element to which the popper is relatively placed to. */
  trigger: z.custom<React.ReactNode>().optional(),
  /** A reference to the trigger reference element that can be passed instead of or along
with the trigger prop. When passed along with the trigger prop, the div element that
wraps the trigger will be removed. */
  triggerRef: z.any().optional()
})

export type PopperPropsProps = z.infer<typeof PopperPropsSchema>
