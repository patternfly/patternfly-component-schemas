// Auto-generated Zod schema for WizardSubStep
// Generated on: 2025-10-16T19:02:51.718Z
import { z } from 'zod'

export const WizardSubStepSchema = z.object({
  /** Unique identifier of the parent step */
  parentId: z.any()
})

export type WizardSubStepProps = z.infer<typeof WizardSubStepSchema>
