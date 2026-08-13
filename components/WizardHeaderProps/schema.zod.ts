// Auto-generated Zod schema for WizardHeaderProps
import { z } from 'zod'

export const WizardHeaderPropsSchema = z.object({
  /** Additional classes spread to the wizard header */
  className: z.string().optional(),
  /** Aria-label applied to the X (Close) button */
  closeButtonAriaLabel: z.string().optional(),
  /** Description of the wizard */
  description: z.custom<React.ReactNode>().optional(),
  /** Component type of the description */
  descriptionComponent: z.enum(['div', 'p']).optional(),
  /** id for the description */
  descriptionId: z.string().optional(),
  /** Flag indicating whether the close button should be in the header */
  isCloseHidden: z.boolean().optional(),
  /** Callback function called when the X (Close) button is clicked */
  onClose: z.custom<Event>().optional(),
  /** Title of the wizard */
  title: z.string(),
  /** id for the title */
  titleId: z.string().optional()
})

export type WizardHeaderPropsProps = z.infer<typeof WizardHeaderPropsSchema>
