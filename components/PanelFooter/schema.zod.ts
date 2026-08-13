// Auto-generated Zod schema for PanelFooter
import { z } from 'zod'

export const PanelFooterSchema = z.object({
  /** Content rendered inside the panel footer */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type PanelFooterProps = z.infer<typeof PanelFooterSchema>
