// Auto-generated Zod schema for WizardFooterWrapperProps
// Generated on: 2025-10-16T19:25:27.744Z
import { z } from 'zod'

export const WizardFooterWrapperPropsSchema = z.object({
  children: z.custom<React.ReactNode>(),
  className: z.string().optional()
})

export type WizardFooterWrapperPropsProps = z.infer<typeof WizardFooterWrapperPropsSchema>
