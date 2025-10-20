// Auto-generated Zod schema for TabContent
import { z } from 'zod'

export const TabContentSchema = z.object({
  /** Identifies the active Tab */
  activeKey: z.any().optional(),
  /** title of controlling Tab if used outside Tabs component */
  'aria-label': z.string().optional(),
  /** Child to show in the content area */
  child: z.custom<React.ReactElement>().optional(),
  /** content rendered inside the tab content area if used outside Tabs component */
  children: z.unknown().optional(),
  /** class of tab content area if used outside Tabs component */
  className: z.string().optional(),
  /** uniquely identifies the controlling Tab if used outside Tabs component */
  eventKey: z.any().optional(),
  /** id passed from parent to identify the content section */
  id: z.string(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional()
})

export type TabContentProps = z.infer<typeof TabContentSchema>
