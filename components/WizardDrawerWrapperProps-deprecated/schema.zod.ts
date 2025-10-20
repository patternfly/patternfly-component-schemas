// Auto-generated Zod schema for WizardDrawerWrapperProps-deprecated
import { z } from 'zod'

export const WizardDrawerWrapperPropsSchema = z.object({
  /** The wizard content */
  children: z.custom<React.ReactElement>(),
  /** Flag indicating the wizard has a drawer for at least one of the wizard steps */
  hasDrawer: z.boolean(),
  /** The drawer component which wraps the wizard content */
  wrapper: z.custom<React.ReactElement>()
})

export type WizardDrawerWrapperPropsProps = z.infer<typeof WizardDrawerWrapperPropsSchema>
