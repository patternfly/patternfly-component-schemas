// Auto-generated Zod schema for HintTitle
import { z } from 'zod'

export const HintTitleSchema = z.object({
  /** Content rendered inside the hint title. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the hint title. */
  className: z.string().optional()
})

export type HintTitleProps = z.infer<typeof HintTitleSchema>
