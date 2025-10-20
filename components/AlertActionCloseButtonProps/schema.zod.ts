// Auto-generated Zod schema for AlertActionCloseButtonProps
import { z } from 'zod'

export const AlertActionCloseButtonPropsSchema = z.object({
  /** Additional classes added to the alert action close button. */
  className: z.string().optional(),
  /** A callback for when the close button is clicked. */
  onClose: z.custom<() => void>().optional(),
  /** Accessible label for the close button */
  'Unknown': z.string().optional(),
  /** Variant Label for the close button. */
  variantLabel: z.string().optional()
})

export type AlertActionCloseButtonPropsProps = z.infer<typeof AlertActionCloseButtonPropsSchema>
