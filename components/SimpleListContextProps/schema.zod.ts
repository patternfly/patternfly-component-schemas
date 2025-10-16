// Auto-generated Zod schema for SimpleListContextProps
// Generated on: 2025-10-16T19:25:27.753Z
import { z } from 'zod'

export const SimpleListContextPropsSchema = z.object({
  currentRef: z.any(),
  isControlled: z.boolean(),
  updateCurrentRef: z.any()
})

export type SimpleListContextPropsProps = z.infer<typeof SimpleListContextPropsSchema>
