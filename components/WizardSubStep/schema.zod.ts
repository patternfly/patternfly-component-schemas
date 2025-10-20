// Auto-generated Zod schema for WizardSubStep
import { z } from 'zod'

export const WizardSubStepSchema = z.object({
  /** Unique identifier of the parent step */
  parentId: z.any()
})

export type WizardSubStepProps = z.infer<typeof WizardSubStepSchema>
