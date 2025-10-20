// Auto-generated Zod schema for PanelMain
import { z } from 'zod'

export const PanelMainSchema = z.object({
  /** Content rendered inside the panel main div */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Max height of the panel main div as a string with the value and unit */
  maxHeight: z.string().optional()
})

export type PanelMainProps = z.infer<typeof PanelMainSchema>
