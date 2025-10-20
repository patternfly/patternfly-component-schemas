// Auto-generated Zod schema for WizardNavItem-deprecated
import { z } from 'zod'

export const WizardNavItemSchema = z.object({
  /** Can nest a WizardNav component for substeps */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** The content to display in the nav item */
  content: z.custom<React.ReactNode>().optional().default(''),
  /** An optional url to use for when using an anchor component */
  href: z.string().optional().default('null'),
  /** The id for the nav item */
  id: z.any().optional(),
  /** Whether the nav item is the currently active item */
  isCurrent: z.boolean().optional().default(false),
  /** Whether the nav item is disabled */
  isDisabled: z.boolean().optional().default(false),
  /** Flag indicating that this NavItem has child steps and is expandable */
  isExpandable: z.boolean().optional().default(false),
  /** Component used to render WizardNavItem */
  navItemComponent: z.enum(['button', 'a']).optional().default('button'),
  /** Callback for when the nav item is clicked */
  onNavItemClick: z.custom<(step: number) => any>().optional().default('() => undefined'),
  ouiaId: z.any().optional(),
  ouiaSafe: z.boolean().optional().default(true),
  /** The step passed into the onNavItemClick callback */
  step: z.number()
})

export type WizardNavItemProps = z.infer<typeof WizardNavItemSchema>
