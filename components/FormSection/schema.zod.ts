// Auto-generated Zod schema for FormSection
// Generated on: 2025-10-10T18:12:17.784Z
import { z } from 'zod'

export const FormSectionSchema = z.object({
  /** Content rendered inside the section */
  children: z.any().optional(),
  /** Additional classes added to the section */
  className: z.string().optional().default(''),
  /** Title for the section */
  title: z.any().optional().default(''),
  /** Element to wrap the section title */
  titleElement: z.enum(['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional().default('div')
})

export type FormSectionProps = z.infer<typeof FormSectionSchema>
