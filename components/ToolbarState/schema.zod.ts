// Auto-generated Zod schema for ToolbarState
import { z } from 'zod'

export const ToolbarStateSchema = z.object({
  /** Object managing information about how many labels are in each label group */
  filterInfo: z.unknown(),
  /** Flag used if the user has opted NOT to manage the 'isExpanded' state of the toggle group.
Indicates whether or not the toggle group is expanded. */
  isManagedToggleExpanded: z.boolean(),
  ouiaStateId: z.string(),
  /** Used to keep track of window width so we can collapse expanded content when window is resizing */
  windowWidth: z.number()
})

export type ToolbarStateProps = z.infer<typeof ToolbarStateSchema>
