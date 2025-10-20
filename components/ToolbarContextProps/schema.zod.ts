// Auto-generated Zod schema for ToolbarContextProps
import { z } from 'zod'

export const ToolbarContextPropsSchema = z.object({
  clearAllFilters: z.custom<() => void>().optional(),
  clearFiltersButtonText: z.string().optional(),
  customLabelGroupContent: z.custom<React.ReactNode>().optional(),
  isExpanded: z.boolean(),
  labelGroupContentRef: z.any(),
  numberOfFilters: z.number(),
  showClearFiltersButton: z.boolean().optional(),
  toggleIsExpanded: z.custom<() => void>(),
  toolbarId: z.string().optional(),
  updateNumberFilters: z.custom<(categoryName: string, numberOfFilters: number) => void>()
})

export type ToolbarContextPropsProps = z.infer<typeof ToolbarContextPropsSchema>
