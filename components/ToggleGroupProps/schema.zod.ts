// Auto-generated Zod schema for ToggleGroupProps
import { z } from 'zod'

export const ToggleGroupPropsSchema = z.object({
  /** Disable all toggle group items under this component. */
  areAllGroupsDisabled: z.boolean().optional(),
  /** Content rendered inside the toggle group */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the toggle group */
  className: z.string().optional(),
  /** Modifies the toggle group to include compact styling. */
  isCompact: z.boolean().optional(),
  /** Accessible label for the toggle group */
  'Unknown': z.string().optional()
})

export type ToggleGroupPropsProps = z.infer<typeof ToggleGroupPropsSchema>
