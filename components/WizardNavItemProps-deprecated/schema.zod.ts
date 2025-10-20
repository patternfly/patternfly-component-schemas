// Auto-generated Zod schema for WizardNavItemProps-deprecated
import { z } from 'zod'

export const WizardNavItemPropsSchema = z.object({
  /** Can nest a WizardNav component for substeps */
  children: z.custom<React.ReactNode>().optional(),
  /** The content to display in the nav item */
  content: z.custom<React.ReactNode>().optional(),
  /** An optional url to use for when using an anchor component */
  href: z.string().optional(),
  /** The id for the nav item */
  id: z.any().optional(),
  /** Whether the nav item is the currently active item */
  isCurrent: z.boolean().optional(),
  /** Whether the nav item is disabled */
  isDisabled: z.boolean().optional(),
  /** Flag indicating that this NavItem has child steps and is expandable */
  isExpandable: z.boolean().optional(),
  /** Component used to render WizardNavItem */
  navItemComponent: z.enum(['button', 'a']).optional(),
  /** Callback for when the nav item is clicked */
  onNavItemClick: z.custom<(step: number) => any>().optional(),
  /** The step passed into the onNavItemClick callback */
  step: z.number()
})

export type WizardNavItemPropsProps = z.infer<typeof WizardNavItemPropsSchema>
