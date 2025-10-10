// Auto-generated Zod schema for Bullseye
// Generated on: 2025-10-10T18:12:17.761Z
import { z } from 'zod'

export const BullseyeSchema = z.object({
  /** content rendered inside the Bullseye layout */
  children: z.any().optional().default('null'),
  /** additional classes added to the Bullseye layout */
  className: z.string().optional().default(''),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional().default('div')
})

export type BullseyeProps = z.infer<typeof BullseyeSchema>
