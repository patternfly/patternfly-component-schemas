// Auto-generated Zod schema for PopoverCloseButtonProps
import { z } from 'zod'

export const PopoverCloseButtonPropsSchema = z.object({
  /** PopoverCloseButton onClose function */
  onClose: z.custom<(event: any) => void>().optional(),
  /** Aria label for the Close button */
  'Unknown': z.string()
})

export type PopoverCloseButtonPropsProps = z.infer<typeof PopoverCloseButtonPropsSchema>
