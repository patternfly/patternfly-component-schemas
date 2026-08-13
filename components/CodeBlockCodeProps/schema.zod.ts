// Auto-generated Zod schema for CodeBlockCodeProps
import { z } from 'zod'

export const CodeBlockCodePropsSchema = z.object({
  /** Code rendered inside the code block */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes passed to the code block pre wrapper */
  className: z.string().optional(),
  /** Additional classes passed to the code block code */
  codeClassName: z.string().optional()
})

export type CodeBlockCodePropsProps = z.infer<typeof CodeBlockCodePropsSchema>
