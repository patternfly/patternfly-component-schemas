// Auto-generated Zod schema for Panel
import { z } from 'zod'

export const PanelSchema = z.object({
  /** Content rendered inside the panel */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Flag to remove the panel's border */
  hasNoBorder: z.boolean().optional(),
  /** When used with a scrollable panel, sets the panel to auto height */
  isAutoHeight: z.boolean().optional(),
  /** Flag to make the panel fill the available height of its container */
  isFullHeight: z.boolean().optional(),
  /** Modifies the panel to use glass styling when the glass theme is enabled */
  isGlass: z.boolean().optional(),
  /** Uses pill (fully rounded) border radius for the panel */
  isPill: z.boolean().optional(),
  /** Flag to add scrollable styling to the panel */
  isScrollable: z.boolean().optional(),
  /** Adds panel variant styles */
  variant: z.enum(['raised', 'bordered', 'secondary']).optional()
})

export type PanelProps = z.infer<typeof PanelSchema>
