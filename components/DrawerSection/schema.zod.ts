// Auto-generated Zod schema for DrawerSection
import { z } from 'zod'

export const DrawerSectionSchema = z.object({
  /** Content to be rendered in the drawer section. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the drawer section. */
  className: z.string().optional().default(''),
  /** Color variant of the background of the drawer Section */
  colorVariant: z.enum(['no-background', 'default', 'secondary']).optional().default('DrawerColorVariant.default')
})

export type DrawerSectionProps = z.infer<typeof DrawerSectionSchema>
