// Auto-generated Zod schema for SliderProps
import { z } from 'zod'

export const SliderPropsSchema = z.object({
  /** Flag indicating if the slider is discrete for custom steps. This will cause the slider
to snap to the closest value. */
  areCustomStepsContinuous: z.boolean().optional(),
  /** Additional classes added to the slider. */
  className: z.string().optional(),
  /** Array of custom slider step objects (value and label of each step) for the slider. */
  customSteps: z.array(z.unknown()).optional(),
  /** Actions placed at the end of the slider. */
  endActions: z.custom<React.ReactNode>().optional(),
  hasTooltipOverThumb: z.boolean().optional(),
  /** Accessible label for the input field. */
  inputAriaLabel: z.string().optional(),
  /** Text label that is place after the input field. */
  inputLabel: z.any().optional(),
  /** Position of the input. Note "right" is deprecated. Use "end" instead */
  inputPosition: z.enum(['aboveThumb', 'right', 'end']).optional(),
  /** Value displayed in the input field. */
  inputValue: z.number().optional(),
  /** Adds disabled styling, and disables the slider and the input component if present. */
  isDisabled: z.boolean().optional(),
  /** Flag to show value input field. */
  isInputVisible: z.boolean().optional(),
  leftActions: z.custom<React.ReactNode>().optional(),
  /** The maximum permitted value. */
  max: z.number().optional(),
  /** The minimum permitted value. */
  min: z.number().optional(),
  /** Value change callback. This is called when the slider value changes. */
  onChange: z.custom<Event>().optional(),
  rightActions: z.custom<React.ReactNode>().optional(),
  /** Flag to indicate if boundaries should be shown for slider that does not have custom steps. */
  showBoundaries: z.boolean().optional(),
  /** Flag to indicate if ticks should be shown for slider that does not have custom steps. */
  showTicks: z.boolean().optional(),
  /** Actions placed at the start of the slider. */
  startActions: z.custom<React.ReactNode>().optional(),
  /** The step interval. */
  step: z.number().optional(),
  thumbAriaLabel: z.string().optional(),
  /** One or more id's to use for the slider thumb's accessible label. */
  'Unknown': z.string().optional(),
  /** Current value of the slider. */
  value: z.number().optional()
})

export type SliderPropsProps = z.infer<typeof SliderPropsSchema>
