// Auto-generated Zod schema for CardFooter
import { z } from 'zod'

export const CardFooterSchema = z.object({
  /** Content rendered inside the Card Footer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Footer */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.unknown().optional().default('div')
})

export type CardFooterProps = z.infer<typeof CardFooterSchema>
