// Auto-generated Zod schema for PanelFooter
// Generated on: 2025-10-10T18:12:17.775Z
import { z } from 'zod'

export const PanelFooterSchema = z.object({
  /** Content rendered inside the panel footer */
  children: z.any().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type PanelFooterProps = z.infer<typeof PanelFooterSchema>
