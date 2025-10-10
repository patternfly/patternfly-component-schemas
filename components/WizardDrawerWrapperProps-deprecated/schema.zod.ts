// Auto-generated Zod schema for WizardDrawerWrapperProps-deprecated
// Generated on: 2025-10-10T18:12:17.798Z
import { z } from 'zod'

export const WizardDrawerWrapperPropsSchema = z.object({
  /** The wizard content */
  children: z.any(),
  /** Flag indicating the wizard has a drawer for at least one of the wizard steps */
  hasDrawer: z.boolean(),
  /** The drawer component which wraps the wizard content */
  wrapper: z.any()
})

export type WizardDrawerWrapperPropsProps = z.infer<typeof WizardDrawerWrapperPropsSchema>
