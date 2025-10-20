// Auto-generated Zod schema for SliderStep
import { z } from 'zod'

export const SliderStepSchema = z.object({
  /** Additional classes added to the slider step. */
  className: z.string().optional(),
  /** Flag indicating the step is active. */
  isActive: z.boolean().optional().default(false),
  /** Flag indicating that the label should be hidden. */
  isLabelHidden: z.boolean().optional().default(false),
  /** Flag indicating that the tick should be hidden. */
  isTickHidden: z.boolean().optional().default(false),
  /** Step label. * */
  label: z.string().optional(),
  /** Step value. * */
  value: z.number().optional()
})

export type SliderStepProps = z.infer<typeof SliderStepSchema>
