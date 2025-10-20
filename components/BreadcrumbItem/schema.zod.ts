// Auto-generated Zod schema for BreadcrumbItem
import { z } from 'zod'

export const BreadcrumbItemSchema = z.object({
  /** Content rendered inside the breadcrumb item. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the breadcrumb item. */
  className: z.string().optional().default(''),
  /** Sets the base component to render. Defaults to <a> */
  component: z.unknown().optional().default('a'),
  /** Flag indicating whether the item is active. */
  isActive: z.boolean().optional().default(false),
  /** Flag indicating whether the item contains a dropdown. */
  isDropdown: z.boolean().optional().default(false),
  /** A render function to render the component inside the breadcrumb item. */
  render: z.custom<React.ReactNode>().optional().default('undefined'),
  /** Internal prop set by Breadcrumb on all but the first crumb */
  showDivider: z.boolean().optional(),
  /** Target for breadcrumb link. */
  target: z.string().optional().default('undefined'),
  /** HREF for breadcrumb link. */
  to: z.string().optional().default('undefined')
})

export type BreadcrumbItemProps = z.infer<typeof BreadcrumbItemSchema>
