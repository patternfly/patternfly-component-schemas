// Auto-generated Zod schema for CodeBlockProps
import { z } from 'zod'

export const CodeBlockPropsSchema = z.object({
  /** Actions in the code block header. Should be wrapped with CodeBlockAction. */
  actions: z.custom<React.ReactNode>().optional(),
  /** Content rendered inside the code block */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes passed to the code block wrapper */
  className: z.string().optional()
})

export type CodeBlockPropsProps = z.infer<typeof CodeBlockPropsSchema>
