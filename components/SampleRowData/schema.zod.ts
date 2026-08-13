// Auto-generated Zod schema for SampleRowData
import { z } from 'zod'

export const SampleRowDataSchema = z.object({
  lastModified: z.string(),
  location: z.string(),
  status: z.string()
})

export type SampleRowDataProps = z.infer<typeof SampleRowDataSchema>
