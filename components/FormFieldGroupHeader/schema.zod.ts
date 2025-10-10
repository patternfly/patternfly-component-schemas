// Auto-generated Zod schema for FormFieldGroupHeader
// Generated on: 2025-10-10T18:12:17.785Z
import { z } from 'zod'

export const FormFieldGroupHeaderSchema = z.object({
  /** Field group header actions */
  actions: z.any().optional(),
  /** Additional classes added to the section */
  className: z.string().optional(),
  /** Field group header title description */
  titleDescription: z.any().optional(),
  /** Field group header title text */
  titleText: z.any().optional()
})

export type FormFieldGroupHeaderProps = z.infer<typeof FormFieldGroupHeaderSchema>
