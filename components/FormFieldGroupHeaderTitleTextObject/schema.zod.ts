// Auto-generated Zod schema for FormFieldGroupHeaderTitleTextObject
// Generated on: 2025-10-16T18:56:01.643Z
import { z } from 'zod'

export const FormFieldGroupHeaderTitleTextObjectSchema = z.object({
  /** The id applied to the title div for accessibility */
  id: z.string(),
  /** Title text. */
  text: z.custom<React.ReactNode>()
})

export type FormFieldGroupHeaderTitleTextObjectProps = z.infer<typeof FormFieldGroupHeaderTitleTextObjectSchema>
