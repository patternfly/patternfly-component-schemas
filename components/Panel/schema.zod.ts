// Auto-generated Zod schema for Panel
// Generated on: 2025-10-10T18:12:17.775Z
import { z } from 'zod'

export const PanelSchema = z.object({
  /** Content rendered inside the panel */
  children: z.any().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Flag to add scrollable styling to the panel */
  isScrollable: z.boolean().optional(),
  /** Adds panel variant styles */
  variant: z.enum(['raised', 'bordered', 'secondary']).optional()
})

export type PanelProps = z.infer<typeof PanelSchema>
