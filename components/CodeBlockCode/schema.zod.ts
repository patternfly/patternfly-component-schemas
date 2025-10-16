// Auto-generated Zod schema for CodeBlockCode
// Generated on: 2025-10-16T18:45:33.879Z
import { z } from 'zod'

export const CodeBlockCodeSchema = z.object({
  /** Code rendered inside the code block */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes passed to the code block pre wrapper */
  className: z.string().optional(),
  /** Additional classes passed to the code block code */
  codeClassName: z.string().optional()
})

export type CodeBlockCodeProps = z.infer<typeof CodeBlockCodeSchema>
