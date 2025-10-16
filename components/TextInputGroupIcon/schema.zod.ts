// Auto-generated Zod schema for TextInputGroupIcon
// Generated on: 2025-10-16T18:45:33.836Z
import { z } from 'zod'

export const TextInputGroupIconSchema = z.object({
  /** Content rendered inside the text input group utilities div */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the text input group utilities container */
  className: z.string().optional(),
  /** Flag indicating if the icon is a status icon and should inherit status styling. */
  isStatus: z.boolean().optional()
})

export type TextInputGroupIconProps = z.infer<typeof TextInputGroupIconSchema>
