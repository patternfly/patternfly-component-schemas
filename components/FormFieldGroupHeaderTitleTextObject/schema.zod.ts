// Auto-generated Zod schema for FormFieldGroupHeaderTitleTextObject
import { z } from 'zod'

export const FormFieldGroupHeaderTitleTextObjectSchema = z.object({
  /** The id applied to the title div for accessibility */
  id: z.string(),
  /** Title text. */
  text: z.custom<React.ReactNode>()
})

export type FormFieldGroupHeaderTitleTextObjectProps = z.infer<typeof FormFieldGroupHeaderTitleTextObjectSchema>
