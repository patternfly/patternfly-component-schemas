// Auto-generated Zod schema for Panel
// Generated on: 2025-10-16T19:02:51.736Z
import { z } from 'zod'

export const PanelSchema = z.object({
  /** Content rendered inside the panel */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Flag to add scrollable styling to the panel */
  isScrollable: z.boolean().optional(),
  /** Adds panel variant styles */
  variant: z.enum(['raised', 'bordered', 'secondary']).optional()
})

export type PanelProps = z.infer<typeof PanelSchema>
