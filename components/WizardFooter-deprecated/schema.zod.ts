// Auto-generated Zod schema for WizardFooter-deprecated
// Generated on: 2025-10-16T19:02:51.760Z
import { z } from 'zod'

export const WizardFooterSchema = z.object({
  /** Buttons in the footer */
  children: z.unknown()
})

export type WizardFooterProps = z.infer<typeof WizardFooterSchema>
