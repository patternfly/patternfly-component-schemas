// Auto-generated Zod schema for FormSectionProps
import { z } from 'zod'

export const FormSectionPropsSchema = z.object({
  /** Content rendered inside the section */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the section */
  className: z.string().optional(),
  /** Title for the section */
  title: z.custom<React.ReactNode>().optional(),
  /** Element to wrap the section title */
  titleElement: z.enum(['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional()
})

export type FormSectionPropsProps = z.infer<typeof FormSectionPropsSchema>
