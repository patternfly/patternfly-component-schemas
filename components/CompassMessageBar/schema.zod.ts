// Auto-generated Zod schema for CompassMessageBar
import { z } from 'zod'

export const CompassMessageBarSchema = z.object({
  /** Content of the message bar. Typically a @patternfly/chatbot MessageBar component. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the message bar */
  className: z.string().optional()
})

export type CompassMessageBarProps = z.infer<typeof CompassMessageBarSchema>
