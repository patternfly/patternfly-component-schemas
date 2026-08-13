// Auto-generated Zod schema for PanelHeaderProps
import { z } from 'zod'

export const PanelHeaderPropsSchema = z.object({
  /** Content rendered inside the panel header */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type PanelHeaderPropsProps = z.infer<typeof PanelHeaderPropsSchema>
