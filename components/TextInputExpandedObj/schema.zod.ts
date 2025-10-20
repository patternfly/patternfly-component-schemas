// Auto-generated Zod schema for TextInputExpandedObj
import { z } from 'zod'

export const TextInputExpandedObjSchema = z.object({
  /** Id of the element that the text input is controlling expansion of. */
  ariaControls: z.string(),
  /** Flag to apply expanded styling. */
  isExpanded: z.boolean()
})

export type TextInputExpandedObjProps = z.infer<typeof TextInputExpandedObjSchema>
