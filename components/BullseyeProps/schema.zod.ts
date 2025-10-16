// Auto-generated Zod schema for BullseyeProps
// Generated on: 2025-10-16T18:56:01.612Z
import { z } from 'zod'

export const BullseyePropsSchema = z.object({
  /** content rendered inside the Bullseye layout */
  children: z.custom<React.ReactNode>().optional(),
  /** additional classes added to the Bullseye layout */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.unknown().optional()
})

export type BullseyePropsProps = z.infer<typeof BullseyePropsSchema>
