// Auto-generated Zod schema for CodeBlock
// Generated on: 2025-10-10T18:12:17.790Z
import { z } from 'zod'

export const CodeBlockSchema = z.object({
  /** Actions in the code block header. Should be wrapped with CodeBlockAction. */
  actions: z.any().optional().default('null'),
  /** Content rendered inside the code block */
  children: z.any().optional().default('null'),
  /** Additional classes passed to the code block wrapper */
  className: z.string().optional()
})

export type CodeBlockProps = z.infer<typeof CodeBlockSchema>
