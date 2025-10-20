// Auto-generated Zod schema for ModalContent
import { z } from 'zod'

export const ModalContentSchema = z.object({
  /** Id to use for the modal box description. This should match the ModalHeader labelId or descriptorId. */
  'aria-describedby': z.string().optional(),
  /** Accessible descriptor of the modal. */
  'aria-label': z.string().optional(),
  /** Id to use for the modal box label. This should include the ModalHeader labelId. */
  'aria-labelledby': z.string().optional(),
  /** Additional classes added to the modal backdrop. */
  backdropClassName: z.string().optional(),
  /** Id of the backdrop. */
  backdropId: z.string().optional(),
  /** Id of the modal box container. */
  boxId: z.string(),
  /** Content rendered inside the modal. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the modal box. */
  className: z.string().optional(),
  /** Flag to disable focus trap. */
  disableFocusTrap: z.boolean().optional().default(false),
  /** The element to focus when the modal opens. By default the first
focusable element will receive focus. */
  elementToFocus: z.any().optional(),
  /** Flag to show the modal. */
  isOpen: z.boolean().optional().default(false),
  /** Maximum width of the modal. */
  maxWidth: z.any().optional(),
  /** A callback for when the close button is clicked. */
  onClose: z.any().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional().default(true),
  /** Position of the modal. By default a modal will be positioned vertically and horizontally centered. */
  position: z.enum(['default', 'top']).optional(),
  /** Offset from alternate position. Can be any valid CSS length/percentage. */
  positionOffset: z.string().optional(),
  /** Variant of the modal. */
  variant: z.enum(['small', 'medium', 'large', 'default']).optional().default('default'),
  /** Default width of the modal. */
  width: z.any().optional()
})

export type ModalContentProps = z.infer<typeof ModalContentSchema>
