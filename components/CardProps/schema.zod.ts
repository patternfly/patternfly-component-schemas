// Auto-generated Zod schema for CardProps
import { z } from 'zod'

export const CardPropsSchema = z.object({
  /** Content rendered inside the Card */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Card */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.unknown().optional(),
  /** ID of the Card. Also passed back in the CardHeader onExpand callback. */
  id: z.string().optional(),
  /** Flag indicating that the card is clickable and contains some action that triggers on click. */
  isClickable: z.boolean().optional(),
  /** Flag indicating whether a card that is either only clickable or that is both clickable and selectable
is currently clicked and has clicked styling. */
  isClicked: z.boolean().optional(),
  /** Modifies the card to include compact styling. Should not be used with isLarge. */
  isCompact: z.boolean().optional(),
  /** Flag indicating that a clickable or selectable card is disabled. */
  isDisabled: z.boolean().optional(),
  /** Flag indicating if a card is expanded. Modifies the card to be expandable. */
  isExpanded: z.boolean().optional(),
  /** Cause component to consume the available height of its container */
  isFullHeight: z.boolean().optional(),
  /** Modifies the card to be large. Should not be used with isCompact. */
  isLarge: z.boolean().optional(),
  /** Modifies the card to include plain styling; this removes border and background */
  isPlain: z.boolean().optional(),
  /** Flag indicating that the card is selectable. */
  isSelectable: z.boolean().optional(),
  /** Flag indicating whether a card that is either selectable only or both clickable and selectable is
currently selected and has selected styling. */
  isSelected: z.boolean().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** Card background color variant */
  variant: z.enum(['default', 'secondary']).optional()
})

export type CardPropsProps = z.infer<typeof CardPropsSchema>
