// Auto-generated Zod schema for CardFooter
// Generated on: 2025-10-10T18:12:17.791Z
import { z } from 'zod'

export const CardFooterSchema = z.object({
  /** Content rendered inside the Card Footer */
  children: z.any().optional(),
  /** Additional classes added to the Footer */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional().default('div')
})

export type CardFooterProps = z.infer<typeof CardFooterSchema>
