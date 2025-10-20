// Auto-generated Zod schema for FormContextProps
import { z } from 'zod'

export const FormContextPropsSchema = z.object({
  /** Record of errors for all fieldIds */
  errors: z.unknown(),
  /** Get the error message for a given fieldId */
  getError: z.string(),
  /** Get the value for a given fieldId */
  getValue: z.string(),
  /** Used to determine touched state for a given fieldId */
  isTouched: z.boolean(),
  /** Flag to determine the overall validity. True if the record of errors is empty. */
  isValid: z.boolean(),
  /** Set the error message for a given fieldId */
  setError: z.unknown(),
  /** Set multiple errors within the managed record of errors */
  setErrors: z.unknown(),
  /** Used to update the touched state for a given fieldId */
  setTouched: z.unknown(),
  /** Set a validator for a specific fieldId */
  setValidator: z.unknown(),
  /** Set the value for a given fieldId */
  setValue: z.unknown(),
  /** Set multiple values within the managed record of values */
  setValues: z.unknown(),
  /** Record of touched state for all fieldIds */
  touched: z.unknown(),
  /** Triggers all fieldId-specific validators */
  validate: z.any(),
  /** Record of values for all fieldIds */
  values: z.unknown()
})

export type FormContextPropsProps = z.infer<typeof FormContextPropsSchema>
