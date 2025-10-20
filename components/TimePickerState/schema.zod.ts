// Auto-generated Zod schema for TimePickerState
import { z } from 'zod'

export const TimePickerStateSchema = z.object({
  focusedIndex: z.number(),
  isInvalid: z.boolean(),
  isTimeOptionsOpen: z.boolean(),
  maxTimeState: z.string(),
  minTimeState: z.string(),
  scrollIndex: z.number(),
  timeRegex: z.unknown(),
  timeState: z.string()
})

export type TimePickerStateProps = z.infer<typeof TimePickerStateSchema>
