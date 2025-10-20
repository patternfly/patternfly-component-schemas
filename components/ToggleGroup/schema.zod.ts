// Auto-generated Zod schema for ToggleGroup
import { z } from 'zod'

export const ToggleGroupSchema = z.object({
  /** Disable all toggle group items under this component. */
  areAllGroupsDisabled: z.boolean().optional().default(false),
  /** Accessible label for the toggle group */
  'aria-label': z.string().optional(),
  /** Content rendered inside the toggle group */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the toggle group */
  className: z.string().optional(),
  /** Modifies the toggle group to include compact styling. */
  isCompact: z.boolean().optional().default(false)
})

export type ToggleGroupProps = z.infer<typeof ToggleGroupSchema>
