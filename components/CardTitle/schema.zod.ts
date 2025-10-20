// Auto-generated Zod schema for CardTitle
import { z } from 'zod'

export const CardTitleSchema = z.object({
  /** Content rendered inside the CardTitle */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the CardTitle */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.unknown().optional().default('div')
})

export type CardTitleProps = z.infer<typeof CardTitleSchema>
