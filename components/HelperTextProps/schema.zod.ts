// Auto-generated Zod schema for HelperTextProps
import { z } from 'zod'

export const HelperTextPropsSchema = z.object({
  /** Content rendered inside the helper text container. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the helper text container. */
  className: z.string().optional(),
  /** Component type of the helper text container */
  component: z.enum(['div', 'ul']).optional(),
  /** ID for the helper text container. The value of this prop can be passed into a form component's
aria-describedby prop when you intend for all helper text items to be announced to
assistive technologies. */
  id: z.string().optional(),
  /** Flag for indicating whether the helper text container is a live region. Use this prop when you
expect or intend for any helper text items within the container to be dynamically updated. */
  isLiveRegion: z.boolean().optional(),
  /** Adds an accessible label to the helper text when component is a "ul". */
  'Unknown': z.string().optional()
})

export type HelperTextPropsProps = z.infer<typeof HelperTextPropsSchema>
