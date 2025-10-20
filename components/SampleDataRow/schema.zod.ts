// Auto-generated Zod schema for SampleDataRow
import { z } from 'zod'

export const SampleDataRowSchema = z.object({
  applications: z.number(),
  lastModified: z.string(),
  name: z.string(),
  threads: z.number(),
  url: z.string(),
  workspaces: z.number()
})

export type SampleDataRowProps = z.infer<typeof SampleDataRowSchema>
