// Auto-generated Zod schema for EmptyStateBodyProps
import { z } from 'zod'

export const EmptyStateBodyPropsSchema = z.object({
  /** Content rendered inside the empty state body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the empty state body */
  className: z.string().optional()
})

export type EmptyStateBodyPropsProps = z.infer<typeof EmptyStateBodyPropsSchema>
