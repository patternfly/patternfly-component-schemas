// Auto-generated Zod schema for SimpleListContextProps
import { z } from 'zod'

export const SimpleListContextPropsSchema = z.object({
  currentRef: z.any(),
  isControlled: z.boolean(),
  updateCurrentRef: z.any()
})

export type SimpleListContextPropsProps = z.infer<typeof SimpleListContextPropsSchema>
