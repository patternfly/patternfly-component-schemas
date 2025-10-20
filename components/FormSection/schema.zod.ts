// Auto-generated Zod schema for FormSection
import { z } from 'zod'

export const FormSectionSchema = z.object({
  /** Content rendered inside the section */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the section */
  className: z.string().optional().default(''),
  /** Title for the section */
  title: z.custom<React.ReactNode>().optional().default(''),
  /** Element to wrap the section title */
  titleElement: z.enum(['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional().default('div')
})

export type FormSectionProps = z.infer<typeof FormSectionSchema>
