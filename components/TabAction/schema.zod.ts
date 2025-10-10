// Auto-generated Zod schema for TabAction
// Generated on: 2025-10-10T18:12:17.769Z
import { z } from 'zod'

export const TabActionSchema = z.object({
  /** Accessible label for the tab action */
  'aria-label': z.string().optional(),
  /** Content rendered in the tab action */
  children: z.any().optional(),
  /** Additional classes added to the tab action span */
  className: z.string().optional(),
  /** Flag indicating if the tab action is disabled */
  isDisabled: z.boolean().optional(),
  /** Click callback for tab action button */
  onClick: z.any().optional(),
  ouiaId: z.any().optional(),
  ouiaSafe: z.boolean().optional()
})

export type TabActionProps = z.infer<typeof TabActionSchema>
