// Auto-generated Zod schema for Bullseye
// Generated on: 2025-10-16T18:45:33.828Z
import { z } from 'zod'

export const BullseyeSchema = z.object({
  /** content rendered inside the Bullseye layout */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** additional classes added to the Bullseye layout */
  className: z.string().optional().default(''),
  /** Sets the base component to render. defaults to div */
  component: z.unknown().optional().default('div')
})

export type BullseyeProps = z.infer<typeof BullseyeSchema>
