// Auto-generated Zod schema for Modal
import { z } from 'zod'

export const ModalSchema = z.object({
  /** The parent container to append the modal to. Defaults to "document.body". */
  appendTo: z.any().optional().default('() => document.body'),
  /** Id to use for the modal box description. This should match the ModalHeader labelId or descriptorId. */
  'aria-describedby': z.string().optional(),
  /** Adds an accessible name to the modal when there is no title in the ModalHeader. */
  'aria-label': z.string().optional(),
  /** Id to use for the modal box label. This should include the ModalHeader labelId. */
  'aria-labelledby': z.string().optional(),
  /** Additional classes added to the modal backdrop. */
  backdropClassName: z.string().optional(),
  /** Content rendered inside the modal. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the modal. */
  className: z.string().optional(),
  /** Flag to disable focus trap. */
  disableFocusTrap: z.boolean().optional(),
  /** The element to focus when the modal opens. By default the first
focusable element will receive focus. */
  elementToFocus: z.any().optional(),
  /** An id to use for the modal box container. */
  id: z.string().optional(),
  /** Flag to show the modal. */
  isOpen: z.boolean().optional().default(false),
  /** Maximum width of the modal. */
  maxWidth: z.any().optional(),
  /** Add callback for when the close button is clicked. This prop needs to be passed to render the close button */
  onClose: z.any().optional(),
  /** Modal handles pressing of the escape key and closes the modal. If you want to handle
this yourself you can use this callback function. */
  onEscapePress: z.custom<Event>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional().default(true),
  /** Position of the modal. By default a modal will be positioned vertically and horizontally centered. */
  position: z.enum(['default', 'top']).optional().default('default'),
  /** Offset from alternate position. Can be any valid CSS length/percentage. */
  positionOffset: z.string().optional(),
  /** Variant of the modal. */
  variant: z.enum(['small', 'medium', 'large', 'default']).optional().default('default'),
  /** Default width of the modal. */
  width: z.any().optional()
})

export type ModalProps = z.infer<typeof ModalSchema>
