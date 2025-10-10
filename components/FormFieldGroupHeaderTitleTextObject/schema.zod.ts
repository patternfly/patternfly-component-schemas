// Auto-generated Zod schema for FormFieldGroupHeaderTitleTextObject
// Generated on: 2025-10-10T18:12:17.785Z
import { z } from 'zod'

export const FormFieldGroupHeaderTitleTextObjectSchema = z.object({
  /** The id applied to the title div for accessibility */
  id: z.string(),
  /** Title text. */
  text: z.any()
})

export type FormFieldGroupHeaderTitleTextObjectProps = z.infer<typeof FormFieldGroupHeaderTitleTextObjectSchema>
