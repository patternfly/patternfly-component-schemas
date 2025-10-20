// Auto-generated Zod schema for AboutModalBoxCloseButton
import { z } from 'zod'

export const AboutModalBoxCloseButtonSchema = z.object({
  /** Set close button aria label */
  'aria-label': z.string().optional().default('Close Dialog'),
  /** A callback for when the close button is clicked */
  onClose: z.any().optional().default('(_e) => undefined as any')
})

export type AboutModalBoxCloseButtonProps = z.infer<typeof AboutModalBoxCloseButtonSchema>
