// Auto-generated Zod schema for WizardFooterWrapperProps
// Generated on: 2025-10-16T18:45:33.830Z
import { z } from 'zod'

export const WizardFooterWrapperPropsSchema = z.object({
  children: z.custom<React.ReactNode>(),
  className: z.string().optional()
})

export type WizardFooterWrapperPropsProps = z.infer<typeof WizardFooterWrapperPropsSchema>
