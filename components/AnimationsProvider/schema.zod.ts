// Auto-generated Zod schema for AnimationsProvider
import { z } from 'zod'

export const AnimationsProviderSchema = z.object({
  /** Child components that will have access to the animations context */
  children: z.custom<React.ReactNode>(),
  /** Animation configuration settings */
  config: z.unknown()
})

export type AnimationsProviderProps = z.infer<typeof AnimationsProviderSchema>
