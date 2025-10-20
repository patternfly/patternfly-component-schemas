// Auto-generated Zod schema for Tile-deprecated
import { z } from 'zod'

export const TileSchema = z.object({
  /** Content rendered inside the banner */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the banner */
  className: z.string().optional(),
  /** Icon in the tile title */
  icon: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if the tile is disabled */
  isDisabled: z.boolean().optional(),
  /** Flag indicating if the stacked tile icon is large */
  isDisplayLarge: z.boolean().optional(),
  /** Flag indicating if the tile is selected */
  isSelected: z.boolean().optional(),
  /** Flag indicating if the tile header is stacked */
  isStacked: z.boolean().optional(),
  /** Title of the tile */
  title: z.string()
})

export type TileProps = z.infer<typeof TileSchema>
