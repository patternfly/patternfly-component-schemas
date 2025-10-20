// Auto-generated Zod schema for PaginationNavigationState
import { z } from 'zod'

export const PaginationNavigationStateSchema = z.object({
  userInputPage: z.any().optional()
})

export type PaginationNavigationStateProps = z.infer<typeof PaginationNavigationStateSchema>
