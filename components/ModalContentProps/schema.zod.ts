// Auto-generated Zod schema for ModalContentProps
import { z } from 'zod'

export const ModalContentPropsSchema = z.object({
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
  disableFocusTrap: z.boolean().optional(),
  /** The element to focus when the modal opens. By default the first
focusable element will receive focus. */
  elementToFocus: z.any().optional(),
  /** Flag to show the modal. */
  isOpen: z.boolean().optional(),
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
  /** Id to use for the modal box label. This should include the ModalHeader labelId. */
  'Unknown': z.string().optional(),
  /** Variant of the modal. */
  variant: z.enum(['small', 'medium', 'large', 'default']).optional(),
  /** Default width of the modal. */
  width: z.any().optional()
})

export type ModalContentPropsProps = z.infer<typeof ModalContentPropsSchema>
