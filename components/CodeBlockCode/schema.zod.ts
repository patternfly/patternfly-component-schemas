// Auto-generated Zod schema for CodeBlockCode
// Generated on: 2025-10-10T18:12:17.790Z
import { z } from 'zod'

export const CodeBlockCodeSchema = z.object({
  /** Code rendered inside the code block */
  children: z.any().optional().default('null'),
  /** Additional classes passed to the code block pre wrapper */
  className: z.string().optional(),
  /** Additional classes passed to the code block code */
  codeClassName: z.string().optional()
})

export type CodeBlockCodeProps = z.infer<typeof CodeBlockCodeSchema>
