// Auto-generated Zod schema for TabContentBodyProps
import { z } from 'zod'

export const TabContentBodyPropsSchema = z.object({
  /** Content rendered inside the tab content body. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the tab content body. */
  className: z.string().optional(),
  /** Indicates if there should be padding around the tab content body */
  hasPadding: z.boolean().optional()
})

export type TabContentBodyPropsProps = z.infer<typeof TabContentBodyPropsSchema>
