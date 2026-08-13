// Auto-generated Zod schema for ProgressHelperTextProps
import { z } from 'zod'

export const ProgressHelperTextPropsSchema = z.object({
  /** Content which can be used to convey additional information about the progress component.
We recommend the helper text component as it was designed for this purpose. */
  children: z.custom<React.ReactNode>().optional()
})

export type ProgressHelperTextPropsProps = z.infer<typeof ProgressHelperTextPropsSchema>
