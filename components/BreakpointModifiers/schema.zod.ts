// Auto-generated Zod schema for BreakpointModifiers
import { z } from 'zod'

export const BreakpointModifiersSchema = z.object({
  default: z.string().optional(),
  lg: z.string().optional(),
  md: z.string().optional(),
  'Unknown': z.string().optional(),
  xl: z.string().optional()
})

export type BreakpointModifiersProps = z.infer<typeof BreakpointModifiersSchema>
