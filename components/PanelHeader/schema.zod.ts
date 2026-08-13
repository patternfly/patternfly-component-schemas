// Auto-generated Zod schema for PanelHeader
import { z } from 'zod'

export const PanelHeaderSchema = z.object({
  /** Content rendered inside the panel header */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type PanelHeaderProps = z.infer<typeof PanelHeaderSchema>
