// Auto-generated Zod schema for PanelMainBody
import { z } from 'zod'

export const PanelMainBodySchema = z.object({
  /** Content rendered inside the panel main body div */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type PanelMainBodyProps = z.infer<typeof PanelMainBodySchema>
