// Auto-generated Zod schema for HintFooterProps
import { z } from 'zod'

export const HintFooterPropsSchema = z.object({
  /** Content rendered inside the hint footer. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the hint footer. */
  className: z.string().optional()
})

export type HintFooterPropsProps = z.infer<typeof HintFooterPropsSchema>
