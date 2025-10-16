// Auto-generated Zod schema for SimpleListContextProps
// Generated on: 2025-10-16T18:56:01.624Z
import { z } from 'zod'

export const SimpleListContextPropsSchema = z.object({
  currentRef: z.any(),
  isControlled: z.boolean(),
  updateCurrentRef: z.any()
})

export type SimpleListContextPropsProps = z.infer<typeof SimpleListContextPropsSchema>
