// Auto-generated Zod schema for TileProps-deprecated
// Generated on: 2025-10-10T18:12:17.794Z
import { z } from 'zod'

export const TilePropsSchema = z.object({
  /** Content rendered inside the banner */
  children: z.any().optional(),
  /** Additional classes added to the banner */
  className: z.string().optional(),
  /** Icon in the tile title */
  icon: z.any().optional(),
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

export type TilePropsProps = z.infer<typeof TilePropsSchema>
