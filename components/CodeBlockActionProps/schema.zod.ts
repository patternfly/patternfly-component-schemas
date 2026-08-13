// Auto-generated Zod schema for CodeBlockActionProps
import { z } from 'zod'

export const CodeBlockActionPropsSchema = z.object({
  /** Content rendered inside the code block action */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes passed to the code block action */
  className: z.string().optional()
})

export type CodeBlockActionPropsProps = z.infer<typeof CodeBlockActionPropsSchema>
