// Auto-generated Zod schema for WizardNavItemProps
import { z } from 'zod'

export const WizardNavItemPropsSchema = z.object({
  /** Can nest a WizardNav component for substeps */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes spread to the wizard nav item */
  className: z.string().optional(),
  /** Component used to render WizardNavItem */
  component: z.enum(['button', 'a']).optional(),
  /** The content to display in the navigation item */
  content: z.custom<React.ReactNode>().optional(),
  /** An optional url to use for when using an anchor component */
  href: z.string().optional(),
  /** The id for the navigation item */
  id: z.any().optional(),
  /** Whether the navigation item is the currently active item */
  isCurrent: z.boolean().optional(),
  /** Whether the navigation item is disabled */
  isDisabled: z.boolean().optional(),
  /** Flag indicating that this NavItem has child steps and is expandable */
  isExpandable: z.boolean().optional(),
  /** Whether the navigation item has been visited */
  isVisited: z.boolean().optional(),
  /** Callback for when the navigation item is clicked */
  onClick: z.any().optional(),
  /** Used to determine the icon displayed next to content. Default has no icon. */
  status: z.enum(['default', 'error', 'success']).optional(),
  /** The step index passed into the onNavItemClick callback */
  stepIndex: z.number(),
  /** Where to display the linked URL when using an anchor component */
  target: z.unknown().optional()
})

export type WizardNavItemPropsProps = z.infer<typeof WizardNavItemPropsSchema>
