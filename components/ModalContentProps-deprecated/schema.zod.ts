// Auto-generated Zod schema for ModalContentProps-deprecated
import { z } from 'zod'

export const ModalContentPropsSchema = z.object({
  /** Action buttons to add to the standard modal footer. Ignored if the footer property
is passed in. */
  actions: z.unknown().optional(),
  /** Id of the backdrop. */
  backdropId: z.string().optional(),
  /** Accessible label applied to the modal box body. This should be used to communicate
important information about the modal box body div element if needed, such as that it
is scrollable. */
  bodyAriaLabel: z.string().optional(),
  /** Accessible role applied to the modal box body. This will default to "region" if the
bodyAriaLabel property is passed in. Set to a more appropriate role as applicable
based on the modal content and context. */
  bodyAriaRole: z.string().optional(),
  /** Id of the modal box container. */
  boxId: z.string(),
  /** Content rendered inside the modal. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the modal box. */
  className: z.string().optional(),
  /** Description of the modal. */
  description: z.custom<React.ReactNode>().optional(),
  /** Id of the modal box description. */
  descriptorId: z.string(),
  /** Flag to disable focus trap. */
  disableFocusTrap: z.boolean().optional(),
  /** The element to focus when the modal opens. By default the first
focusable element will receive focus. */
  elementToFocus: z.any().optional(),
  /** Custom footer. */
  footer: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if modal content should be placed in a modal box body wrapper. */
  hasNoBodyWrapper: z.boolean().optional(),
  /** Complex header (more than just text), supersedes the title property for header content. */
  header: z.custom<React.ReactNode>().optional(),
  /** Optional help section for the modal header. */
  help: z.custom<React.ReactNode>().optional(),
  /** Flag to show the modal. */
  isOpen: z.boolean().optional(),
  /** Id of the modal box title. */
  labelId: z.string(),
  /** Maximum width of the modal. */
  maxWidth: z.any().optional(),
  /** A callback for when the close button is clicked. */
  onClose: z.any().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** Position of the modal. By default a modal will be positioned vertically and horizontally centered. */
  position: z.enum(['default', 'top']).optional(),
  /** Offset from alternate position. Can be any valid CSS length/percentage. */
  positionOffset: z.string().optional(),
  /** Flag to show the close button in the header area of the modal. */
  showClose: z.boolean().optional(),
  /** Text content of the modal header. */
  title: z.custom<React.ReactNode>().optional(),
  /** Optional alert icon (or other) to show before the title of the modal header. When the
predefined alert types are used the default styling will be automatically applied. */
  titleIconVariant: z.enum(['success', 'danger', 'warning', 'info', 'custom']).optional(),
  /** Optional title label text for screen readers. */
  titleLabel: z.string().optional(),
  /** Id to use for the modal box label. */
  'Unknown': z.any().optional(),
  /** Variant of the modal. */
  variant: z.enum(['small', 'medium', 'large', 'default']).optional(),
  /** Default width of the modal. */
  width: z.any().optional()
})

export type ModalContentPropsProps = z.infer<typeof ModalContentPropsSchema>
