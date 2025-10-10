// Auto-generated Zod schema for Gallery
// Generated on: 2025-10-10T18:12:17.761Z
import { z } from 'zod'

export const GallerySchema = z.object({
  /** content rendered inside the Gallery layout */
  children: z.any().optional().default('null'),
  /** additional classes added to the Gallery layout */
  className: z.string().optional().default(''),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional().default('div'),
  /** Adds space between children. */
  hasGutter: z.boolean().optional().default(false),
  /** Maximum widths at various breakpoints. */
  maxWidths: z.object({}).optional(),
  /** Minimum widths at various breakpoints. */
  minWidths: z.object({}).optional()
})

export type GalleryProps = z.infer<typeof GallerySchema>
