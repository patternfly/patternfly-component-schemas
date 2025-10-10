// Auto-generated Zod schema for PanelHeader
// Generated on: 2025-10-10T18:12:17.774Z
import { z } from 'zod'

export const PanelHeaderSchema = z.object({
  /** Content rendered inside the panel header */
  children: z.any().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type PanelHeaderProps = z.infer<typeof PanelHeaderSchema>
