// Auto-generated Zod schema for WizardFooter-deprecated
// Generated on: 2025-10-10T18:12:17.798Z
import { z } from 'zod'

export const WizardFooterSchema = z.object({
  /** Buttons in the footer */
  children: z.any()
})

export type WizardFooterProps = z.infer<typeof WizardFooterSchema>
