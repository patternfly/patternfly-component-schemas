// Auto-generated Zod schema for NumberInputProps
import { z } from 'zod'

export const NumberInputPropsSchema = z.object({
  /** Additional classes added to the number input */
  className: z.string().optional(),
  /** Aria label of the input */
  inputAriaLabel: z.string().optional(),
  /** Name of the input */
  inputName: z.string().optional(),
  /** Additional properties added to the text input */
  inputProps: z.unknown().optional(),
  /** Indicates the whole number input should be disabled */
  isDisabled: z.boolean().optional(),
  /** Maximum value of the number input, disabling the plus button when reached */
  max: z.number().optional(),
  /** Minimum value of the number input, disabling the minus button when reached */
  min: z.number().optional(),
  /** Aria label of the minus button */
  minusBtnAriaLabel: z.string().optional(),
  /** Additional properties added to the minus button */
  minusBtnProps: z.unknown().optional(),
  /** Callback function when text input is blurred (focus leaves) */
  onBlur: z.custom<(event?: any) => void>().optional(),
  /** Callback for the text input changing */
  onChange: z.custom<Event>().optional(),
  /** Callback for the minus button */
  onMinus: z.custom<Event>().optional(),
  /** Callback for the plus button */
  onPlus: z.custom<Event>().optional(),
  /** Aria label of the plus button */
  plusBtnAriaLabel: z.string().optional(),
  /** Additional properties added to the plus button */
  plusBtnProps: z.unknown().optional(),
  /** Adds the given unit to the number input */
  unit: z.custom<React.ReactNode>().optional(),
  /** Position of the number input unit in relation to the number input */
  unitPosition: z.enum(['before', 'after']).optional(),
  /** Value to indicate if the input is modified to show that validation state */
  validated: z.enum(['default', 'error', 'warning', 'success']).optional(),
  /** Value of the number input */
  value: z.any().optional(),
  /** Sets the width of the number input to a number of characters */
  widthChars: z.number().optional()
})

export type NumberInputPropsProps = z.infer<typeof NumberInputPropsSchema>
