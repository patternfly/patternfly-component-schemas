// Auto-generated Zod schema for PopoverContextProps
import { z } from 'zod'

export const PopoverContextPropsSchema = z.object({
  headerComponent: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional()
})

export type PopoverContextPropsProps = z.infer<typeof PopoverContextPropsSchema>
