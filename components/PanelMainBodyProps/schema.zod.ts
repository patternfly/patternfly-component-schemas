// Auto-generated Zod schema for PanelMainBodyProps
import { z } from 'zod'

export const PanelMainBodyPropsSchema = z.object({
  /** Content rendered inside the panel main body div */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type PanelMainBodyPropsProps = z.infer<typeof PanelMainBodyPropsSchema>
