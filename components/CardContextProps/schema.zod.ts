// Auto-generated Zod schema for CardContextProps
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
