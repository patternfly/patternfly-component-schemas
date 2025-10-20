// Auto-generated Zod schema for TabsState
import { z } from 'zod'

export const TabsStateSchema = z.object({
  disableBackScrollButton: z.boolean(),
  disableForwardScrollButton: z.boolean(),
  /** Used to signal if the scroll buttons should be used */
  enableScrollButtons: z.boolean(),
  ouiaStateId: z.string(),
  overflowingTabCount: z.number(),
  /** Used to control if the scroll buttons should be rendered. Rendering must occur before the scroll buttons are
shown and rendering must be stopped after they stop being shown to preserve CSS transitions. */
  renderScrollButtons: z.boolean(),
  shownKeys: z.any(),
  /** Used to control if the scroll buttons should be shown to the user via the pf-m-scrollable class */
  showScrollButtons: z.boolean(),
  uncontrolledActiveKey: z.any(),
  uncontrolledIsExpandedLocal: z.boolean()
})

export type TabsStateProps = z.infer<typeof TabsStateSchema>
