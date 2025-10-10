// Auto-generated Zod schema for WizardHeaderProps-deprecated
// Generated on: 2025-10-10T18:12:17.797Z
import { z } from 'zod'

export const WizardHeaderPropsSchema = z.object({
  /** Aria-label applied to the X (Close) button */
  closeButtonAriaLabel: z.string().optional(),
  /** Description of the wizard */
  description: z.any().optional(),
  /** Component type of the description */
  descriptionComponent: z.enum(['div', 'p']).optional(),
  /** id for the description */
  descriptionId: z.string().optional(),
  /** Flag indicating whether the close button should be in the header */
  hideClose: z.boolean().optional(),
  /** Callback function called when the X (Close) button is clicked */
  onClose: z.function().optional(),
  /** Title of the wizard */
  title: z.string(),
  /** id for the title */
  titleId: z.string().optional()
})

export type WizardHeaderPropsProps = z.infer<typeof WizardHeaderPropsSchema>
