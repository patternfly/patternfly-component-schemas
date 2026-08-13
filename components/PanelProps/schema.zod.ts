// Auto-generated Zod schema for PanelProps
import { z } from 'zod'

export const PanelPropsSchema = z.object({
  /** Content rendered inside the panel */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  hasNoBorder: z.boolean().optional(),
  innerRef: z.unknown().optional(),
  isAutoHeight: z.boolean().optional(),
  isFullHeight: z.boolean().optional(),
  isGlass: z.boolean().optional(),
  isPill: z.boolean().optional(),
  /** Flag to add scrollable styling to the panel */
  isScrollable: z.boolean().optional(),
  /** Adds panel variant styles */
  variant: z.enum(['raised', 'bordered', 'secondary']).optional()
})

export type PanelPropsProps = z.infer<typeof PanelPropsSchema>
