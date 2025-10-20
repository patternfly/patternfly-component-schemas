// Auto-generated Zod schema for TimestampTooltip
import { z } from 'zod'

export const TimestampTooltipSchema = z.object({
  /** Content displayed in the tooltip when using the "custom" variant. */
  content: z.custom<React.ReactNode>().optional(),
  /** A custom suffix to apply to a "default" variant tooltip. */
  suffix: z.string().optional(),
  /** Additional props passed to the tooltip. */
  tooltipProps: z.unknown().optional(),
  /** The variant of the tooltip. The "default" variant displays the date passed into
the timestamp's date prop as a UTC string. */
  variant: z.enum(['default', 'custom'])
})

export type TimestampTooltipProps = z.infer<typeof TimestampTooltipSchema>
