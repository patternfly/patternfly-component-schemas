// Auto-generated Zod schema for TimePickerState
// Generated on: 2025-10-16T19:25:27.749Z
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
