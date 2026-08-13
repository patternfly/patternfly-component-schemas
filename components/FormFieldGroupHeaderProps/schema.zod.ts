// Auto-generated Zod schema for FormFieldGroupHeaderProps
import { z } from 'zod'

export const FormFieldGroupHeaderPropsSchema = z.object({
  /** Field group header actions */
  actions: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the section */
  className: z.string().optional(),
  /** Field group header title description */
  titleDescription: z.custom<React.ReactNode>().optional(),
  /** Field group header title text */
  titleText: z.unknown().optional()
})

export type FormFieldGroupHeaderPropsProps = z.infer<typeof FormFieldGroupHeaderPropsSchema>
