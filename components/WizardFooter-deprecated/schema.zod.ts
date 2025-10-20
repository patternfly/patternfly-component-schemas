// Auto-generated Zod schema for WizardFooter-deprecated
import { z } from 'zod'

export const WizardFooterSchema = z.object({
  /** Buttons in the footer */
  children: z.unknown()
})

export type WizardFooterProps = z.infer<typeof WizardFooterSchema>
