// Auto-generated Zod schema for DatePickerRef
import { z } from 'zod'

export const DatePickerRefSchema = z.object({
  /** Current calendar open status. */
  isCalendarOpen: z.boolean(),
  /** Sets the calendar open status. */
  setCalendarOpen: z.custom<(isOpen: boolean) => void>(),
  /** Toggles the calendar open status. If no parameters are passed, the calendar will simply
toggle its open status.
If the isOpen parameter is passed, that will set the calendar open status to the value
of the isOpen parameter.
If the eventKey parameter is set to 'Escape', that will invoke the date pickers
onEscapePress event to toggle the correct control appropriately. */
  toggleCalendar: z.custom<(isOpen?: boolean) => void>()
})

export type DatePickerRefProps = z.infer<typeof DatePickerRefSchema>
