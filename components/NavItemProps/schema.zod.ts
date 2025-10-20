// Auto-generated Zod schema for NavItemProps
import { z } from 'zod'

export const NavItemPropsSchema = z.object({
  /** Content rendered inside the nav item. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the nav item */
  className: z.string().optional(),
  /** Component used to render NavItems if  React.isValidElement(children) is false */
  component: z.any().optional(),
  /** Flyout of a nav item. This should be a Menu component. Should not be used if the to prop is defined. */
  flyout: z.custom<React.ReactElement>().optional(),
  /** Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  groupId: z.any().optional(),
  /** Icon added before the nav item children. */
  icon: z.custom<React.ReactNode>().optional(),
  /** Flag indicating whether the item is active */
  isActive: z.boolean().optional(),
  /** Item identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  itemId: z.any().optional(),
  /** Callback for item click */
  onClick: z.unknown().optional(),
  /** Callback when flyout is opened or closed */
  onShowFlyout: z.custom<() => void>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** If true prevents the default anchor link action to occur. Set to true if you want to handle navigation yourself. */
  preventDefault: z.boolean().optional(),
  /** Whether to set className on children when React.isValidElement(children) */
  styleChildren: z.boolean().optional(),
  /** Target navigation link. Should not be used if the flyout prop is defined. */
  to: z.string().optional(),
  /** z-index of the flyout nav item */
  zIndex: z.number().optional()
})

export type NavItemPropsProps = z.infer<typeof NavItemPropsSchema>
