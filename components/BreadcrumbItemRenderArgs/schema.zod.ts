// Auto-generated Zod schema for BreadcrumbItemRenderArgs
// Generated on: 2025-10-16T19:25:27.779Z
import { z } from 'zod'

export const BreadcrumbItemRenderArgsSchema = z.object({
  ariaCurrent: z.enum(['page']),
  className: z.string()
})

export type BreadcrumbItemRenderArgsProps = z.infer<typeof BreadcrumbItemRenderArgsSchema>
