// Auto-generated Zod schema for ToolbarContextProps
// Generated on: 2025-10-16T19:02:51.722Z
import { z } from 'zod'

export const ToolbarContextPropsSchema = z.object({
  clearAllFilters: z.function().optional(),
  clearFiltersButtonText: z.string().optional(),
  customLabelGroupContent: z.custom<React.ReactNode>().optional(),
  isExpanded: z.boolean(),
  labelGroupContentRef: z.any(),
  numberOfFilters: z.number(),
  showClearFiltersButton: z.boolean().optional(),
  toggleIsExpanded: z.function(),
  toolbarId: z.string().optional(),
  updateNumberFilters: z.function()
})

export type ToolbarContextPropsProps = z.infer<typeof ToolbarContextPropsSchema>
