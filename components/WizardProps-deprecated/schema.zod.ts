// Auto-generated Zod schema for WizardProps-deprecated
import { z } from 'zod'

export const WizardPropsSchema = z.object({
  /** The parent container to append the modal to. Defaults to document.body */
  appendTo: z.any().optional(),
  /** (Unused if footer is controlled) The Back button text */
  backButtonText: z.custom<React.ReactNode>().optional(),
  /** (Unused if footer is controlled) The Cancel button text */
  cancelButtonText: z.custom<React.ReactNode>().optional(),
  /** Additional classes spread to the Wizard */
  className: z.string().optional(),
  /** (Unused if footer is controlled) aria-label for the close button */
  closeButtonAriaLabel: z.string().optional(),
  /** The wizard description */
  description: z.custom<React.ReactNode>().optional(),
  /** Component type of the description */
  descriptionComponent: z.enum(['div', 'p']).optional(),
  /** An optional id for the description */
  descriptionId: z.string().optional(),
  /** (Use to control the footer) Passing in a footer component lets you control the buttons yourself */
  footer: z.custom<React.ReactNode>().optional(),
  /** Flag indicating the wizard has a drawer for at least one of the wizard steps */
  hasDrawer: z.boolean().optional(),
  /** Can remove the default padding around the main body content by setting this to true */
  hasNoBodyPadding: z.boolean().optional(),
  /** Custom height of the wizard */
  height: z.any().optional(),
  /** Flag indicating whether the close button should be in the header */
  hideClose: z.boolean().optional(),
  /** Flag indicating the wizard drawer is expanded */
  isDrawerExpanded: z.boolean().optional(),
  /** Flag indicating nav items with sub steps are expandable */
  isNavExpandable: z.boolean().optional(),
  /** Flag indicating Wizard modal is open. Wizard will be placed into a modal if this prop is provided */
  isOpen: z.boolean().optional(),
  /** Adds an accessible name to the wizard body when the body content overflows and renders
a scrollbar. */
  mainAriaLabel: z.string().optional(),
  /** Adds an accessible name to the wizard body by passing the the id of one or more elements.
The aria-labelledby will only be applied when the body content overflows and renders a scrollbar. */
  mainAriaLabelledBy: z.string().optional(),
  /** Aria-label for the Nav */
  navAriaLabel: z.string().optional(),
  /** Sets aria-labelledby on nav element */
  navAriaLabelledBy: z.string().optional(),
  /** (Unused if footer is controlled) The Next button text */
  nextButtonText: z.custom<React.ReactNode>().optional(),
  /** (Unused if footer is controlled) Callback function after Back button is clicked */
  onBack: z.custom<WizardStepFunctionType>().optional(),
  /** Callback function to close the wizard */
  onClose: z.custom<() => void>().optional(),
  /** Callback function to signal the current step in the wizard */
  onCurrentStepChanged: z.custom<(step: WizardStep) => void>().optional(),
  /** Callback function for when the drawer is toggled. Can be used to set browser focus in the drawer. */
  onExpandDrawer: z.custom<() => void>().optional(),
  /** Callback function when a step in the nav is clicked */
  onGoToStep: z.custom<WizardStepFunctionType>().optional(),
  /** (Unused if footer is controlled) Callback function after Next button is clicked */
  onNext: z.custom<WizardStepFunctionType>().optional(),
  /** (Unused if footer is controlled) Callback function to save at the end of the wizard, if not specified uses onClose */
  onSave: z.custom<() => void>().optional(),
  /** The current step the wizard is on (1 or higher) */
  startAtStep: z.number().optional(),
  /** The wizard steps configuration object */
  steps: z.array(z.unknown()),
  /** The wizard title to display if header is desired */
  title: z.string().optional(),
  /** An optional id for the title */
  titleId: z.string().optional(),
  /** Custom width of the wizard */
  width: z.any().optional()
})

export type WizardPropsProps = z.infer<typeof WizardPropsSchema>
