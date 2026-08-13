// Auto-generated Zod schema for MastheadContentProps
import { z } from 'zod'

export const MastheadContentPropsSchema = z.object({
  /** Content rendered inside of the masthead content block. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead content. */
  className: z.string().optional()
})

export type MastheadContentPropsProps = z.infer<typeof MastheadContentPropsSchema>
