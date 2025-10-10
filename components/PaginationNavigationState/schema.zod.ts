// Auto-generated Zod schema for PaginationNavigationState
// Generated on: 2025-10-10T18:12:17.772Z
import { z } from 'zod'

export const PaginationNavigationStateSchema = z.object({
  userInputPage: z.any().optional()
})

export type PaginationNavigationStateProps = z.infer<typeof PaginationNavigationStateSchema>
