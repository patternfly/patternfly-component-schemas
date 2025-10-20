// Auto-generated Zod schema for WizardFooterWrapperProps
import { z } from 'zod'

export const WizardFooterWrapperPropsSchema = z.object({
  children: z.custom<React.ReactNode>(),
  className: z.string().optional()
})

export type WizardFooterWrapperPropsProps = z.infer<typeof WizardFooterWrapperPropsSchema>
