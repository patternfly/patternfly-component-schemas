// Auto-generated Zod schema for BreadcrumbProps
import { z } from 'zod'

export const BreadcrumbPropsSchema = z.object({
  /** Children nodes be rendered to the BreadCrumb. Should be of type BreadCrumbItem. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the breadcrumb nav. */
  className: z.string().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** Aria label added to the breadcrumb nav. */
  'Unknown': z.string().optional()
})

export type BreadcrumbPropsProps = z.infer<typeof BreadcrumbPropsSchema>
