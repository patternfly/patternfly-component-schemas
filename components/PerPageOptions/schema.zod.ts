// Auto-generated Zod schema for PerPageOptions
import { z } from 'zod'

export const PerPageOptionsSchema = z.object({
  /** The text title of the option, which is rendered inside the pagination dropdown menu. */
  title: z.string().optional(),
  /** The value of the option, which determines how many items are displayed per page. */
  value: z.number().optional()
})

export type PerPageOptionsProps = z.infer<typeof PerPageOptionsSchema>
