// Auto-generated Zod schema for CardTitle
// Generated on: 2025-10-10T18:12:17.791Z
import { z } from 'zod'

export const CardTitleSchema = z.object({
  /** Content rendered inside the CardTitle */
  children: z.any().optional(),
  /** Additional classes added to the CardTitle */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional().default('div')
})

export type CardTitleProps = z.infer<typeof CardTitleSchema>
