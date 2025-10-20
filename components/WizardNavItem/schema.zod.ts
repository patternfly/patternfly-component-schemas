// Auto-generated Zod schema for WizardNavItem
import { z } from 'zod'

export const WizardNavItemSchema = z.object({
  /** Can nest a WizardNav component for substeps */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes spread to the wizard nav item */
  className: z.string().optional(),
  /** Component used to render WizardNavItem */
  component: z.enum(['button', 'a']).optional().default('button'),
  /** The content to display in the navigation item */
  content: z.custom<React.ReactNode>().optional().default(''),
  /** An optional url to use for when using an anchor component */
  href: z.string().optional(),
  /** The id for the navigation item */
  id: z.any().optional(),
  /** Whether the navigation item is the currently active item */
  isCurrent: z.boolean().optional().default(false),
  /** Whether the navigation item is disabled */
  isDisabled: z.boolean().optional().default(false),
  /** Flag indicating that this NavItem has child steps and is expandable */
  isExpandable: z.boolean().optional().default(false),
  /** Whether the navigation item has been visited */
  isVisited: z.boolean().optional().default(false),
  /** Callback for when the navigation item is clicked */
  onClick: z.any().optional(),
  ouiaId: z.any().optional(),
  ouiaSafe: z.boolean().optional().default(true),
  /** Used to determine the icon displayed next to content. Default has no icon. */
  status: z.enum(['default', 'error', 'success']).optional().default('default'),
  /** The step index passed into the onNavItemClick callback */
  stepIndex: z.number(),
  /** Where to display the linked URL when using an anchor component */
  target: z.unknown().optional()
})

export type WizardNavItemProps = z.infer<typeof WizardNavItemSchema>
