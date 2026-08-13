// Auto-generated Zod schema for Avatar
import { z } from 'zod'

export const AvatarSchema = z.object({
  /** Specifies the alternate text of the image for the avatar. Will instead set the aria-label when using children or initials; to hide the avatar
from assistive technologies when passing children or initials, pass an empty string to the alt prop. */
  alt: z.string(),
  /** Content rendered inside the avatar, such as custom svgs or icons. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the avatar. */
  className: z.string().optional(),
  /** Color of the avatar. */
  color: z.enum(['red', 'orangered', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple', 'gray']).optional(),
  /** Initials of the avatar. */
  initials: z.string().optional(),
  /** Flag to indicate the avatar should have a border. */
  isBordered: z.boolean().optional(),
  /** Size variant of avatar. */
  size: z.enum(['sm', 'md', 'lg', 'xl']).optional(),
  /** Specifies the URL of the image for the avatar. */
  src: z.string().optional().default('')
})

export type AvatarProps = z.infer<typeof AvatarSchema>
