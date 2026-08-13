// Auto-generated Zod schema for CompassHeader
import { z } from 'zod'

export const CompassHeaderSchema = z.object({
  /** Content of the logo area */
  logo: z.custom<React.ReactNode>().optional(),
  /** Content of the navigation area */
  nav: z.custom<React.ReactNode>().optional(),
  /** Content of the profile area */
  profile: z.custom<React.ReactNode>().optional()
})

export type CompassHeaderProps = z.infer<typeof CompassHeaderSchema>
