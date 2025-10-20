// Auto-generated Zod schema for Brand
import { z } from 'zod'

export const BrandSchema = z.object({
  /** Attribute that specifies the alt text of a <img> Brand. For a <picture> Brand this specifies the fallback <img> alt text. */
  alt: z.string(),
  /** Transforms the Brand into a <picture> element from an <img> element. Container for <source> child elements. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the either type of Brand. */
  className: z.string().optional().default(''),
  /** Heights at various breakpoints for a <picture> Brand. */
  heights: z.record(z.unknown()).optional(),
  /** Attribute that specifies the URL of a <img> Brand. For a <picture> Brand this specifies the fallback <img> URL. */
  src: z.string().optional().default(''),
  /** Widths at various breakpoints for a <picture> Brand. */
  widths: z.record(z.unknown()).optional()
})

export type BrandProps = z.infer<typeof BrandSchema>
