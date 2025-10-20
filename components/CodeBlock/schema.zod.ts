// Auto-generated Zod schema for CodeBlock
import { z } from 'zod'

export const CodeBlockSchema = z.object({
  /** Actions in the code block header. Should be wrapped with CodeBlockAction. */
  actions: z.custom<React.ReactNode>().optional().default('null'),
  /** Content rendered inside the code block */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes passed to the code block wrapper */
  className: z.string().optional()
})

export type CodeBlockProps = z.infer<typeof CodeBlockSchema>
