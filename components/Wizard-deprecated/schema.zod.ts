// Auto-generated Zod schema for Wizard-deprecated
import { z } from 'zod'

export const WizardSchema = z.object({
  /** The parent container to append the modal to. Defaults to document.body */
  appendTo: z.any().optional().default('null'),
  /** (Unused if footer is controlled) The Back button text */
  backButtonText: z.custom<React.ReactNode>().optional().default('Back'),
  /** (Unused if footer is controlled) The Cancel button text */
  cancelButtonText: z.custom<React.ReactNode>().optional().default('Cancel'),
  /** Additional classes spread to the Wizard */
  className: z.string().optional().default(''),
  /** (Unused if footer is controlled) aria-label for the close button */
  closeButtonAriaLabel: z.string().optional().default('Close'),
  /** The wizard description */
  description: z.custom<React.ReactNode>().optional().default(''),
  /** Component type of the description */
  descriptionComponent: z.enum(['div', 'p']).optional().default('p'),
  /** An optional id for the description */
  descriptionId: z.string().optional(),
  /** (Use to control the footer) Passing in a footer component lets you control the buttons yourself */
  footer: z.custom<React.ReactNode>().optional().default('null'),
  /** Flag indicating the wizard has a drawer for at least one of the wizard steps */
  hasDrawer: z.boolean().optional().default(false),
  /** Can remove the default padding around the main body content by setting this to true */
  hasNoBodyPadding: z.boolean().optional().default(false),
  /** Custom height of the wizard */
  height: z.any().optional().default('null'),
  /** Flag indicating whether the close button should be in the header */
  hideClose: z.boolean().optional().default(false),
  /** Flag indicating the wizard drawer is expanded */
  isDrawerExpanded: z.boolean().optional().default(false),
  /** Flag indicating nav items with sub steps are expandable */
  isNavExpandable: z.boolean().optional().default(false),
  /** Flag indicating Wizard modal is open. Wizard will be placed into a modal if this prop is provided */
  isOpen: z.boolean().optional().default('undefined'),
  /** Adds an accessible name to the wizard body when the body content overflows and renders
a scrollbar. */
  mainAriaLabel: z.string().optional().default('null'),
  /** Adds an accessible name to the wizard body by passing the the id of one or more elements.
The aria-labelledby will only be applied when the body content overflows and renders a scrollbar. */
  mainAriaLabelledBy: z.string().optional().default('null'),
  /** Aria-label for the Nav */
  navAriaLabel: z.string().optional().default('null'),
  /** Sets aria-labelledby on nav element */
  navAriaLabelledBy: z.string().optional().default('null'),
  /** (Unused if footer is controlled) The Next button text */
  nextButtonText: z.custom<React.ReactNode>().optional().default('Next'),
  /** (Unused if footer is controlled) Callback function after Back button is clicked */
  onBack: z.custom<React.ReactNode>().optional().default('null'),
  /** Callback function to close the wizard */
  onClose: z.custom<() => void>().optional().default('() => undefined as any'),
  /** Callback function to signal the current step in the wizard */
  onCurrentStepChanged: z.custom<(step: WizardStep) => void>().optional(),
  /** Callback function for when the drawer is toggled. Can be used to set browser focus in the drawer. */
  onExpandDrawer: z.custom<() => void>().optional().default('() => undefined as any'),
  /** Callback function when a step in the nav is clicked */
  onGoToStep: z.custom<React.ReactNode>().optional().default('null'),
  /** (Unused if footer is controlled) Callback function after Next button is clicked */
  onNext: z.custom<React.ReactNode>().optional().default('null'),
  /** (Unused if footer is controlled) Callback function to save at the end of the wizard, if not specified uses onClose */
  onSave: z.custom<() => void>().optional(),
  /** The current step the wizard is on (1 or higher) */
  startAtStep: z.number().optional().default(1),
  /** The wizard steps configuration object */
  steps: z.array(z.unknown()),
  /** The wizard title to display if header is desired */
  title: z.string().optional().default('null'),
  /** An optional id for the title */
  titleId: z.string().optional(),
  /** Custom width of the wizard */
  width: z.any().optional().default('null')
})

export type WizardProps = z.infer<typeof WizardSchema>
