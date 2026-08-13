// Auto-generated Zod schema for HintTitleProps
import { z } from 'zod'

export const HintTitlePropsSchema = z.object({
  /** Content rendered inside the hint title. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the hint title. */
  className: z.string().optional()
})

export type HintTitlePropsProps = z.infer<typeof HintTitlePropsSchema>
