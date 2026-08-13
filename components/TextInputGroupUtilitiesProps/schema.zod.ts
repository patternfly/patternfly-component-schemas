// Auto-generated Zod schema for TextInputGroupUtilitiesProps
import { z } from 'zod'

export const TextInputGroupUtilitiesPropsSchema = z.object({
  /** Content rendered inside the text input group utilities div */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the text input group utilities container */
  className: z.string().optional()
})

export type TextInputGroupUtilitiesPropsProps = z.infer<typeof TextInputGroupUtilitiesPropsSchema>
