// Auto-generated Zod schema for PanelMainBody
// Generated on: 2025-10-10T18:12:17.774Z
import { z } from 'zod'

export const PanelMainBodySchema = z.object({
  /** Content rendered inside the panel main body div */
  children: z.any().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type PanelMainBodyProps = z.infer<typeof PanelMainBodySchema>
