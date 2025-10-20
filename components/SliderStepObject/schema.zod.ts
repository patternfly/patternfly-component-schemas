// Auto-generated Zod schema for SliderStepObject
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
