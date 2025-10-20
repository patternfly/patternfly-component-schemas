// Auto-generated Zod schema for WizardStepProps
import { z } from 'zod'

export const WizardStepPropsSchema = z.object({
  /** Props for WizardBody that wraps content by default. */
  body: z.unknown().optional(),
  /** Optional for when the step is used as a parent to sub-steps */
  children: z.any().optional(),
  /** Replaces the step's footer. The step's footer takes precedence over the wizard's footer. */
  footer: z.any().optional(),
  /** Unique identifier */
  id: z.any(),
  /** Flag to disable the step's navigation item */
  isDisabled: z.boolean().optional(),
  /** Flag to determine whether parent steps can expand or not. Defaults to false. */
  isExpandable: z.boolean().optional(),
  /** Flag to determine whether the step is hidden */
  isHidden: z.boolean().optional(),
  /** Name of the step's navigation item */
  name: z.custom<React.ReactNode>(),
  /** Replaces the step's navigation item or its properties. */
  navItem: z.unknown().optional(),
  /** Used to determine icon next to the step's navigation item */
  status: z.enum(['default', 'error', 'success']).optional(),
  /** Optional list of sub-steps */
  steps: z.array(z.custom<React.ReactElement>()).optional()
})

export type WizardStepPropsProps = z.infer<typeof WizardStepPropsSchema>
