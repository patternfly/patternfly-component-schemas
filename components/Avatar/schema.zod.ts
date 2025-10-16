// Auto-generated Zod schema for Avatar
// Generated on: 2025-10-16T18:56:01.656Z
import { z } from 'zod'

export const AvatarSchema = z.object({
  /** Attribute that specifies the alternate text of the image for the avatar. */
  alt: z.string(),
  /** Additional classes added to the avatar. */
  className: z.string().optional(),
  /** Flag to indicate the avatar should have a border. */
  isBordered: z.boolean().optional(),
  /** Size variant of avatar. */
  size: z.enum(['sm', 'md', 'lg', 'xl']).optional(),
  /** Attribute that specifies the URL of the image for the avatar. */
  src: z.string().optional().default('')
})

export type AvatarProps = z.infer<typeof AvatarSchema>
