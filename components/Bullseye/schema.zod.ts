// Auto-generated Zod schema for Bullseye
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
