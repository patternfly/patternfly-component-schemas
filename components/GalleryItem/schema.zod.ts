// Auto-generated Zod schema for GalleryItem
// Generated on: 2025-10-10T18:12:17.761Z
import { z } from 'zod'

export const GalleryItemSchema = z.object({
  /** content rendered inside the Gallery Item */
  children: z.any().optional().default('null'),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional().default('div')
})

export type GalleryItemProps = z.infer<typeof GalleryItemSchema>
