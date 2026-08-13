// Auto-generated Zod schema for CompassHeaderProps
import { z } from 'zod'

export const CompassHeaderPropsSchema = z.object({
  /** Content of the logo area */
  logo: z.custom<React.ReactNode>().optional(),
  /** Content of the navigation area */
  nav: z.custom<React.ReactNode>().optional(),
  /** Content of the profile area */
  profile: z.custom<React.ReactNode>().optional()
})

export type CompassHeaderPropsProps = z.infer<typeof CompassHeaderPropsSchema>
