// Auto-generated Zod schema for TabContentBody
// Generated on: 2025-10-10T18:12:17.769Z
import { z } from 'zod'

export const TabContentBodySchema = z.object({
  /** Content rendered inside the tab content body. */
  children: z.any(),
  /** Additional classes added to the tab content body. */
  className: z.string().optional(),
  /** Indicates if there should be padding around the tab content body */
  hasPadding: z.boolean().optional()
})

export type TabContentBodyProps = z.infer<typeof TabContentBodySchema>
