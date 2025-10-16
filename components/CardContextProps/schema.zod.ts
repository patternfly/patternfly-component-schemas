// Auto-generated Zod schema for CardContextProps
// Generated on: 2025-10-16T19:25:27.779Z
import { z } from 'zod'

export const CardContextPropsSchema = z.object({
  cardId: z.string(),
  isClickable: z.boolean(),
  isClicked: z.boolean(),
  isDisabled: z.boolean(),
  isExpanded: z.boolean(),
  isSelectable: z.boolean(),
  isSelected: z.boolean()
})

export type CardContextPropsProps = z.infer<typeof CardContextPropsSchema>
