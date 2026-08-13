// Auto-generated Zod schema for CardFooterProps
import { z } from 'zod'

export const CardFooterPropsSchema = z.object({
  /** Content rendered inside the Card Footer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Footer */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.unknown().optional()
})

export type CardFooterPropsProps = z.infer<typeof CardFooterPropsSchema>
