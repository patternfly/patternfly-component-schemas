// Auto-generated Zod schema for SelectPopperProps
import { z } from 'zod'

export const SelectPopperPropsSchema = z.object({
  /** The container to append the select to. Defaults to document.body.
If your select is being cut off you can append it to an element higher up the DOM tree.
Some examples:
appendTo="inline"
appendTo={() => document.body}
appendTo={document.getElementById('target')} */
  appendTo: z.enum(['inline']).optional(),
  /** Vertical direction of the popper. If enableFlip is set to true, this will set the initial direction before the popper flips. */
  direction: z.enum(['up', 'down']).optional(),
  /** Enable to flip the popper when it reaches the boundary */
  enableFlip: z.boolean().optional(),
  /** Maximum width of the popper. If the value is "trigger", it will set the max width to the select toggle's width */
  maxWidth: z.enum(['trigger']).optional(),
  /** Minimum width of the popper. If the value is "trigger", it will set the min width to the select toggle's width */
  minWidth: z.enum(['trigger']).optional(),
  /** Horizontal position of the popper */
  position: z.enum(['right', 'left', 'center', 'start', 'end']).optional(),
  /** Flag to prevent the popper from overflowing its container and becoming partially obscured. */
  preventOverflow: z.boolean().optional(),
  /** Custom width of the popper. If the value is "trigger", it will set the width to the select toggle's width */
  width: z.enum(['trigger']).optional()
})

export type SelectPopperPropsProps = z.infer<typeof SelectPopperPropsSchema>
