// Auto-generated Zod schema for CardHeaderSelectableActionsObject
import { z } from 'zod'

export const CardHeaderSelectableActionsObjectSchema = z.object({
  /** Additional classes added to the selectable actions wrapper */
  className: z.string().optional(),
  /** Flag indicating that the actions have no offset */
  hasNoOffset: z.boolean().optional(),
  isChecked: z.boolean().optional(),
  /** Flag to indicate whether a clickable-only card's link should open in a new tab/window. */
  isExternalLink: z.boolean().optional(),
  /** Flag indicating the action is hidden */
  isHidden: z.boolean().optional(),
  /** Name for the input element of a selectable card. */
  name: z.string().optional(),
  /** Callback for when a selectable card input changes */
  onChange: z.custom<Event>().optional(),
  /** Action to call when a clickable-only card is clicked. This cannot be combined with the to prop. */
  onClickAction: z.custom<Event>().optional(),
  /** Adds an accessible name to the input of a selectable card or clickable button/anchor of a clickable-only card.
This or selectableActionAriaLabelledby is required for clickable-only cards. */
  selectableActionAriaLabel: z.string().optional(),
  /** A single or list of space-delimited ID's that provide an accessible name to the input of a selectable card
or clickable button/anchor of a clickable-only card. This or selectableActionAriaLabelledby is required
for clickable-only cards. */
  selectableActionAriaLabelledby: z.string().optional(),
  /** Custom ID passed to the selectable card's input or a clickable-only card's button/anchor.
If omitted, a random unique ID will be assigned to a selectable card's input. */
  selectableActionId: z.string().optional(),
  /** Additional props spread to a selectable card input or clickable-only card's button/anchor. */
  selectableActionProps: z.unknown().optional(),
  /** Link to navigate to when a clickable-only card is clicked. This cannot be combined with the onClickAction prop. */
  to: z.string().optional(),
  /** Determines the type of input to be used for a selectable card. */
  variant: z.enum(['single', 'multiple']).optional()
})

export type CardHeaderSelectableActionsObjectProps = z.infer<typeof CardHeaderSelectableActionsObjectSchema>
