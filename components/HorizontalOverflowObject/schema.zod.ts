// Auto-generated Zod schema for HorizontalOverflowObject
import { z } from 'zod'

export const HorizontalOverflowObjectSchema = z.object({
  /** The text which displays when an overflowing tab isn't selected */
  defaultTitleText: z.string().optional(),
  /** Flag which shows the count of overflowing tabs when enabled */
  showTabCount: z.boolean().optional(),
  /** The aria label applied to the button which toggles the tab overflow menu */
  toggleAriaLabel: z.string().optional()
})

export type HorizontalOverflowObjectProps = z.infer<typeof HorizontalOverflowObjectSchema>
