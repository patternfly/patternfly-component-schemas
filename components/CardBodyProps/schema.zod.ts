// Auto-generated Zod schema for CardBodyProps
// Generated on: 2025-10-16T19:25:27.779Z
import { z } from 'zod'

export const CardBodyPropsSchema = z.object({
  /** Content rendered inside the Card Body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Card Body */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.unknown().optional(),
  /** Enables the body Content to fill the height of the card */
  isFilled: z.boolean().optional()
})

export type CardBodyPropsProps = z.infer<typeof CardBodyPropsSchema>
