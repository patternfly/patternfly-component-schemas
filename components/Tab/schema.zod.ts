// Auto-generated Zod schema for Tab
// Generated on: 2025-10-10T18:12:17.769Z
import { z } from 'zod'

export const TabSchema = z.object({
  /** Actions rendered beside the tab content */
  actions: z.any().optional(),
  /** content rendered inside the Tab content area. */
  children: z.any().optional(),
  /** additional classes added to the Tab */
  className: z.string().optional(),
  /** Aria-label for the close button added by passing the onClose property to Tabs. */
  closeButtonAriaLabel: z.string().optional(),
  /** uniquely identifies the tab */
  eventKey: z.any(),
  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href. */
  href: z.string().optional(),
  /** Events to prevent when the button is in an aria-disabled state */
  inoperableEvents: z.array(z.any()).optional(),
  /** Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute */
  isAriaDisabled: z.boolean().optional(),
  /** Flag indicating the close button should be disabled */
  isCloseDisabled: z.boolean().optional(),
  /** Adds disabled styling and disables the button using the disabled html attribute */
  isDisabled: z.boolean().optional(),
  /** whether to render the tab or not */
  isHidden: z.boolean().optional(),
  /** Value to set the data-ouia-component-id for the tab button. */
  ouiaId: z.any().optional(),
  ouiaSafe: z.boolean().optional(),
  /** child id for case in which a TabContent section is defined outside of a Tabs component */
  tabContentId: z.any().optional(),
  /** child reference for case in which a TabContent section is defined outside of a Tabs component */
  tabContentRef: z.any().optional(),
  /** Content rendered in the tab title. Should be <TabTitleText> and/or <TabTitleIcon> for proper styling. */
  title: z.any(),
  /** Optional Tooltip rendered to a Tab. Should be <Tooltip> with appropriate props for proper rendering. */
  tooltip: z.any().optional()
})

export type TabProps = z.infer<typeof TabSchema>
