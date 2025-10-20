// Auto-generated Zod schema for WizardHeader-deprecated
import { z } from 'zod'

export const WizardHeaderSchema = z.object({
  /** Aria-label applied to the X (Close) button */
  closeButtonAriaLabel: z.string().optional(),
  /** Description of the wizard */
  description: z.custom<React.ReactNode>().optional(),
  /** Component type of the description */
  descriptionComponent: z.enum(['div', 'p']).optional().default('div'),
  /** id for the description */
  descriptionId: z.string().optional(),
  /** Flag indicating whether the close button should be in the header */
  hideClose: z.boolean().optional(),
  /** Callback function called when the X (Close) button is clicked */
  onClose: z.custom<() => void>().optional().default('() => undefined'),
  /** Title of the wizard */
  title: z.string(),
  /** id for the title */
  titleId: z.string().optional()
})

export type WizardHeaderProps = z.infer<typeof WizardHeaderSchema>
