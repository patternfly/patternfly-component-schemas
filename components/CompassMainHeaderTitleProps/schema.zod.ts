// Auto-generated Zod schema for CompassMainHeaderTitleProps
import { z } from 'zod'

export const CompassMainHeaderTitlePropsSchema = z.object({
  /** Content of the main header title. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the main header title. */
  className: z.string().optional()
})

export type CompassMainHeaderTitlePropsProps = z.infer<typeof CompassMainHeaderTitlePropsSchema>
