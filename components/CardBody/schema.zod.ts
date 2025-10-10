// Auto-generated Zod schema for CardBody
// Generated on: 2025-10-10T18:12:17.791Z
import { z } from 'zod'

export const CardBodySchema = z.object({
  /** Content rendered inside the Card Body */
  children: z.any().optional(),
  /** Additional classes added to the Card Body */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional().default('div'),
  /** Enables the body Content to fill the height of the card */
  isFilled: z.boolean().optional().default(true)
})

export type CardBodyProps = z.infer<typeof CardBodySchema>
