// Auto-generated Zod schema for Banner
import { z } from 'zod'

export const BannerSchema = z.object({
  /** Content rendered inside the banner. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the banner. */
  className: z.string().optional(),
  /** Color options for the banner, will be overwritten by any applied using the status prop. */
  color: z.enum(['red', 'orangered', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple']).optional(),
  /** If set to true, the banner sticks to the top of its container */
  isSticky: z.boolean().optional().default(false),
  /** Text announced by screen readers to indicate the type of banner. This prop should only
be passed in when the banner conveys status/severity. */
  screenReaderText: z.string().optional(),
  /** Status style options for the banner, will overwrite any color applied using the color prop. */
  status: z.enum(['success', 'warning', 'danger', 'info', 'custom']).optional()
})

export type BannerProps = z.infer<typeof BannerSchema>
