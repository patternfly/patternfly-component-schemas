// Auto-generated Zod schema for GalleryItemProps
import { z } from 'zod'

export const GalleryItemPropsSchema = z.object({
  /** content rendered inside the Gallery Item */
  children: z.custom<React.ReactNode>().optional(),
  /** Sets the base component to render. defaults to div */
  component: z.any().optional()
})

export type GalleryItemPropsProps = z.infer<typeof GalleryItemPropsSchema>
