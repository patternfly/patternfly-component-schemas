// Auto-generated Zod schema for WizardParentStep
// Generated on: 2025-10-10T18:12:17.762Z
import { z } from 'zod'

export const WizardParentStepSchema = z.object({
  /** Flag to determine whether the step can expand or not. */
  isExpandable: z.boolean().optional(),
  /** Nested step IDs */
  subStepIds: z.array(z.any())
})

export type WizardParentStepProps = z.infer<typeof WizardParentStepSchema>
