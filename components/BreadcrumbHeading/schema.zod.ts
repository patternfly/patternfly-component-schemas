// Auto-generated Zod schema for BreadcrumbHeading
import { z } from 'zod'

export const BreadcrumbHeadingSchema = z.object({
  /** Content rendered inside the breadcrumb title. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the breadcrumb item. */
  className: z.string().optional().default(''),
  /** Sets the base component to render. Defaults to <a> */
  component: z.custom<React.ReactNode>().optional().default('a'),
  /** Internal prop set by Breadcrumb on all but the first crumb */
  showDivider: z.boolean().optional(),
  /** Target for breadcrumb link. */
  target: z.string().optional().default('undefined'),
  /** HREF for breadcrumb link. */
  to: z.string().optional().default('undefined')
})

export type BreadcrumbHeadingProps = z.infer<typeof BreadcrumbHeadingSchema>
