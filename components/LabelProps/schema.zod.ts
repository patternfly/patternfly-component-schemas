// Auto-generated Zod schema for LabelProps
import { z } from 'zod'

export const LabelPropsSchema = z.object({
  /** Content rendered inside the label. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the label. */
  className: z.string().optional(),
  /** Node for custom close button. */
  closeBtn: z.custom<React.ReactNode>().optional(),
  /** Aria label for close button */
  closeBtnAriaLabel: z.string().optional(),
  /** Additional properties for the default close button. */
  closeBtnProps: z.unknown().optional(),
  /** Color of the label. */
  color: z.enum(['blue', 'teal', 'green', 'orange', 'purple', 'red', 'orangered', 'grey', 'yellow']).optional(),
  /** Additional props passed to the editable label text div. Optionally passing onInput and onBlur callbacks will allow finer custom text input control. */
  editableProps: z.unknown().optional(),
  /** Href for a label that is a link. If present, the label will change to an anchor element. This should not be passed in if the onClick prop is also passed in. */
  href: z.string().optional(),
  /** Icon added to the left of the label text. Overrides the icon set by the status property. */
  icon: z.custom<React.ReactNode>().optional(),
  /** Flag indicating the label is clickable. This flag will automatically be set if a href is passed, or if an onClick handler is passed and the label is not an overflow or add variant. This should be manually set when using the render prop. */
  isClickable: z.boolean().optional(),
  /** Flag indicating the label is compact. */
  isCompact: z.boolean().optional(),
  /** Flag indicating the label is disabled. Works only on clickable labels, so either href or onClick props must be passed in. */
  isDisabled: z.boolean().optional(),
  /** Flag indicating the label is editable. */
  isEditable: z.boolean().optional(),
  /** Callback for when the label is clicked. This should not be passed in if the href or isEditable props are also passed in. */
  onClick: z.custom<Event>().optional(),
  /** Close click callback for removable labels. If present, label will have a close button. */
  onClose: z.custom<Event>().optional(),
  /** Callback when an editable label cancels an edit. */
  onEditCancel: z.custom<Event>().optional(),
  /** Callback when an editable label completes an edit. */
  onEditComplete: z.any().optional(),
  /** Forwards the label content and className to rendered function.  Use this prop for react router support. */
  render: z.custom<React.ReactNode>().optional(),
  /** Status of the label with a respective icon and color. Overrides the color set by the color property. */
  status: z.enum(['success', 'warning', 'danger', 'info', 'custom']).optional(),
  /** The max width of the label before it is truncated. Can be any valid CSS unit, such as '100%', '100px', or '16ch'. */
  textMaxWidth: z.string().optional(),
  /** Position of the tooltip which is displayed if text is truncated */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional(),
  /** Variant of the label. */
  variant: z.enum(['outline', 'filled', 'overflow', 'add']).optional()
})

export type LabelPropsProps = z.infer<typeof LabelPropsSchema>
