// Auto-generated Zod schema for AboutModal
import { z } from 'zod'

export const AboutModalSchema = z.object({
  /** The parent container to append the modal to. Defaults to document.body */
  appendTo: z.any().optional(),
  /** Aria label for the about modal.  This should be used when no productName prop is provided */
  'aria-label': z.string().optional(),
  /** The URL or file path of the image for the background */
  backgroundImageSrc: z.string().optional(),
  /** The alternate text of the brand image */
  brandImageAlt: z.string(),
  /** The URL of the image for the brand */
  brandImageSrc: z.string(),
  /** Content rendered inside the about modal */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the about modal */
  className: z.string().optional(),
  /** Set aria label to the close button */
  closeButtonAriaLabel: z.string().optional(),
  /** Flag to disable focus trap */
  disableFocusTrap: z.boolean().optional(),
  /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts */
  hasNoContentContainer: z.boolean().optional().default(false),
  /** Flag to show the about modal */
  isOpen: z.boolean().optional().default(false),
  /** A callback for when the close button is clicked */
  onClose: z.any().optional().default('(_e): any => undefined'),
  /** Product name */
  productName: z.string().optional(),
  /** Trademark information */
  trademark: z.string().optional()
})

export type AboutModalProps = z.infer<typeof AboutModalSchema>
