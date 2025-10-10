// Auto-generated Zod schema for TimePickerState
// Generated on: 2025-10-10T18:12:17.767Z
import { z } from 'zod'

export const TimePickerStateSchema = z.object({
  focusedIndex: z.number(),
  isInvalid: z.boolean(),
  isTimeOptionsOpen: z.boolean(),
  maxTimeState: z.string(),
  minTimeState: z.string(),
  scrollIndex: z.number(),
  timeRegex: z.any(),
  timeState: z.string()
})

export type TimePickerStateProps = z.infer<typeof TimePickerStateSchema>
