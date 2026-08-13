// Auto-generated Zod schema for AnimationsProviderProps
import { z } from 'zod'

export const AnimationsProviderPropsSchema = z.object({
  /** Child components that will have access to the animations context */
  children: z.custom<React.ReactNode>(),
  /** Animation configuration settings */
  config: z.unknown()
})

export type AnimationsProviderPropsProps = z.infer<typeof AnimationsProviderPropsSchema>
