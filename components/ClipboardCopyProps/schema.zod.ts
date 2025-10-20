// Auto-generated Zod schema for ClipboardCopyProps
import { z } from 'zod'

export const ClipboardCopyPropsSchema = z.object({
  /** Additional actions for inline clipboard copy. Should be wrapped with ClipboardCopyAction. */
  additionalActions: z.custom<React.ReactNode>().optional(),
  /** The text which is copied. */
  children: z.any(),
  /** Additional classes added to the clipboard copy container. */
  className: z.string().optional(),
  /** Tooltip message to display when clicking the copy button */
  clickTip: z.string().optional(),
  /** Delay in ms before the tooltip appears. */
  entryDelay: z.number().optional(),
  /** Delay in ms before the tooltip disappears. */
  exitDelay: z.number().optional(),
  /** Tooltip message to display when hover the copy button */
  hoverTip: z.string().optional(),
  /** Flag to determine if inline clipboard copy should be block styling */
  isBlock: z.boolean().optional(),
  /** Flag to determine if clipboard copy content includes code */
  isCode: z.boolean().optional(),
  /** Flag to determine if clipboard copy is in the expanded state initially */
  isExpanded: z.boolean().optional(),
  /** Flag to show if the input is read only. */
  isReadOnly: z.boolean().optional(),
  /** Maximum width of the tooltip (default 150px). */
  maxWidth: z.string().optional(),
  /** A function that is triggered on changing the text. */
  onChange: z.custom<Event>().optional(),
  /** A function that is triggered on clicking the copy button. This will replace the existing clipboard copy functionality entirely. */
  onCopy: z.custom<React.ReactNode>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** Copy button tooltip position. */
  position: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional(),
  /** Aria-label to use on the TextInput. */
  textAriaLabel: z.string().optional(),
  /** Aria-label to use on the ClipboardCopyToggle. */
  toggleAriaLabel: z.string().optional(),
  /** Enables and customizes truncation for an inline-compact ClipboardCopy. */
  truncation: z.any().optional(),
  /** Adds Clipboard Copy variant styles. */
  variant: z.enum(['inline', 'expansion', 'inline-compact']).optional()
})

export type ClipboardCopyPropsProps = z.infer<typeof ClipboardCopyPropsSchema>
