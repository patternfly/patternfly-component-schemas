// Auto-generated Zod schema for FormGroupLabelHelpProps
import { z } from 'zod'

export const FormGroupLabelHelpPropsSchema = z.object({
  /** Additional classes added to the help button. */
  className: z.string().optional(),
  innerRef: z.unknown().optional(),
  /** Adds an accessible name for the help button. */
  'Unknown': z.string()
})

export type FormGroupLabelHelpPropsProps = z.infer<typeof FormGroupLabelHelpPropsSchema>
