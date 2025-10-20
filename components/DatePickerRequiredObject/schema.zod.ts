// Auto-generated Zod schema for DatePickerRequiredObject
import { z } from 'zod'

export const DatePickerRequiredObjectSchema = z.object({
  /** Error message to display when the text input is empty and the isRequired prop is also passed in. */
  emptyDateText: z.string().optional(),
  /** Flag indicating the date is required. */
  isRequired: z.boolean().optional()
})

export type DatePickerRequiredObjectProps = z.infer<typeof DatePickerRequiredObjectSchema>
