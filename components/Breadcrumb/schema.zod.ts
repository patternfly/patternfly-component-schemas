// Auto-generated Zod schema for Breadcrumb
import { z } from 'zod'

export const BreadcrumbSchema = z.object({
  /** Aria label added to the breadcrumb nav. */
  'aria-label': z.string().optional().default('Breadcrumb'),
  /** Children nodes be rendered to the BreadCrumb. Should be of type BreadCrumbItem. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the breadcrumb nav. */
  className: z.string().optional().default(''),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional().default(true)
})

export type BreadcrumbProps = z.infer<typeof BreadcrumbSchema>
