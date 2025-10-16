// Auto-generated Zod schema for ToolbarContentContextProps
// Generated on: 2025-10-16T19:25:27.747Z
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
