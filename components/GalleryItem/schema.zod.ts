// Auto-generated Zod schema for GalleryItem
import { z } from 'zod'

export const GalleryItemSchema = z.object({
  /** content rendered inside the Gallery Item */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional().default('div')
})

export type GalleryItemProps = z.infer<typeof GalleryItemSchema>
