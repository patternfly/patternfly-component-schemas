// Auto-generated Zod schema for BreadcrumbHeadingProps
import { z } from 'zod'

export const BreadcrumbHeadingPropsSchema = z.object({
  /** Content rendered inside the breadcrumb title. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the breadcrumb item. */
  className: z.string().optional(),
  /** Sets the base component to render. Defaults to <a> */
  component: z.custom<React.ReactNode>().optional(),
  /** Internal prop set by Breadcrumb on all but the first crumb */
  showDivider: z.boolean().optional(),
  /** Target for breadcrumb link. */
  target: z.string().optional(),
  /** HREF for breadcrumb link. */
  to: z.string().optional()
})

export type BreadcrumbHeadingPropsProps = z.infer<typeof BreadcrumbHeadingPropsSchema>
