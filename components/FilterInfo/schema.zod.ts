// Auto-generated Zod schema for FilterInfo
import { z } from 'zod'

export const FilterInfoSchema = z.object({
  '[key: string]': z.number()
})

export type FilterInfoProps = z.infer<typeof FilterInfoSchema>
