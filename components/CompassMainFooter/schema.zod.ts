// Auto-generated Zod schema for CompassMainFooter
import { z } from 'zod'

export const CompassMainFooterSchema = z.object({
  isExpanded: z.unknown().optional().default(true)
})

export type CompassMainFooterProps = z.infer<typeof CompassMainFooterSchema>
