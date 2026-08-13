// Auto-generated Zod schema for CodeBlockAction
import { z } from 'zod'

export const CodeBlockActionSchema = z.object({
  /** Content rendered inside the code block action */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes passed to the code block action */
  className: z.string().optional()
})

export type CodeBlockActionProps = z.infer<typeof CodeBlockActionSchema>
