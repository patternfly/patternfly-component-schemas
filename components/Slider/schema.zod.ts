// Auto-generated Zod schema for Slider
import { z } from 'zod'

export const SliderSchema = z.object({
  /** Flag indicating if the slider is discrete for custom steps. This will cause the slider
to snap to the closest value. */
  areCustomStepsContinuous: z.boolean().optional().default(false),
  /** One or more id's to use for the slider thumb's accessible description. */
  'aria-describedby': z.string().optional(),
  /** One or more id's to use for the slider thumb's accessible label. */
  'aria-labelledby': z.string().optional(),
  /** Additional classes added to the slider. */
  className: z.string().optional(),
  /** Array of custom slider step objects (value and label of each step) for the slider. */
  customSteps: z.array(z.unknown()).optional(),
  /** Actions placed at the end of the slider. */
  endActions: z.custom<React.ReactNode>().optional(),
  hasTooltipOverThumb: z.boolean().optional().default(false),
  /** Accessible label for the input field. */
  inputAriaLabel: z.string().optional().default('Slider value input'),
  /** Text label that is place after the input field. */
  inputLabel: z.any().optional(),
  /** Position of the input. Note "right" is deprecated. Use "end" instead */
  inputPosition: z.enum(['aboveThumb', 'right', 'end']).optional().default('end'),
  /** Value displayed in the input field. */
  inputValue: z.number().optional().default(0),
  /** Adds disabled styling, and disables the slider and the input component if present. */
  isDisabled: z.boolean().optional().default(false),
  /** Flag to show value input field. */
  isInputVisible: z.boolean().optional().default(false),
  /** Use startActions instead. Actions placed at the start of the slider. */
  leftActions: z.custom<React.ReactNode>().optional(),
  /** The maximum permitted value. */
  max: z.number().optional().default(100),
  /** The minimum permitted value. */
  min: z.number().optional().default(0),
  /** Value change callback. This is called when the slider value changes. */
  onChange: z.custom<Event>().optional(),
  /** Use endActions instead. Actions placed to the right of the slider. */
  rightActions: z.custom<React.ReactNode>().optional(),
  /** Flag to indicate if boundaries should be shown for slider that does not have custom steps. */
  showBoundaries: z.boolean().optional().default(true),
  /** Flag to indicate if ticks should be shown for slider that does not have custom steps. */
  showTicks: z.boolean().optional().default(false),
  /** Actions placed at the start of the slider. */
  startActions: z.custom<React.ReactNode>().optional(),
  /** The step interval. */
  step: z.number().optional().default(1),
  thumbAriaLabel: z.string().optional().default('Value'),
  /** Current value of the slider. */
  value: z.number().optional().default(0)
})

export type SliderProps = z.infer<typeof SliderSchema>
