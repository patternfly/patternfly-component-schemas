// Auto-generated Zod schema for FormFieldGroupHeader
// Generated on: 2025-10-16T19:02:51.746Z
import { z } from 'zod'

export const FormFieldGroupHeaderSchema = z.object({
  /** Field group header actions */
  actions: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the section */
  className: z.string().optional(),
  /** Field group header title description */
  titleDescription: z.custom<React.ReactNode>().optional(),
  /** Field group header title text */
  titleText: z.unknown().optional()
})

export type FormFieldGroupHeaderProps = z.infer<typeof FormFieldGroupHeaderSchema>
