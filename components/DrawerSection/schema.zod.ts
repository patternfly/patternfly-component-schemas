// Auto-generated Zod schema for DrawerSection
import { z } from 'zod'

export const DrawerSectionSchema = z.object({
  /** Content to be rendered in the drawer section. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the drawer section. */
  className: z.string().optional().default(''),
  /** Color variant of the background of the drawer section.
The `no-background` value is deprecated; use the `isPlain` prop instead. */
  colorVariant: z.enum(['no-background', 'default', 'secondary']).optional().default('DrawerColorVariant.default'),
  /** Flag indicating that the drawer section should use plain styles. */
  isPlain: z.boolean().optional().default(false)
})

export type DrawerSectionProps = z.infer<typeof DrawerSectionSchema>
