// Auto-generated Zod schema for MenuToggleProps
import { z } from 'zod'

export const MenuTogglePropsSchema = z.object({
  /** Optional badge rendered inside the toggle, after the children content */
  badge: z.any().optional(),
  /** Content rendered inside the toggle */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the toggle */
  className: z.string().optional(),
  /** Optional icon or image rendered inside the toggle, before the children content. It is
recommended to wrap most basic icons in our icon component. */
  icon: z.custom<React.ReactNode>().optional(),
  innerRef: z.unknown().optional(),
  /** Flag indicating the toggle is disabled */
  isDisabled: z.boolean().optional(),
  /** Flag indicating the toggle has expanded styling */
  isExpanded: z.boolean().optional(),
  /** Flag indicating the toggle is full height */
  isFullHeight: z.boolean().optional(),
  /** Flag indicating the toggle takes up the full width of its parent */
  isFullWidth: z.boolean().optional(),
  /** Flag indicating the toggle contains placeholder text */
  isPlaceholder: z.boolean().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. It will always target the toggle button. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** Adds styling which affects the size of the menu toggle */
  size: z.enum(['default', 'sm']).optional(),
  /** Elements to display before the toggle button. When included, renders the menu toggle as a split button. */
  splitButtonItems: z.array(z.custom<React.ReactNode>()).optional(),
  /** Status styles of the menu toggle */
  status: z.enum(['success', 'warning', 'danger']).optional(),
  /** Overrides the status icon */
  statusIcon: z.custom<React.ReactNode>().optional(),
  /** Variant styles of the menu toggle */
  variant: z.enum(['default', 'plain', 'primary', 'plainText', 'secondary', 'typeahead']).optional()
})

export type MenuTogglePropsProps = z.infer<typeof MenuTogglePropsSchema>
