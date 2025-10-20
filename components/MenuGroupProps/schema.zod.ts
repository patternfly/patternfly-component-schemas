// Auto-generated Zod schema for MenuGroupProps
import { z } from 'zod'

export const MenuGroupPropsSchema = z.object({
  /** Items within group */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the MenuGroup */
  className: z.string().optional(),
  innerRef: z.unknown().optional(),
  /** Group label */
  label: z.custom<React.ReactNode>().optional(),
  /** Group label heading level. Default is h1. */
  labelHeadingLevel: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional(),
  /** ID for title label */
  titleId: z.string().optional()
})

export type MenuGroupPropsProps = z.infer<typeof MenuGroupPropsSchema>
