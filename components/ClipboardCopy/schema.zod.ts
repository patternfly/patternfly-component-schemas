// Auto-generated Zod schema for ClipboardCopy
import { z } from 'zod'

export const ClipboardCopySchema = z.object({
  /** Additional actions for inline clipboard copy. Should be wrapped with ClipboardCopyAction. */
  additionalActions: z.custom<React.ReactNode>().optional().default('null'),
  /** The text which is copied. */
  children: z.any(),
  /** Additional classes added to the clipboard copy container. */
  className: z.string().optional(),
  /** Tooltip message to display when clicking the copy button */
  clickTip: z.string().optional().default('Successfully copied to clipboard!'),
  /** Delay in ms before the tooltip appears. */
  entryDelay: z.number().optional().default(300),
  /** Delay in ms before the tooltip disappears. */
  exitDelay: z.number().optional().default(1500),
  /** Tooltip message to display when hover the copy button */
  hoverTip: z.string().optional().default('Copy to clipboard'),
  /** Flag to determine if inline clipboard copy should be block styling */
  isBlock: z.boolean().optional(),
  /** Flag to determine if clipboard copy content includes code */
  isCode: z.boolean().optional().default(false),
  /** Flag to determine if clipboard copy is in the expanded state initially */
  isExpanded: z.boolean().optional().default(false),
  /** Flag to show if the input is read only. */
  isReadOnly: z.boolean().optional().default(false),
  /** Maximum width of the tooltip (default 150px). */
  maxWidth: z.string().optional().default('150px'),
  /** A function that is triggered on changing the text. */
  onChange: z.custom<Event>().optional().default('(): any => undefined'),
  /** A function that is triggered on clicking the copy button. This will replace the existing clipboard copy functionality entirely. */
  onCopy: z.custom<React.ReactNode>().optional().default('(_event: React.ClipboardEvent<HTMLDivElement>, text?: React.ReactNode) => {
  try {
    navigator.clipboard.writeText(text.toString());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(
      "Clipboard API not found, this copy function will not work. This is likely because you're using an",
      "unsupported browser or you're not using HTTPS. \n\nIf you're a developer building an application which needs",
      "to support copying to the clipboard without the clipboard API, you'll have to create your own copy",
      'function and pass it to the ClipboardCopy component as the onCopy prop. For more information see',
      'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard'
    );

    // eslint-disable-next-line no-console
    console.error(error);
  }
}'),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional().default(true),
  /** Copy button tooltip position. */
  position: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional().default('TooltipPosition.top'),
  /** Aria-label to use on the TextInput. */
  textAriaLabel: z.string().optional().default('Copyable input'),
  /** Aria-label to use on the ClipboardCopyToggle. */
  toggleAriaLabel: z.string().optional().default('Show content'),
  /** Enables and customizes truncation for an inline-compact ClipboardCopy. */
  truncation: z.any().optional().default(false),
  /** Adds Clipboard Copy variant styles. */
  variant: z.enum(['inline', 'expansion', 'inline-compact']).optional().default('inline')
})

export type ClipboardCopyProps = z.infer<typeof ClipboardCopySchema>
