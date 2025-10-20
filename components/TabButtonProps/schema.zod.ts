// Auto-generated Zod schema for TabButtonProps
import { z } from 'zod'

export const TabButtonPropsSchema = z.object({
  /** content rendered inside the Tab content area. */
  children: z.custom<React.ReactNode>().optional(),
  /** additional classes added to the Tab */
  className: z.string().optional(),
  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href. */
  href: z.string().optional(),
  /** Parents' innerRef passed down for properly displaying Tooltips */
  parentInnerRef: z.unknown().optional(),
  /** child reference for case in which a TabContent section is defined outside of a Tabs component */
  tabContentRef: z.unknown().optional()
})

export type TabButtonPropsProps = z.infer<typeof TabButtonPropsSchema>
