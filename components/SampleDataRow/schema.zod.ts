// Auto-generated Zod schema for SampleDataRow
// Generated on: 2025-10-16T18:56:01.609Z
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
