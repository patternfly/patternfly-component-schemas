// Auto-generated Zod schema for DrawerSectionProps
import { z } from 'zod'

export const DrawerSectionPropsSchema = z.object({
  /** Content to be rendered in the drawer section. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the drawer section. */
  className: z.string().optional(),
  /** Color variant of the background of the drawer section.
The `no-background` value is deprecated; use the `isPlain` prop instead. */
  colorVariant: z.enum(['no-background', 'default', 'secondary']).optional(),
  isPlain: z.boolean().optional()
})

export type DrawerSectionPropsProps = z.infer<typeof DrawerSectionPropsSchema>
