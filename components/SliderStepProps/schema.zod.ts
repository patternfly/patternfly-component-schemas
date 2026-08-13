// Auto-generated Zod schema for SliderStepProps
import { z } from 'zod'

export const SliderStepPropsSchema = z.object({
  /** Additional classes added to the slider step. */
  className: z.string().optional(),
  /** Flag indicating the step is active. */
  isActive: z.boolean().optional(),
  /** Flag indicating that the label should be hidden. */
  isLabelHidden: z.boolean().optional(),
  /** Flag indicating that the tick should be hidden. */
  isTickHidden: z.boolean().optional(),
  /** Step label. * */
  label: z.string().optional(),
  /** Step value. * */
  value: z.number().optional()
})

export type SliderStepPropsProps = z.infer<typeof SliderStepPropsSchema>
