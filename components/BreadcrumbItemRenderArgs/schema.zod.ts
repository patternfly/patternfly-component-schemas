// Auto-generated Zod schema for BreadcrumbItemRenderArgs
import { z } from 'zod'

export const BreadcrumbItemRenderArgsSchema = z.object({
  ariaCurrent: z.enum(['page']),
  className: z.string()
})

export type BreadcrumbItemRenderArgsProps = z.infer<typeof BreadcrumbItemRenderArgsSchema>
