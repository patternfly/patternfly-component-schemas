// Auto-generated Zod schema for LabelGroup
import { z } from 'zod'

export const LabelGroupSchema = z.object({
  /** Control for adding new labels */
  addLabelControl: z.custom<React.ReactNode>().optional(),
  /** Aria label for label group that does not have a category name */
  'aria-label': z.string().optional().default('Label group category'),
  /** Category name text for the label group category.  If this prop is supplied the label group with have a label and category styling applied */
  categoryName: z.string().optional().default(''),
  /** Content rendered inside the label group. Should be <Label> elements. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the label item */
  className: z.string().optional(),
  /** Aria label for close button */
  closeBtnAriaLabel: z.string().optional().default('Close label group'),
  /** Customizable template string. Use variable "${remaining}" for the overflow label count. */
  collapsedText: z.string().optional().default('${remaining} more'),
  /** Flag for having the label group default to expanded */
  defaultIsOpen: z.boolean().optional().default(false),
  /** Additional props passed to the editable textarea. */
  editableTextAreaProps: z.unknown().optional(),
  /** Customizable "Show Less" text string */
  expandedText: z.string().optional().default('Show Less'),
  /** Flag indicating the editable label group should be appended with a textarea. */
  hasEditableTextArea: z.boolean().optional().default(false),
  /** Flag if label group can be closed */
  isClosable: z.boolean().optional().default(false),
  /** Flag indicating the labels in the group are compact */
  isCompact: z.boolean().optional().default(false),
  /** Flag indicating contained labels are editable. Allows spacing for a text input after the labels. */
  isEditable: z.boolean().optional().default(false),
  /** Flag to implement a vertical layout */
  isVertical: z.boolean().optional().default(false),
  /** Set number of labels to show before overflow */
  numLabels: z.number().optional().default(3),
  /** Function that is called when clicking on the label group close button */
  onClick: z.custom<Event>().optional().default('(_e: React.MouseEvent) => undefined as any'),
  /** Position of the tooltip which is displayed if the category name text is longer */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional().default('top')
})

export type LabelGroupProps = z.infer<typeof LabelGroupSchema>
