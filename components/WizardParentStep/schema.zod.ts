// Auto-generated Zod schema for WizardParentStep
import { z } from 'zod'

export const WizardParentStepSchema = z.object({
  /** Flag to determine whether the step can expand or not. */
  isExpandable: z.boolean().optional(),
  /** Nested step IDs */
  subStepIds: z.any()
})

export type WizardParentStepProps = z.infer<typeof WizardParentStepSchema>
