// Auto-generated Zod schema for ChipProps-deprecated
import { z } from 'zod'

export const ChipPropsSchema = z.object({
  /** Badge to add to the chip. The badge will be rendered after the chip text. */
  badge: z.custom<React.ReactNode>().optional(),
  /** Content rendered inside the chip text */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the chip item */
  className: z.string().optional(),
  /** Aria Label for close button */
  closeBtnAriaLabel: z.string().optional(),
  component: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if the chip is an overflow chip */
  isOverflowChip: z.boolean().optional(),
  /** Flag indicating if chip is read only */
  isReadOnly: z.boolean().optional(),
  /** Function that is called when clicking on the chip close button */
  onClick: z.custom<Event>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Css property expressed in percentage or any css unit that overrides the default value of the max-width of the chip's text */
  textMaxWidth: z.string().optional(),
  /** Position of the tooltip which is displayed if text is longer */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional()
})

export type ChipPropsProps = z.infer<typeof ChipPropsSchema>
