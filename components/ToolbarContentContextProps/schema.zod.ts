// Auto-generated Zod schema for ToolbarContentContextProps
import { z } from 'zod'

export const ToolbarContentContextPropsSchema = z.object({
  clearAllFilters: z.custom<() => void>().optional(),
  clearFiltersButtonText: z.string().optional(),
  expandableContentId: z.string(),
  expandableContentRef: z.any(),
  isExpanded: z.boolean().optional(),
  labelContainerRef: z.unknown(),
  showClearFiltersButton: z.boolean().optional()
})

export type ToolbarContentContextPropsProps = z.infer<typeof ToolbarContentContextPropsSchema>
