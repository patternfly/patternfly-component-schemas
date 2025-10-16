// Auto-generated Zod schema for AlertToggleExpandButtonProps
// Generated on: 2025-10-16T18:45:33.885Z
import { z } from 'zod'

export const AlertToggleExpandButtonPropsSchema = z.object({
  /** Flag to indicate if the content is expanded. */
  isExpanded: z.boolean().optional(),
  /** A callback for when the toggle button is clicked. */
  onToggleExpand: z.function().optional(),
  /** Accessible label for the toggle button. */
  'Unknown': z.string().optional(),
  /** Variant label for the toggle button. */
  variantLabel: z.string().optional()
})

export type AlertToggleExpandButtonPropsProps = z.infer<typeof AlertToggleExpandButtonPropsSchema>
