// Auto-generated Zod schema for PanelProps
// Generated on: 2025-10-16T18:45:33.853Z
import { z } from 'zod'

export const PanelPropsSchema = z.object({
  /** Content rendered inside the panel */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  innerRef: z.unknown().optional(),
  /** Flag to add scrollable styling to the panel */
  isScrollable: z.boolean().optional(),
  /** Adds panel variant styles */
  variant: z.enum(['raised', 'bordered', 'secondary']).optional()
})

export type PanelPropsProps = z.infer<typeof PanelPropsSchema>
