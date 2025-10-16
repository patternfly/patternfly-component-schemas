// Auto-generated Zod schema for SliderStepObject
// Generated on: 2025-10-16T18:56:01.623Z
import { z } from 'zod'

export const SliderStepObjectSchema = z.object({
  /** Flag to hide the label. */
  isLabelHidden: z.boolean().optional(),
  /** The display label for the step value. This is also used for the aria-valuetext attribute. */
  label: z.string(),
  /** Value of the step. This value is a percentage of the slider where the tick is drawn. */
  value: z.number()
})

export type SliderStepObjectProps = z.infer<typeof SliderStepObjectSchema>
