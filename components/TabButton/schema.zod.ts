// Auto-generated Zod schema for TabButton
// Generated on: 2025-10-10T18:12:17.769Z
import { z } from 'zod'

export const TabButtonSchema = z.object({
  /** content rendered inside the Tab content area. */
  children: z.any().optional(),
  /** additional classes added to the Tab */
  className: z.string().optional(),
  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href. */
  href: z.string().optional(),
  ouiaId: z.any().optional(),
  ouiaSafe: z.boolean().optional(),
  /** Parents' innerRef passed down for properly displaying Tooltips */
  parentInnerRef: z.any().optional(),
  /** child reference for case in which a TabContent section is defined outside of a Tabs component */
  tabContentRef: z.any().optional()
})

export type TabButtonProps = z.infer<typeof TabButtonSchema>
