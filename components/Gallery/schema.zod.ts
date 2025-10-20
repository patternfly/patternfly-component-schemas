// Auto-generated Zod schema for Gallery
import { z } from 'zod'

export const GallerySchema = z.object({
  /** content rendered inside the Gallery layout */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** additional classes added to the Gallery layout */
  className: z.string().optional().default(''),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional().default('div'),
  /** Adds space between children. */
  hasGutter: z.boolean().optional().default(false),
  /** Maximum widths at various breakpoints. */
  maxWidths: z.record(z.unknown()).optional(),
  /** Minimum widths at various breakpoints. */
  minWidths: z.record(z.unknown()).optional()
})

export type GalleryProps = z.infer<typeof GallerySchema>
