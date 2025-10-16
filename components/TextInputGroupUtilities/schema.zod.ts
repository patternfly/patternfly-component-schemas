// Auto-generated Zod schema for TextInputGroupUtilities
// Generated on: 2025-10-10T18:12:17.767Z
import { z } from 'zod'

export const TextInputGroupUtilitiesSchema = z.object({
  /** Content rendered inside the text input group utilities div */
  children: z.any().optional(),
  /** Additional classes applied to the text input group utilities container */
  className: z.string().optional()
})

export type TextInputGroupUtilitiesProps = z.infer<typeof TextInputGroupUtilitiesSchema>
