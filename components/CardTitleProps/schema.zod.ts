// Auto-generated Zod schema for CardTitleProps
// Generated on: 2025-10-16T18:45:33.881Z
import { z } from 'zod'

export const CardTitlePropsSchema = z.object({
  /** Content rendered inside the CardTitle */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the CardTitle */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.unknown().optional()
})

export type CardTitlePropsProps = z.infer<typeof CardTitlePropsSchema>
