// Auto-generated Zod schema for HelperText
import { z } from 'zod'

export const HelperTextSchema = z.object({
  /** Adds an accessible label to the helper text when component is a "ul". */
  'aria-label': z.string().optional(),
  /** Content rendered inside the helper text container. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the helper text container. */
  className: z.string().optional(),
  /** Component type of the helper text container */
  component: z.enum(['div', 'ul']).optional().default('div'),
  /** ID for the helper text container. The value of this prop can be passed into a form component's
aria-describedby prop when you intend for all helper text items to be announced to
assistive technologies. */
  id: z.string().optional(),
  /** Flag for indicating whether the helper text container is a live region. Use this prop when you
expect or intend for any helper text items within the container to be dynamically updated. */
  isLiveRegion: z.boolean().optional().default(false)
})

export type HelperTextProps = z.infer<typeof HelperTextSchema>
