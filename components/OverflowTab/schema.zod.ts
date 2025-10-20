// Auto-generated Zod schema for OverflowTab
import { z } from 'zod'

export const OverflowTabSchema = z.object({
  /** Additional classes added to the overflow tab */
  className: z.string().optional(),
  /** The text which displays when an overflowing tab isn't selected */
  defaultTitleText: z.string().optional().default('More'),
  /** Time in ms to wait before firing the toggles' focus event. Defaults to 0 */
  focusTimeoutDelay: z.number().optional().default(0),
  /** The tabs that should be displayed in the menu */
  overflowingTabs: z.array(z.unknown()).optional().default('[]'),
  /** Flag indicating if scroll on focus of the first menu item should occur. */
  shouldPreventScrollOnItemFocus: z.boolean().optional().default(true),
  /** Flag which shows the count of overflowing tabs when enabled */
  showTabCount: z.boolean().optional(),
  /** The aria label applied to the button which toggles the tab overflow menu */
  toggleAriaLabel: z.string().optional(),
  /** z-index of the overflow tab */
  zIndex: z.number().optional().default(9999)
})

export type OverflowTabProps = z.infer<typeof OverflowTabSchema>
