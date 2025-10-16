// Auto-generated Zod schema for PaginationNavigationState
// Generated on: 2025-10-16T18:45:33.849Z
import { z } from 'zod'

export const PaginationNavigationStateSchema = z.object({
  userInputPage: z.any().optional()
})

export type PaginationNavigationStateProps = z.infer<typeof PaginationNavigationStateSchema>
