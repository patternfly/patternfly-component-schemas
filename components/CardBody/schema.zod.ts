// Auto-generated Zod schema for CardBody
import { z } from 'zod'

export const CardBodySchema = z.object({
  /** Content rendered inside the Card Body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Card Body */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.unknown().optional().default('div'),
  /** Enables the body Content to fill the height of the card */
  isFilled: z.boolean().optional().default(true)
})

export type CardBodyProps = z.infer<typeof CardBodySchema>
