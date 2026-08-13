// Auto-generated Zod schema for CompassMainHeaderTitle
import { z } from 'zod'

export const CompassMainHeaderTitleSchema = z.object({
  /** Content of the main header title. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the main header title. */
  className: z.string().optional()
})

export type CompassMainHeaderTitleProps = z.infer<typeof CompassMainHeaderTitleSchema>
