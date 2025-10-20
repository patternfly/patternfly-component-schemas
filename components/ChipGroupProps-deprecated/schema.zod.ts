// Auto-generated Zod schema for ChipGroupProps-deprecated
import { z } from 'zod'

export const ChipGroupPropsSchema = z.object({
  /** Category name text for the chip group category.  If this prop is supplied the chip group with have a label and category styling applied */
  categoryName: z.string().optional(),
  /** Content rendered inside the chip group. Should be <Chip> elements. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the chip item */
  className: z.string().optional(),
  /** Aria label for close button */
  closeBtnAriaLabel: z.string().optional(),
  /** Customizable template string. Use variable "${remaining}" for the overflow chip count. */
  collapsedText: z.string().optional(),
  /** Flag for having the chip group default to expanded */
  defaultIsOpen: z.boolean().optional(),
  /** Customizable "Show Less" text string */
  expandedText: z.string().optional(),
  /** Flag if chip group can be closed */
  isClosable: z.boolean().optional(),
  /** Set number of chips to show before overflow */
  numChips: z.number().optional(),
  /** Function that is called when clicking on the chip group close button or on an overflow chip */
  onClick: z.custom<Event>().optional(),
  onOverflowChipClick: z.custom<Event>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Position of the tooltip which is displayed if the category name text is longer */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional(),
  /** Aria label for chip group that does not have a category name */
  'Unknown': z.string().optional()
})

export type ChipGroupPropsProps = z.infer<typeof ChipGroupPropsSchema>
