// Auto-generated Zod schema for HintFooter
import { z } from 'zod'

export const HintFooterSchema = z.object({
  /** Content rendered inside the hint footer. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the hint footer. */
  className: z.string().optional()
})

export type HintFooterProps = z.infer<typeof HintFooterSchema>
