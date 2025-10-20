// Auto-generated Zod schema for CodeBlockAction
// Generated on: 2025-10-10T18:12:17.790Z
import { z } from 'zod'

export const CodeBlockActionSchema = z.object({
  /** Content rendered inside the code block action */
  children: z.any().optional().default('null'),
  /** Additional classes passed to the code block action */
  className: z.string().optional()
})

export type CodeBlockActionProps = z.infer<typeof CodeBlockActionSchema>
