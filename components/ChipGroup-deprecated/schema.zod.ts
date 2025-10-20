// Auto-generated Zod schema for ChipGroup-deprecated
import { z } from 'zod'

export const ChipGroupSchema = z.object({
  /** Aria label for chip group that does not have a category name */
  'aria-label': z.string().optional().default('Chip group category'),
  /** Category name text for the chip group category.  If this prop is supplied the chip group with have a label and category styling applied */
  categoryName: z.string().optional().default(''),
  /** Content rendered inside the chip group. Should be <Chip> elements. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the chip item */
  className: z.string().optional(),
  /** Aria label for close button */
  closeBtnAriaLabel: z.string().optional().default('Close chip group'),
  /** Customizable template string. Use variable "${remaining}" for the overflow chip count. */
  collapsedText: z.string().optional().default('${remaining} more'),
  /** Flag for having the chip group default to expanded */
  defaultIsOpen: z.boolean().optional().default(false),
  /** Customizable "Show Less" text string */
  expandedText: z.string().optional().default('Show Less'),
  /** Flag if chip group can be closed */
  isClosable: z.boolean().optional().default(false),
  /** Set number of chips to show before overflow */
  numChips: z.number().optional().default(3),
  /** Function that is called when clicking on the chip group close button or on an overflow chip */
  onClick: z.custom<Event>().optional(),
  /** Function that is called when clicking on the overflow (expand/collapse) chip button */
  onOverflowChipClick: z.custom<Event>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  ouiaSafe: z.boolean().optional(),
  /** Position of the tooltip which is displayed if the category name text is longer */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional().default('top')
})

export type ChipGroupProps = z.infer<typeof ChipGroupSchema>
