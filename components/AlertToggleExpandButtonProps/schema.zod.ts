// Auto-generated Zod schema for AlertToggleExpandButtonProps
import { z } from 'zod'

export const AlertToggleExpandButtonPropsSchema = z.object({
  /** Flag to indicate if the content is expanded. */
  isExpanded: z.boolean().optional(),
  /** A callback for when the toggle button is clicked. */
  onToggleExpand: z.custom<() => void>().optional(),
  /** Accessible label for the toggle button. */
  'Unknown': z.string().optional(),
  /** Variant label for the toggle button. */
  variantLabel: z.string().optional()
})

export type AlertToggleExpandButtonPropsProps = z.infer<typeof AlertToggleExpandButtonPropsSchema>
