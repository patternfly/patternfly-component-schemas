// Auto-generated Zod schema for FormProps
import { z } from 'zod'

export const FormPropsSchema = z.object({
  /** Anything that can be rendered as Form content. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Form. */
  className: z.string().optional(),
  innerRef: z.unknown().optional(),
  /** Sets the Form to horizontal. */
  isHorizontal: z.boolean().optional(),
  /** Limits the max-width of the form. */
  isWidthLimited: z.boolean().optional(),
  /** Sets a custom max-width for the form. */
  maxWidth: z.string().optional()
})

export type FormPropsProps = z.infer<typeof FormPropsSchema>
