// Auto-generated Zod schema for PopoverCloseButton
import { z } from 'zod'

export const PopoverCloseButtonSchema = z.object({
  /** Aria label for the Close button */
  'aria-label': z.string(),
  /** PopoverCloseButton onClose function */
  onClose: z.custom<(event: any) => void>().optional().default('() => undefined as void')
})

export type PopoverCloseButtonProps = z.infer<typeof PopoverCloseButtonSchema>
