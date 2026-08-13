// Auto-generated Zod schema for PanelFooterProps
import { z } from 'zod'

export const PanelFooterPropsSchema = z.object({
  /** Content rendered inside the panel footer */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type PanelFooterPropsProps = z.infer<typeof PanelFooterPropsSchema>
