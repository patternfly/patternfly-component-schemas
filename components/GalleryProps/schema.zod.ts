// Auto-generated Zod schema for GalleryProps
// Generated on: 2025-10-16T19:25:27.742Z
import { z } from 'zod'

export const GalleryPropsSchema = z.object({
  /** content rendered inside the Gallery layout */
  children: z.custom<React.ReactNode>().optional(),
  /** additional classes added to the Gallery layout */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional(),
  /** Adds space between children. */
  hasGutter: z.boolean().optional(),
  /** Maximum widths at various breakpoints. */
  maxWidths: z.record(z.unknown()).optional(),
  /** Minimum widths at various breakpoints. */
  minWidths: z.record(z.unknown()).optional()
})

export type GalleryPropsProps = z.infer<typeof GalleryPropsSchema>
