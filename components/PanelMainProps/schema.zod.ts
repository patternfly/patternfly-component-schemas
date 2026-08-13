// Auto-generated Zod schema for PanelMainProps
import { z } from 'zod'

export const PanelMainPropsSchema = z.object({
  /** Content rendered inside the panel main div */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Max height of the panel main div as a string with the value and unit */
  maxHeight: z.string().optional()
})

export type PanelMainPropsProps = z.infer<typeof PanelMainPropsSchema>
