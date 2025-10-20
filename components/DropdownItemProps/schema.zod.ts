// Auto-generated Zod schema for DropdownItemProps
import { z } from 'zod'

export const DropdownItemPropsSchema = z.object({
  /** Anything which can be rendered in a dropdown item */
  children: z.custom<React.ReactNode>().optional(),
  /** Classes applied to root element of dropdown item */
  className: z.string().optional(),
  /** Description of the dropdown item */
  description: z.custom<React.ReactNode>().optional(),
  innerRef: z.any().optional(),
  /** Render item as aria-disabled option */
  isAriaDisabled: z.boolean().optional(),
  /** Render item as disabled option */
  isDisabled: z.boolean().optional(),
  /** Callback for item click */
  onClick: z.custom<(event?: any) => void>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** Props for adding a tooltip to a menu item */
  tooltipProps: z.unknown().optional(),
  /** Identifies the component in the dropdown onSelect callback */
  value: z.unknown().optional()
})

export type DropdownItemPropsProps = z.infer<typeof DropdownItemPropsSchema>
