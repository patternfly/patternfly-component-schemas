// Auto-generated Zod schema for NavProps
import { z } from 'zod'

export const NavPropsSchema = z.object({
  /** Anything that can be rendered inside of the nav */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the container */
  className: z.string().optional(),
  /** Callback for updating when item selection changes */
  onSelect: z.custom<Event>().optional(),
  /** Callback for when a list is expanded or collapsed */
  onToggle: z.custom<Event>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** Accessible label for the nav when there are multiple navs on the page */
  'Unknown': z.string().optional(),
  /** For horizontal navs */
  variant: z.enum(['default', 'horizontal', 'horizontal-subnav']).optional()
})

export type NavPropsProps = z.infer<typeof NavPropsSchema>
